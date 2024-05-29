import buildMessage from "./buildMessage.js";
const testForm = document.getElementById("testForm");
const csvDataFile = document.getElementById("UploadFile");
const csvDataFile2 = document.getElementsByName("feito")[0];

testForm.addEventListener("submit", function (e) {



e.preventDefault();
const input = csvDataFile.files[0];
const input2 = csvDataFile2.files[0];
const reader = new FileReader();
const reader2 = new FileReader();
let analisar,feitos;

reader.onload = function (e) {
    const text = e.target.result;
    const csvData = d3.csvParse(text);
    analisar = csvData;

   
    reader2.onload = function (e) {
        const text = e.target.result;
        const csvData = d3.csvParse(text);
        feitos = csvData
        buildMessage(analisar,feitos);
    };
    
    reader2.readAsText(input2);

    
};

reader.readAsText(input);


});

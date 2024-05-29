/*
 *  Utiliza os dados recebidos para montar a mensagem do email
 *   
 *   {
 *      Atende : {number},
 *      Categoria: {string},
 *      Data Abertura: {string},
 *      Data Resposta: {string},
 *      Prazo Avaliação: {string},
 *      Unidade Solicitante: {number},
 *      Solicitante:{string},
 *      Atendente: {string}
 *    }
 *  
*/
function buildMessage(analisar,feitos){
        let html = "";
        let contadorAnalisar = 0;
        const data = new Date();
        let verifica;
        analisar.forEach((elementAnalise) => {
            verifica = true;
            feitos.forEach((elementFeito) => {
                if(elementAnalise["Atende"] == elementFeito["Atende"]|| elementAnalise["Atendente"] == "C000000"){
                        verifica = false;    
                }
            })
            if(verifica){
                contadorAnalisar++;
                let email = `${elementAnalise["Solicitante"]}@corp.caixa.gov.br`; 
                let texto = `Prezado(a) ${elementAnalise["Solicitante"]}%0D%0DMENSAGEM AUTOMÁTICA, FAVOR NÃO RESPONDER. AS AÇÕES DEVEM SER EFETUADAS NO SISTEMA ATENDE.%0D%0D1.	Existe ATENDE passível de avaliação.%0D%0D2.	Sua opinião e sua satisfação são muito importantes para nós, por isso pedimos gentilmente que acesse o link abaixo e avalie nosso atendimento.%0D%0Dhttp://inovacao.operacoes.caixa/apps/atende/#/responder/solicitacao/${elementAnalise["Atende"]}%0D%0D4.	Favor considerar a atenção, a cortesia e a disponibilidade do nosso atendente, assim como a solução apresentada, à luz das normas internas. %0D%0D5.	Em caso de dúvida ou resposta insuficiente, gentileza nos contatar pelo TEAMS (C122716) e/ou reabrir o atende antes da avaliação. %0D%0DAtenciosamente,%0D%0DCECOQ/FO`;
                let tabela = `${elementAnalise["Atende"]} 	${elementAnalise["Categoria"]}	${elementAnalise["Data Abertura"]}	${elementAnalise["Data Resposta"]}	${elementAnalise["Prazo Avaliação"]}	${elementAnalise["Unidade Solicitante"]}	${elementAnalise["Solicitante"]}	${elementAnalise["Atendente"]}	http://inovacao.operacoes.caixa/apps/atende/#/responder/solicitacao/ 	http://inovacao.operacoes.caixa/apps/atende/#/responder/solicitacao/${elementAnalise["Atende"]} 	@corp.caixa.gov.br	${elementAnalise["Solicitante"]}@corp.caixa.gov.br	----------	Prezado(a)	MENSAGEM AUTOMÁTICA, FAVOR NÃO RESPONDER. AS AÇÕES DEVEM SER EFETUADAS NO SISTEMA ATENDE. 1. Existe ATENDE passível de avaliação. 2. Sua opinião e sua satisfação é muito importante para nós, por isso pedimos gentilmente que acesse o link abaixo e avalie nosso atendimento.	4. Favor considerar a atenção, a cortesia e a disponibilidade do nosso atendente, assim como a solução apresentada, à luz das normas internas. 5. Em caso de dúvida ou resposta insuficiente, gentileza nos contatar pelo TEAMS e/ou reabrir o atende antes da avaliação. Atenciosamente, CECOQ/FO 	Prezado(a) ------MENSAGEM AUTOMÁTICA, FAVOR NÃO RESPONDER. AS AÇÕES DEVEM SER EFETUADAS NO SISTEMA ATENDE. 1. Existe ATENDE passível de avaliação. 2. Sua opinião e sua satisfação são muito importantes para nós, por isso pedimos gentilmente que acesse o link abaixo e avalie nosso atendimento.http://inovacao.operacoes.caixa/apps/atende/#/responder/solicitacao/${elementAnalise["Atende"]} 4. Favor considerar a atenção, a cortesia e a disponibilidade do nosso atendente, assim como a solução apresentada, à luz das normas internas. 5. Em caso de dúvida ou resposta insuficiente, gentileza nos contatar pelo TEAMS (C122716) e/ou reabrir o atende antes da avaliação. Atenciosamente,CECOQ/FO	Atende número ${elementAnalise["Atende"]}	${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
                
                
                
                html += `<a href = "mailto:${email},?Subject=Atende número ${elementAnalise["Atende"]},&body=${texto}">${email}</a> <input type="hidden" value="${tabela}" class="tabela">   <button class = "copy">Copiar</button> <br><br>`;
            }

        });
        
        document.write(`<h1>Foram encontrados ${contadorAnalisar} emails para analisar </h1> ` + html);
        const butoes = document.querySelectorAll(".copy");
        const tabela = document.querySelectorAll(".tabela");
    


        butoes.forEach((element,index) =>{
            element.onclick = () => {
                let copyText = tabela[index].value;
                           
                navigator.clipboard.writeText(copyText);
         
                alert(`Valor Copiado!!!`);
            }
           
           
        });
        
}   

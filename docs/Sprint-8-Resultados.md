---
id: rsprint8    
title: Resultados Sprint 8 
---

***    

<p align="justify">
<i>Sprint</i> que marca a recuperação da equipe, com o ritmo pré <i>release</i> sendo restabelecido, e novas histórias de usuário entregues.
</p>

## Fechamento da _Sprint_   

|     _Issue_      |     _Status_    |       Pontos       |
|:--------------:|:---------------:|:-------------:
|[US12 - Excluir Nota do Sistema](https://github.com/fga-eps-mds/2018.2-Kalkuli/issues/142) | Concluída | 2 |
|[US23 - Visualizar Lista de Relatórios](https://github.com/fga-eps-mds/2018.2-Kalkuli/issues/152) | Concluída |  3 | 
|[US35 - Inserir Descrição e Título na Nota](https://github.com/fga-eps-mds/2018.2-Kalkuli/issues/151) | Concluída |  8 |  
|[US24 - Visualizar um Relatório em Detalhes](https://github.com/fga-eps-mds/2018.2-Kalkuli/issues/153) | Concluída |  8 |  
|[_Spike_: Estudar _Serverless_](https://github.com/fga-eps-mds/2018.2-Kalkuli/issues/157) | Concluída |  13 | 
|[Spike: Migrar _Deploy_ do Serviço _Extraction_](https://github.com/fga-eps-mds/2018.2-Kalkuli/issues/155) |Concluída |  13 |  
|[Fazer o Plano de Projeto](https://github.com/fga-eps-mds/2018.2-Kalkuli/issues/156) |Não Concluída |  13 |   
|[US33 - Gerar Relatório por Período Definido](https://github.com/fga-eps-mds/2018.2-Kalkuli/issues/126) | Concluída | 13 |
|[Criar o EVM](https://github.com/fga-eps-mds/2018.2-Kalkuli/issues/124) |Não Concluída | 8 |  


Pontos Planejados Concluídos: 47    
Pontos de Dívida Concluídos: 13   
Pontos Não Agregados: 34  

> [_Milestone Sprint_ 8](https://github.com/fga-eps-mds/2018.2-Kalkuli/milestone/9?closed=1)

## _Burndown_    

<p align="justify">
As <i>issues</i> foram entregues ao final da <i>sprint</i>. Toda a equipe de desenvolvimento <a href="https://github.com/fga-eps-mds/2018.2-Kalkuli/issues/29#issuecomment-429435411" title="Quadro de Provas de Integrantes da Equipe (MDS)">estava atarefada com outra disciplina (EDA I)</a>, e a prova ocorreu ao final da <i>sprint</i> (quinta feira). Isso influenciou a entrega tardia das histórias de usuário, visto que além do código da história concluído, agora é necessário testar <i>back-end</i> e <i>front-end</i>.</p> 

![S8](assets/burndown-S8.png "Burndown Sprint 8")

## _Velocity_     
<p align="justify">
O <i>velocity</i> apresentou melhora, com a equipe quitando dívidas técnicas, e MDS entregando todas as histórias de usuário que ficou responsável. 
</p>   
<p align="justify">
EPS, por sua vez, ainda deixa dívidas técnicas por dificuldade em compreender os encargos relacionados às <i>issues</i>, como por exemplo o cálculo do valor da <i>sprint</i> no EVM, e a criação do plano de implantação, que incialmente foi interpretado como plano de projeto, oriundo do PMBOK.
</p> 

![S8](assets/velocity-S8.png "Burndown Sprint 8")

## Riscos    
<p align="justify">
Não foram identificados riscos novos no decorrer da <i>sprint</i>. 
</p>  
<p align="justify">
Para a próxima <i>sprint</i>, o risco de "falta de tempo" aumenta, visto que as equipes de MDS e EPS, terão <a href="https://github.com/fga-eps-mds/2018.2-Kalkuli/issues/29#issuecomment-431466883" title="Quadro de Provas de Integrantes da Equipe: Sprint #9">provas de disciplinas</a> durante a semana.
</p>



[![S7](assets/BurndowndeRiscos-S8.png "Clique para ver em detalhes")](https://docs.google.com/spreadsheets/d/1PYjMMXbWRgKwY5oZH5ekg4VbqTYYfdJImHmxCLH62xI/edit#gid=0) 

## Indicadores de Qualidade do Código   
<p align="justify">
Dos sete serviços planejados para o <i>software</i>, apenas dois foram trabalhados durante a <i>sprint</i>: <a href="https://github.com/Kalkuli/2018.2-Kalkuli_Receipts" title="Serviço de Apresentação de Notas">notas</a> e <a href="https://github.com/Kalkuli/2018.2-Kalkuli_Reports" title="Serviço de Geração de Relatórios">relatórios</a>.
</p>
<p align="justify">
<a href="https://github.com/Kalkuli/2018.2-Kalkuli_Gateway" title="API Gateway para o Kalkuli"><i>Gateway</i></a> e <a href="https://github.com/Kalkuli/2018.2-Kalkuli_Front-End" title="Front-end"><i>front-end</i></a> também sofreram alterações durante a <i>sprint</i>.
</p>  

### Cobertura, Manutenibilidade e Duplicação   
<p align="justify">
Análises fornecidas pelo <i>Code Climate</i>.
</p>  

<table>
  <tr align="center">
    <th>Serviço</th>
    <th><i>Status</i></th>
  </tr>
  <tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Extraction" title="Serviço de Extração de Texto de Notas Fiscais">Extração de texto</a></td>
    <td>
      Testes não implementados.
    </td>
  </tr>
  <tr>
    <tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Gateway" title="Camada de comunicação entre os microsserviços e o Front-End do sistema"><i>Gateway</i></a></td>
    <td>
      Testes não implementados.
    </td>
  </tr>
    <tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Tags" title="Serviço de Tageamento de Notas">Tags</a></td>
    <td>
    Serviço ainda não implementado.
    </td>
  </tr>
      <tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Users" title="Serviço de Gerenciamento de Usuários">Usuários</a></td>
    <td>
    Serviço ainda não implementado.
    </td>
  </tr>
    <tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Export" title="Serviço de Exportação de Relatórios">Exportação</a></td>
    <td>
    Serviço ainda não implementado.
    </td>
  </tr>
    <tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Reports" title="Serviço de Geração de Relatórios">Relatórios</a></td>
    <td>
    <a href="https://codeclimate.com/github/Kalkuli/2018.2-Kalkuli_Reports"><img src="assets/code/reports-s8.png" alt="HTML tutorial"></a>
    </td>
  </tr>
    <tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Interpretation" title="Serviço de Interpretação de Dados de Notas Fiscais">Interpretação</a></td>
    <td>
    <a href="https://codeclimate.com/github/Kalkuli/2018.2-Kalkuli_Interpretation"><img src="assets/code/interpretation-s8.png" alt="HTML tutorial"></a>
    </td>
  </tr>
    <tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Receipts" title="Serviço de Apresentação de Notas">Notas</a></td>
    <td>
    <a href="https://codeclimate.com/github/Kalkuli/2018.2-Kalkuli_Receipts"><img src="assets/code/receipts-s8.png" alt="HTML tutorial"></a>
    </td>
  </tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Front-End" title="Interface de comunicação com o usuário"><i>Front-end</i></a></td>
    <td>
      <a href="https://codeclimate.com/github/Kalkuli/2018.2-Kalkuli_Front-End"><img src="assets/code/front-end-s8.png" alt="HTML tutorial"></a>
    </td>
  </tr>
</table>


## Retrospectiva
<p align="justify">
Os pontos negativos exibidos na <i>sprint</i> anterior deram lugar à novos, entretanto, apenas um deles se conecta a um dos riscos já mapeados: "<i>dailies</i> ineficazes" podem refletir em falhas de comunicação.
</p>   

[![S7](assets/Retrospectiva-S8.png "Clique para ver em detalhes")](link)   

### _Sprint_ Anterior

<p align="justify">
Com relação aos pontos negativos apresentados na retrospectiva anterior, algumas medidas foram tomadas para que não se mostrassem novamente, são eles:

<style>
td {
    text-align: center; 
    vertical-align: middle;
}
</style>

<table>
  <tr align="center">
    <th>Ponto Negativo</th>
    <th>Correção Adotada</th>
  </tr>
  <tr>
    <td><p align="justify">Equipe apresentou produtividade mais baixa que o velocity.</p> <p align="justify">Equipe cansada e sem ritmo de trabalho.</p></td>
    <td>
      <ul>
      <li>Respeitar as provas que parte da equipe teria na semana, reduzindo a carga;</li>
      <li>As duplas de pareamento agora foram escolhidas entre MDS e não mais por EPS;</li>
      </ul>
    </td>
  </tr>
</table>
</p>


### Quadro de Conhecimento   

<p align="justify">
A equipe de desenvolvimento apresenta leve melhora em algumas das tecnologias adotadas, visto que estão em contato contante com estas. Entretanto, percebe-se que os testes ainda são motivo de preocupação na equipe, principalmente no <i>front-end</i>.
</p>

[![S8](assets/Conhecimento-S8.png "Clique para ver em detalhes")](https://docs.google.com/spreadsheets/d/19OGoemAfy_4nSFBbycD4kIoBFJwUjbXB7vxuQi8HLqY/edit#gid=1155946943)   

<p align="justify">
O quadro de conhecimento foi atualizado com as responsabilidades de EPS, visto que agora os papeis rotacionam.
</p>

[![S8](assets/Conhecimento-EPS-S8.png "Clique para ver em detalhes")](https://docs.google.com/spreadsheets/d/19OGoemAfy_4nSFBbycD4kIoBFJwUjbXB7vxuQi8HLqY/edit#gid=1155946943)


### Registros de Presença nas _Dailies_    

<p align="justify">
<ul>
<li><i>Dailies</i> de segunda e sexta feira são realizadas por <i>hangouts</i>, às 21h30 e 20h, respectivamente.</li>
<li><i>Dailies</i> de quarta-feira são realizadas por <i>telegram</i>, às 12h.</li>
<li><i>Dailies</i> de terça e quinta feira são realizadas presencialmente, às 15h50.</li>
</p>

| Nome    |Segunda Feira      | Terça Feira      | Quarta Feira     | Quinta Feira      | Sexta Feira      |     
|:-----:  |:-----------------:|:----------------:|:----------------:|:-----------------:|:----------------:|
|Bernardo |         ✔         |         ✔        |         ✔        |         ✔         |         ✔        |
|Clarissa |         ✔         |         ✔        |         ✔        |         ✔         |         ✘        |
|Esio     |         ✔         |         ✔        |         ✔        |         ✔         |         ✔        |
|Felipe   |         ✔         |         ✔        |         ✔        |         ✔         |         ✘        |
|Lucas    |         ✔         |         ✔        |         ✔        |         ✔         |         ✔        |
|Mariana  |         ✔         |         ✔        |         ✔        |         ✔         |         ✔        |
|Pedro    |         ✔         |         ✔        |         ✔        |         ✔         |         ✔        |
|Saleh    |         ✔         |         ✔        |         ✔        |         ✔         |         ✔        |
|Youssef  |         ✔         |         ✔        |         ✔        |         ✔         |         ✔        |      


## Avaliação do _Scrum Master_  

<p align="justify">
Aos poucos, a equipe recupera os ânimos pré <i>release</i>. As entregas continuam seguindo o alto nível estabelecido pela equipe desde o começo do projeto, ainda que a incidência de dívidas esteja alta. 
</p>

<p align="justify">
As <i>issues</i> que são dívida, em sua maioria, são atribuições de EPS, que enfrenta dificuldades em lidar com tecnologias/artefatos que nunca tiveram contato, e não consegue concluí-las em tempo hábil.
</p>

<p align="justify">
Um dos pontos negativos percebidos durante a <i>sprint</i> é a demora por parte de EPS em aceitar os <i>pull requests</i>, causando atraso ainda maior na finalização das histórias estavam em <i>revisão</i>. Para que o problema não se repita, agora MDS também têm o poder de revisar e aceitar <i>pull requests</i>.
</p>

<p align="justify">
O <i>burndown</i> ainda é insatisfatório, mas dado o contexto em que o projeto é concebido, durante um semestre, com outras disciplinas em paralelo, a equipe não conseguiria queimar os pontos uniformemente, visto que as histórias de usuário estão cada vez mais complexas e requerem <a href="https://fga-eps-mds.github.io/2018.2-Kalkuli/docs/defpronto#release-ii" title="Definição de Pronto, Release II">muitas atividades para serem dadas como concluídas</a>, ainda que estejam granularizadas o máximo possível.
</p>  

<p align="justify">
A equipe encontrou um ritmo saudável de trabalho, e os riscos diminuem à medida que o projeto avança. Os riscos de maior incidência, até o momento, estão controlados.
</p>

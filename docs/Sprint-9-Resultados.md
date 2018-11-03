---
id: rsprint9    
title: Resultados Sprint 9 
---

***    

<p align="justify">
texto introdutório 
</p>

## Fechamento da _Sprint_   

|     _Issue_      |     _Status_    |       Pontos       |
|:--------------:|:---------------:|:-------------:
(exemplo)
|[US12 - Excluir Nota do Sistema](https://github.com/fga-eps-mds/2018.2-Kalkuli/issues/142) | Concluída | 2 |

histórias da sprint 9 planejadas (inclusive as dívidas, sem hotfixes)


Pontos Planejados Concluídos: xx    
Pontos de Dívida Concluídos: xx   
Pontos Não Agregados: xx  

> [_Milestone Sprint_ 9](https://github.com/fga-eps-mds/2018.2-Kalkuli/milestone/10?closed=1)

## _Burndown_    

<p align="justify">
Análise do burndown.
</p> 

![S9](assets/burndown-S9.png "Burndown Sprint 9")

## _Velocity_     
<p align="justify">
analise do <i>velocity</i>. 
</p>   
<p align="justify">
texto.
</p> 

![S9](assets/velocity-S9.png "Burndown Sprint 9")

## Riscos    
<p align="justify">
Novos riscos identificados?. 
</p>  
<p align="justify">
riscos com maior probabilidade para a proxima sprint.
</p>



[![S9](assets/BurndowndeRiscos-S9.png "Clique para ver em detalhes")](https://docs.google.com/spreadsheets/d/1PYjMMXbWRgKwY5oZH5ekg4VbqTYYfdJImHmxCLH62xI/edit#gid=0) 

## Indicadores de Qualidade do Código   
<p align="justify">

serviços que tiveram código durante a sprint (ignorar os que não foram alterados durante a sprint)
 - export (teve teste);
 - front (teve teste);
 - gateway (nao tem teste);
 - interpret (testes não sofreram alteração pq o apenas o deploy do serviço foi alterado)

(use essa parte para padronizar os links)
<!-- Dos sete serviços planejados para o <i>software</i>, apenas dois foram trabalhados durante a <i>sprint</i>: <a href="https://github.com/Kalkuli/2018.2-Kalkuli_Receipts" title="Serviço de Apresentação de Notas">notas</a> e <a href="https://github.com/Kalkuli/2018.2-Kalkuli_Reports" title="Serviço de Geração de Relatórios">relatórios</a>.
</p>
<p align="justify">
<a href="https://github.com/Kalkuli/2018.2-Kalkuli_Gateway" title="API Gateway para o Kalkuli"><i>Gateway</i></a> e <a href="https://github.com/Kalkuli/2018.2-Kalkuli_Front-End" title="Front-end"><i>front-end</i></a> também sofreram alterações durante a <i>sprint</i>. -->
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
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Users" title="Serviço de Gerenciamento de Usuários">Usuários</a></td>
    <td>
    Serviço ainda não implementado.
    </td>
  </tr>
    <tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Export" title="Serviço de Exportação de Relatórios">Exportação</a></td>
    <td>
    (atualizar com print do code climate)
    </td>
  </tr>
    <tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Reports" title="Serviço de Geração de Relatórios">Relatórios</a></td>
    <td>
    Serviço não sofreu alterações durante a <i>sprint</i>.
    </td>
  </tr>
    <tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Interpretation" title="Serviço de Interpretação de Dados de Notas Fiscais">Interpretação</a></td>
    <td>
    Serviço não sofreu alterações durante a <i>sprint</i>.
    </td>
  </tr>
    <tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Receipts" title="Serviço de Apresentação de Notas">Notas</a></td>
    <td>
    Serviço não sofreu alterações durante a <i>sprint</i>.
    </td>
  </tr>
    <td><a href="https://github.com/Kalkuli/2018.2-Kalkuli_Front-End" title="Interface de comunicação com o usuário"><i>Front-end</i></a></td>
    <td>
    (atualizar com print do code climate)
      <a href="https://codeclimate.com/github/Kalkuli/2018.2-Kalkuli_Front-End"><img src="assets/code/front-end-s8.png" alt="Análise Front-end"></a>
    </td>
  </tr>
</table>


## Retrospectiva
<p align="justify">
texto introdutorio
</p>   

[![S9](assets/Retrospectiva-S9.png "Clique para ver em detalhes")](link)   

### _Sprint_ Anterior

<p align="justify">
(medidas tomadas para evitar os pontos negativos da sprint anterior)

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
texto.
</p>

[![S9](assets/Conhecimento-S9.png "Clique para ver em detalhes")](https://docs.google.com/spreadsheets/d/19OGoemAfy_4nSFBbycD4kIoBFJwUjbXB7vxuQi8HLqY/edit#gid=1155946943)   


[![S9](assets/Conhecimento-EPS-S9.png "Clique para ver em detalhes")](https://docs.google.com/spreadsheets/d/19OGoemAfy_4nSFBbycD4kIoBFJwUjbXB7vxuQi8HLqY/edit#gid=1155946943)


### Registros de Presença nas _Dailies_    

<p align="justify">

(colocar os horarios das dailies)

<ul>
<li><i>Dailies</i> de segunda e sexta feira são realizadas por <i>hangouts</i>, às 21h30 e 20h, respectivamente.</li>
<li><i>Dailies</i> de quarta-feira são realizadas por <i>telegram</i>, às 12h.</li>
<li><i>Dailies</i> de terça e quinta feira são realizadas presencialmente, às 15h50.</li>
</p>


(atualizar o quadro de presenças)
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
texto
</p>

<p align="justify">
texto
</p>

<p align="justify">
Um dos pontos negativos percebidos durante a <i>sprint</i> é a demora por parte de EPS em aceitar os <i>pull requests</i>, causando atraso ainda maior na finalização das histórias estavam em <i>revisão</i>. Para que o problema não se repita, agora MDS também têm o poder de revisar e aceitar <i>pull requests</i>.
</p>

<p align="justify">
texto
</p>  

<p align="justify">
texto
</p>

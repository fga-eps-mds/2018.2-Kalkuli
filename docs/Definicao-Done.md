---
id: defpronto    
title: Definição de Pronto 
---

***      

## _Release_ I  

<p align="justify">
A definição de pronto para <i>issues</i> abertas, dentro do intervalo de tempo até a primeira <i>release</i>, corresponde a:</p>
<ul>
    <li>Critérios de aceitação completos;</li>
    <li><i>Tasks</i> concluídas;</li>
</ul>

<p align="justify">
O <i>ZenHub</i> foi a ferramenta escolhida para auxiliar a equipe, que utilizará sua funcionalidade de <i>pipelines</i> para fins de rastreio e transparência do trabalho a ser realizado na <i>sprint</i>.</p>
As <i>pipelines</i> utilizadas serão:
<ul>
    <li><i>Backlog</i> - Todo o <i>Backlog</i> atualizado do produto.</li>
    <li><i>Sprint Backlog</i> - <i>Issues</i>/histórias que foram alocadas para a <i>Sprint.</i></li>
    <li><i>In Progress</i> - Histórias sendo trabalhadas no momento.</li>
    <li><i>Review</i> - Necessário revisão de EPS. (Documentação)</li>
    <li><i>Done</i> - <i>Issue</i>/história concluída.</li>
</ul>  

<p align="justify">
Assim que uma história técnica ou de usuário respeitar a definição de pronto acordada, e, caso possua testes unitários, e a <i>build</i> esteja passando, o responsável por ela abrirá um  <a href="https://github.com/fga-eps-mds/Kalkuli/blob/master/PULL_REQUEST_TEMPLATE.md"><i>Pull Request</i></a>, e assim que for revisado por um membro de EPS, que, caso aceite a história, ela finalmente poderá ser dada como concluída.    

A cobertura de testes deverá estar em 30%.
</p>


## _Release_ II


<p align="justify">
Para a <i>Release II</i>, a definição de pronto soferá mudanças.
Os critérios de pronto corresponderão a:
<ul>
    <li>Critérios de aceitação completos;</li>
    <li><i>Tasks</i> concluídas;</li>
    <li>Testes unitários completos.</li>
</ul>

As <i>pipelines</i> utilizadas no <i>ZenHub</i> corresponderão a:
<ul>
    <li><i>Backlog</i> - Todo o <i>Backlog</i> atualizado do produto.</li>
    <li><i>Sprint Backlog</i> - <i>Issues</i>/histórias que foram alocadas para a <i>Sprint.</i></li>
    <li><i>In Progress</i> - Histórias sendo trabalhadas no momento.</li>
    <li><i>Testing</i> - Com critérios de aceitação completos e <i>tasks</i> concluídas, a história agora deverá ser testada.</li>
    <li><i>Review</i> - Necessário revisão de EPS.</li>
    <li><i>Done</i> - <i>Issue</i>/história concluída.</li>
</ul> 

<p align="justify">
Assim que uma história técnica ou de usuário respeitar a definição de pronto, e a <i>build</i> esteja passando, o responsável por ela abrirá um  <a href="https://github.com/fga-eps-mds/Kalkuli/blob/master/PULL_REQUEST_TEMPLATE.md"><i>Pull Request</i></a>, e assim que for revisado por um membro de EPS, que, caso aceite a história, ela finalmente poderá ser dada como concluída.    

A cobertura de testes deverá estar em 90%.
</p>
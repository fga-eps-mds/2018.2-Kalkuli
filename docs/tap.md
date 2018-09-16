---
id: tap    
title: Termo de Abertura do Projeto
---

***   


## Introdução   
<p align="justify">
Este documento visa descrever os pontos iniciais do projeto Kalkuli.
</p>

## Descrição do Projeto    
<p align="justify">
O Kalkuli é um sistema que busca ajudar qualquer tipo de empresa que precisa fazer controle de suas notas fiscais periodicamente de maneira rápida e prática facilitando o registro e consulta dessas notas fiscais.
</p>

## Justificativa   
<p align="justify">
Atualmente existe uma dificuldade para empresas em registrar e guardar notas fiscais para o próprio controle. Essa dificuldade acontece porque não existe, até o momento, nenhum sistema ou tecnologia que seja capaz de automatizar este processo, ou seja, qualquer pessoa que deseje ter um controle das notas fiscais de gastos da sua empresa precisa que alguém dedique algum tempo registrando manualmente todas as notas sempre que for necessário, atividade que, além de consumir muito tempo, está sujeita a erros.</p>

Ainda que o registro eletrônico seja feito manualmente em uma planilha, por exemplo, o armazenamento dessas notas também é problemático, uma vez que o material utilizado para gerar essas notas tem a durabilidade muito comprometida, dificultando a leitura do seu conteúdo no futuro. Mesmo que, ainda assim, a empresa faça um controle dessas notas digitalizando todas e mantendo-as em um disco, não existe uma ferramenta que facilite a consulta e a organização das mesmas ou que permita que relatórios dessas notas sejam gerados posteriormente sem que, novamente, isto envolva algum trabalho manual.</p>

## Objetivo do Projeto   
<p align="justify">
O objetivo deste projeto é tornar o registro e consulta de notas fiscais de uma empresa um processo automatizado, fornecendo um relatório completo dos gastos em determinado período.</p>

## Produto do Projeto   
<p align="justify">
A proposta do projeto é de criar uma ferramenta onde o usuário precise apenas fazer o upload de notas fiscais digitalizadas para que o sistema se encarregue de extrair as informações automaticamente e de gerar um relatório de gastos periodicamente. O sistema também deverá armazenar essas notas para que o usuário possa realizar consultas e gerar novos relatórios de acordo com o período desejado. Os relatórios gerados mostrarão gráficos que indicam porcentagens de gastos em diferentes categorias de compras.</p>

## Requisitos de alto nível   
* O sistema será desenvolvido em plataforma web;
* O sistema deve ser capaz de extrair informações de notas fiscais escaneadas;
* O sistema deve permitir que o usuário faça controle dos gastos da sua empresa a partir das informações extraídas.

## Restrições do projeto
As restrições do presente projeto são:
* Aplicação restrita à plataforma web;
* Aplicação dependente de um navegador e de internet para sua utilização.

## Riscos iniciais   
<p align="justify">
Durante a fase de iniciação do projeto, riscos foram levantados e serão rastreados continuamente, de forma que a equipe de gerência consiga prevenir, transferir, mitigar ou aceitá-los, para que o projeto ocorra sem atrasos ou grandes impedimentos que possam comprometê-lo ou até mesmo inviabilizá-lo.</p>

<ul>
    <li>Indefinição de escopo</li>
    <li>Ausência de membros do time</li>
    <li>Divergência de horários dos membros</li>
    <li>Falta de integração entre a equipe</li>
    <li>Baixa produtividade dos integrantes da equipe</li>
    <li>Dificuldade com tecnologias escolhidas</li>
    <li>Requisitos com alto nível de complexidade</li>
    <li>Desentendimentos entre integrantes da equipe</li>
    <li>Falta de tempo de integrantes da equipe</li>
    <li>Problemas com ambiente de desenvolvimento</li>
    <li>Falhas de comunicação</li>
</ul>

<p align="justify">
O <i>Tech Leader</i> é o responsável por monitorar os riscos, e adotar medidas que facilitem com que sejam mitigados. O controle é feito através do <a href="https://docs.google.com/spreadsheets/d/1PYjMMXbWRgKwY5oZH5ekg4VbqTYYfdJImHmxCLH62xI/edit#gid=0"><i>burndown</i></a> de riscos, <a href="https://fga-eps-mds.github.io/2018.2-Kalkuli/docs/medicao#burndown-de-riscos-https-docsgooglecom-spreadsheets-d-1pyjmmxbwrgkwy5ozh5ekg4vbqtyyfdjimhmxclh62xi-edit-gid-0 ">indicador</a> adotado em equipes ágeis.
</p>


## Custo Estimado    
<p align="justify">
Os custos estimados são para 15 sprints de projeto, ou seja, 15 semanas, totalizando 3 meses e 3 semanas de projeto.</p>

### Pessoal   
| Papel na equipe                             | Quantidade de membros na função | Transporte e alimentação/ dia | Salário/ mês | Total         |
|---------------------------------------------|---------------------------------|-------------------------------|--------------|---------------|
| Desenvolvedor de Python, Flask e JavaScript |                5                |            R$ 20,00           |  R$ 4.000,00 |  R$ 81.000,00 |
| Arquiteto de Software                       |                1                |            R$ 20,00           |  R$ 6.000,00 |  R$ 23.700,00 |
| Product Manager                             |                1                |            R$ 20,00           |  R$ 7.000,00 |  R$ 27.450,00 |
| Tech Leader                                 |                1                |            R$ 20,00           |  R$ 5.000,00 |  R$ 19.950,00 |
| DevOps                                      |                1                |            R$ 20,00           |  R$ 6.000,00 |  R$ 23.700,00 |
| Total                                       |                -                |               -               |       -      | R$ 175.800,00 |

Observações:
* A estimativa salarial é baseada em uma pesquisa de mercado e leva em conta a experiência dos membros no trabalho a ser desenvolvido.
* Os valores pagos em transporte e alimentação levam em conta apenas quatro dias na semana porque parte do trabalho é desenvolvido remotamente.

### Aquisições
| Produto            | Quantidade | Valor (unidade) |
|--------------------|------------|-----------------|
| Notebook           |     10     |   R$ 30.000,00  |
| Espaço de trabalho |      1     |   R$ 1.160,00   |
| Total              |     -      |   R$ 31.160,00  |

Observação: O aluguel do espaço de trabalho leva em conta o valor para toda a duração do projeto (4 meses).


## Ferramentas
| Ferramenta           | Descrição                                                      |    Valor    |
|----------------------|----------------------------------------------------------------|:-----------:|
| ZenHub               | Ferramenta de gerenciamento de projetos ágeis                  |   R$ 0,00   |
| Adobe Creative Cloud* | Ferramentas de manipulação e criação de imagens                | R$ 1.952,00 |
| Draw.io              | Ferramenta para elaboração de diagramas                        |   R$ 0,00   |
| Git e GitHub         | Ferramenta de versionamento de código                          |   R$ 0,00   |
| Telegram e Hangouts  | Ferramentas de comunicação do time                             |   R$ 0,00   |
| Docker               | Ferramenta para criação de administração de ambientes isolados |   R$ 0,00   |
| Linux                | Sistema operacional                                            |   R$ 0,00   |
| Visual Studio Code   | Ferramenta de editor de texto                                  |   R$ 0,00   |
| AWS                  | Servidor                                                       |   R$ 0,00   |
| Total                |             -                                                  | R$ 1.952,00 |

Observação: *duas licenças de 4 meses do Adobe Creative Cloud.

## Total

|Tipo de Custo|     Valor     |
|-------------|---------------|
| Equipe      | R$ 175.800,00 |
| Aquisições  | R$ 31.160,00  |
| Ferramentas | R$ 1.952,00   |
| Total       | R$ 208.912,00 |

## Stakeholders
### Público alvo
O projeto busca contemplar necessidades de empresas de grande e pequeno porte, empreendedores autônomos ou quaisquer entidades que possuam relações comerciais.
### Equipe

| Nome              | Papel           | E-mail                          |
|-------------------|-----------------|---------------------------------|
| Bernardo Henrique | DevOps          |    bernardohrl.unb@gmail.com    |
| Clarissa Borges   | Product Manager |    clarissalimab08@gmail.com    |
| Felipe Hargreaves | Arquiteto       |      fhargreaves00@gmail.com    |
| Mariana Pícolo    | Tech Leader     |     mariananpicolo@gmail.com    |
| Ésio Gustavo      | Desenvolvedor   |     esio.gustavo@gmail.com      |
| Saleh Nazih       | Desenvolvedor   |    saleh.nazih.dev@gmail.com    |
| Lucas Dutra       | Desenvolvedor   |       ldutra98@gmail.com        |
| Jacó Apolinário   | Desenvolvedor   |    jacoapollinario@gmail.com    |
| Pedro Féo         | Desenvolvedor   |        pheofo@gmail.com         |
| Youssef Muhamad   | Desenvolvedor   | emaildeyoussefmuhamad@gmail.com |

## Referências
Love Mondays: a glassdoor company, © 2018. Página de busca de salários em determinadas regiões. Disponível em: <https://www.lovemondays.com.br/>. Acesso em 15 de setembro de 2018.

Coworking Brasil, © 2018. Página de busca de espaços de coworking. Disponível em <https://coworkingbrasil.org/>. Acesso em 15 de setembro de 2018.

Documentação Dr. Down, 2018. Página do Termo de Abertura do Projeto no GitHub Pages. Disponível em: <https://fga-eps-mds.github.io/2018.1-Dr-Down/eps/TAP/>. Acesso em 6 de setembro de 2018.

Documentação Fórum de Coordenadores DEG, 2017. Página do termo de Abertura do Projeto na wiki do GitHub. Disponível em: <https://github.com/fga-eps-mds/2017.1-Forum-Coordenadores-DEG/wiki/Termo-de-Abertura-de-Projeto>. Acesso em 6 de setembro de 2018.
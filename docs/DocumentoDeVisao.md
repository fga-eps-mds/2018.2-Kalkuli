---
id: docVisao    
title: Documento de Visão
---

***


## Histórico de Revisão

|Data| Versão |Modificação|Autor|
|:---:|:---:|:---:|:--:|
| 28/08/2018 |   0.1  | Tópicos: 1, 2.1, 3.2, 3.3, 3.4, 3.5, 3.5.1| Ésio Gustavo, Lucas Dutra, Saleh Nazih |
| 29/08/2018 |   0.2  | Tópicos: 2.2, 2.3, 3.5.1| Ésio Gustavo |
| 29/08/2018 |   0.3  | Tópicos: 3.6.1, 3.8| Lucas Dutra, Saleh Nazih | 
| 31/08/2018 |   0.3.1  | Tópico: 3.8| Lucas Dutra |
| 31/08/2018 |   0.4  | Tópicos: 4.1, 4.2, 3.8.1, 3.8.2, 3.8.3| Lucas Dutra |
| 31/08/2018 |   0.5  | Tópicos: 7, 9| Youssef Muhamad |
| 31/08/2018 |   0.6  | Tópicos: 5.1, 5.2, 5.3, 5.4| Saleh Nazih |
| 02/09/2018 |   0.6.1  | Tópicos: 3.2, 3.5.1, 3.5.2, 3.5.3| Lucas Dutra |
| 03/09/2018 |   1.0  | Tópicos: 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 3.7 | Ésio Gustavo |
| 03/09/2018 |   2.0  | Tópicos: 3.7.1, 3.7.2, 3.7.3, 3.7.4, 1.1, 1.2, 1.3, 2.3, 4.1| Ésio Gustavo |
| 23/11/2018 |   3.0  | Tópicos: 1.2, 1.3, 2.2, 3.1, 5.4, 5.5, 5.6| Lucas Dutra |

## 1. Introdução

### 1.1 Finalidade

<p style="text-align:justify">&emsp;&emsp;Este documento tem como objetivo demonstrar as características do desenvolvimento do Kalkuli. Além disso, visa auxiliar no contexto em que a ferramenta se aplica.</p>

### 1.2 Escopo
<p style="text-align:justify">&emsp;&emsp;A nota fiscal é um documento que tem por finalidade, registrar uma transferência de propriedade, o qual pode ser de um produto ou de um serviço comercial. A emissão dessa notas é de fundamental importância para a empresa ficar regularizada perante o estado. O motivo disso é  elas são obrigadas a guardar o talonário de notas por cinco anos, pois durante esse tempo, o consumidor pode exigir uma segunda via da nota fiscal emitida. O não cumprimento dessas leis podem acarretar em multas pesadas que podem passar de R$1.000,00 por documento perdido ou XML de Nota Fiscal.</p>

<p style="text-align:justify">&emsp;&emsp;Além de ser importante para regularização da empresa, as notas fiscais são ricas de dados que fornecem informações fundamentais para tomadas de decisões gerenciais mais inteligentes.</p>

<p style="text-align:justify">&emsp;&emsp;E como forma de resolver esses impasses, o Kalkuli tem como escopo as funcionalidades de não somente interpretar as informações contidas em notas fiscais, como armazená-las de uma maneira mais eficiente e gerar relatórios por período a partir das NFs inseridas, para o público de microempresários.</p>

### 1.3 Não Escopo

<p style="text-align:justify">&emsp;&emsp;O Kalkuli não tem a finalidade de atender as necessidades empresas de grande/médio porte, empresas com renda operacional bruta anual maior que R$ 4,8 milhões, e pessoas físicas. Além disso, a aplicação não atende notas fiscais escritas à mão e também não armazena, em seu banco de dados, as notas inseridas pelo usuário, somente salva as informações extraídas da mesma. </p>

### 1.4 Definições, Acrônimos e Abreviações

* NF - Notas Fiscais
* MDS - Método de Desenvolvimento de *Software*
* EPS - Engenharia de Produto de *Software*

### 1.5 Referências

>Documento de Visão: A estrutura de tópicos do documento de visão. IBM.
Disponível em: <a href='https://goo.gl/BNAJtT'><https://goo.gl/BNAJtT></a>. Acesso em: 29 de agosto de 2018;

>Porte de empresa: Classificação de porte dos clientes. BNDES. Disponível em: <a href='https://goo.gl/ybNS33'><https://goo.gl/ybNS33></a>. Acesso em: 03 de setembro de 2018;

>Nota Fiscal Eletrônica: Guia completo com tudo o que você precisa saber sobre notas fiscais. Egestor. Disponível em: <a href='https://goo.gl/vKzk9b'><https://goo.gl/vKzk9b></a>. Acesso em: 29 de agosto de 2018;

>Quais os riscos de não armazenar notas fiscais corretamente?. Arquivei. Disponíel em: <a href='https://goo.gl/eQKwd9'><https://goo.gl/eQKwd9></a>. Acesso em: 30 de Agosto de 2018;

>Portal Nota Fiscal: Legislação. Fazenda. Disponível em: <a href='https://goo.gl/FBfNjB'><https://goo.gl/FBfNjB></a>. Acesso em: 03 de setembro de 2018.

### 1.6 Visão Geral

<p style="text-align:justify">&emsp;&emsp;Este documento descreve de forma detalhada o embasamento, o planejamento e a construção do software em questão. Assim contempla a visão de negócio, os problemas que serão solucionados, a descrição do perfil das partes interessadas no projeto, visão de nível superior dos recursos, interfaces com outros aplicativos e configurações de sistemas do produto, descrição dos recursos utilizados pela aplicação, as restrições, intervalos de qualidade para desempenho, robustez, tolerância a erros, usabilidade e características semelhantes que não são capturadas pelos recursos, outros requisitos para a aplicação do produto e a documentação que será necessária para o bom andamento da aplicação.</p>

## 2. Posicionamento

### 2.1 Oportunidade de Negócios

<p style="text-align:justify">&emsp;&emsp;Por ser recomendável que sejam guardadas até 5 anos ou até o prazo de vida útil do produto/serviço, as notas fiscais geram bastante bagunça e desorganização. Além disso, essas notas geram um acúmulo de informações que muitas vezes não são usadas e, dessa forma, gerando lixo. Por esse motivo, a aplicação iria auxiliar o nosso público alvo a conseguir a organizar sua vida econômica por meio de relatórios que são gerados dinamicamente.</p>

### 2.2 Descrição do Problema

<table>
  <tr><th> O problema de </th><td>Interpretar e armazenar de forma eficiente os dados contidos em notas fiscais</td></tr>
  <tr><th> afeta </th><td>Empresas</td></tr>
  <tr><th> cujo impacto é </th><td>Desregularização com  a Receita Federal, multas, pagar imposto inadequado e, principalmente, a possibilidade de tomar decisões gerenciais menos inteligentes</td></tr>
  <tr><th> uma boa solução seria </th><td>A automação do armazenamento e interpretação dos dados das NFs</td></tr>
</table>


### 2.3 Sentença de Posição do Produto

<table>
  <tr><th>Para</th><td>Pequenas e micro empresas</td></tr>
  <tr><th>Que</th><td>Tem problemas de armazenar e interpretar os dados de notas fiscais</td></tr>
  <tr><th>O Kalkuli</th><td>É uma aplicação de controle e armazenamento de dados provenientes de NF</td></tr>
  <tr><th>Que</th><td>Auxilia a empresa a interpretar os dados das notas fiscais que ela adquire e os armazenam de maneira eficientes</td></tr>
  <tr><th>Diferente de</th><td>Novoto e Espresso que somente armazena os dados</td></tr>
  <tr><th>Nosso produto</th><td>Os interpreta também</td></tr>
</table>

## 3. Descrição dos Envolvidos e dos Usuários

### 3.1 Resumo dos Envolvidos

| Nome | Descrição | Responsabilidades |
|:---:|:---:|:---:|
| Equipe de desenvolvimento | Estudantes da disciplina de Métodos de Desenvolvimento de Software na Universidade de Brasília - FGA | Contribuir ativamente com o desenvolvimento e implementação do software citado neste documento |
| Equipe de gestão do projeto | Estudantes da disciplina de Engenharia de Produto de Software na Universidade de Brasília - FGA | Gerenciar tempo, escopo, riscos, tomadas de decisões para garantir a viabilidade do projeto e garantir a aplicação dos princípios ágeis |
| Equipe de avaliação e suporte | Professora e Coaches das disciplinas de EPS e MDS | Auxiliar a equipe ao longo do desenvolvimento do projeto |
| Empresas que emitem notas fiscais | Empresas que prestam o serviço/produto | Emitem as notas fiscais para os clientes |

### 3.2 Resumo dos Usuários

| Nome | Descrição | Responsabilidades |
|:---:|:---:|:---:|
| Empresas de pequeno porte | Clientes que querem ter controle de seus gastos e ter mais facilidade no gerenciamento das notas fiscais | Utilizar o sistema e manter e alimentar a base de dados |

### 3.3 Ambiente do Usuário

&emsp;&emsp;O sistema Web poderá ser usado pela empresa em navegadores mais conhecidos (Mozilla Firefox, Google Chrome, Opera, Microsoft Edge) para melhor funcionamento do software.</p>

### 3.4 Perfis dos Envolvidos

#### 3.4.1 Equipe de avaliação e suporte

<table>
  <tr><th>Representante</th><td>Prof. Carla Rocha</td></tr>
  <tr><th>Descrição</th><td>Equipe responsável pela avaliação e direcionamento do projeto.</td></tr>
  <tr><th>Tipo</th><td>Professora e coach do grupo da disciplina.</td></tr>
  <tr><th>Responsabilidades</th><td>Direcionar e dar suporte a equipe de desenvolvimento e gestão, nas disciplinas Métodos de Desenvolvimento de Software e Engenharia de Produto de Software, quanto ao desenvolvimento do projeto.</td></tr>
  <tr><th>Critérios de Sucesso</th><td>A entrega do projeto juntamente com uma documentação coerente estabelecida, a partir das orientações dadas ao longo do semestre.</td></tr>
  <tr><th>Envolvimento</th><td>Alto</td></tr>
</table>

#### 3.4.2 Equipe de Desenvolvimento

<table>
  <tr><th>Representantes</th><td>Esio Gustavo Pereira Freitas<br>
  Lucas Dutra Ferreira do Nascimento<br>
  Pedro Henrique Andrade Féo<br>
  Saleh Nazih Abdel Kader<br>
  Youssef Muhamad Yacoub Falaneh<br></td></tr>
  <tr><th>Descrição</th><td>Equipe responsável pelo desenvolvimento da aplicação.</td></tr>
  <tr><th>Tipo</th><td>Estudantes de Métodos de Desenvolvimento de Software na Universidade de Brasília - FGA UnB/Gama.</td></tr>
  <tr><th>Responsabilidades</th><td>Desenvolver.</td></tr>
  <tr><th>Critérios de Sucesso</th><td>Entregar o software com as funcionalidades desejadas pelo público alvo dentro do prazo da disciplina.</td></tr>
  <tr><th>Envolvimento</th><td>Alto</td></tr>
</table>

#### 3.4.3 Equipe de Gestão do Projeto

<table>
  <tr><th>Representantes</th><td>Bernardo Henrique Rosa Lima<br>
  Clarissa Lima Borges<br>
  Felipe de Oliveira Hargreaves<br>
  Mariana Pícolo<br></td></tr>
  <tr><th>Descrição</th><td>Equipe responsável pelo gerenciamento do software.</td></tr>
  <tr><th>Tipo</th><td>Estudantes de Engenharia de Produto de Software na Universidade de Brasília - FGA UnB/Gama.</td></tr>
  <tr><th>Responsabilidades</th><td>Gerenciar tempo, escopo, riscos, tomadas de decisões para garantir a viabilidade do projeto e garantir a aplicação dos princípios ágeis.</td></tr>
  <tr><th>Critérios de Sucesso</th><td>Manter a motivação e produção da equipe alta e constante, para o software ser entregue no prazo e com alta qualidade.</td></tr>
  <tr><th>Envolvimento</th><td>Alto</td></tr>
</table>

### 3.5 Perfis dos Usuários

#### 3.5.1 Micro e Pequenos Empresários

<table>
  <tr><th>Representante</th><td>Clarissa Lima Borges<br></td></tr>
  <tr><th>Descrição</th><td>Pequenas e micro empresas que emitem notas fiscais.</td></tr>
  <tr><th>Tipo</th><td>Usuários com baixo ou médio conhecimento técnico.</td></tr>
  <p style="text-align:justify" ><tr><th>Responsabilidades</th><td>Passar as suas notas fiscais escaneadas pelo site, obtendo informações em formatos de gráficos, facilitando o seu trabalho.</td></tr></p>
  <tr><th>Critérios de Sucesso</th><td>O sistema deverá ser útil para poder captar informações de pdf’s escaneados, contribuindo para o trabalho de micro e pequenos empresários.</td></tr>
  <tr><th>Comentários/Problemas</th><td>Desafio de lidar com informações variadas. Além do baixo conhecimento sobre notas fiscais.</td></tr></p>
</table>

### 3.6 Principais Necessidades dos Usuários ou dos Envolvidos

| Necessidade | Prioridade | Preocupações |Solução Atual| Soluções Propostas |
|:---:|:---:|:---:|:---:|:---:|
| Armazenar e interpretar dados das notas fiscais físicas | Alta | Estar regularizado com a Receita Federal e poder fazer uma gestão financeira focada em resultados | Armazenar manualmente em planilhas | Automatizar esse processo |

### 3.7 Alternativas e Concorrências

#### 3.7.1 Novoto

<p style="text-align:justify">&emsp;&emsp;Novoto é um aplicativo multiplataforma que permite ao usuário tirar foto, catalogar e armazenar notas fiscais. Além disso, também funciona como alerta para o usuário de contas e pagamentos próximos.<br/></p>
<p style="text-align:justify">&emsp;&emsp;Diferentemento do kalkuli, o Novoto, além de não preencher os campos das notas dinamicamente para usuário, não faz uma interpretação inteligente dos dados obtidos.</p>

#### 3.7.2 Guia Bolso

<p style="text-align:justify">&emsp;&emsp;Guia Bolso é um software que possui três principais funcionalidades, entre elas está o controle financeiro, que é integrado com a conta bancária do usuário e categoriza os gastos, informa o saldo e estabelece metas de gastos estipulados pelo usuário. Outra funcionalidade é o radar de CPF, que informa a situação de quitação de débitos. Por último, o empréstimo, que fornece uma pesquisa baseada na conta bancária conectada pelo usuário e a oportunidade de realizar este procedimento pelo aplicativo.<br/></p>
<p style="text-align:justify">&emsp;&emsp;Mesmo tendo uma gama de opções, o Guia Bolso não tem o serviço de gerenciamento de NF, o qual é muito importante para a tomadas de decisões inteligentes dentro de uma empresa.</p>

#### 3.7.3 Conta Azul

<p style="text-align:justify">&emsp;&emsp;Conta azul é uma aplicação mais voltada para empresas, pois a mesma fornece ao usuário informações sobre o financeiro, os gastos e as vendas da empresa cadastrada. Porém, esse software é pago.<br/>
<p style="text-align:justify">&emsp;&emsp;O diferencial do Kalkuli em relação a essa empresa é o preenchemento e interpretação dos dados obtidos de notas fiscais dinamicamente.</p>

#### 3.7.4 Espresso 

<p style="text-align:justify">&emsp;&emsp;Espresso é uma aplicação de reembolso para empresas. O aplicativo tem três funcionalidades principais, que são o registro de viagem, classificação e politica de despesas.<br/></p>
<p style="text-align:justify">&emsp;&emsp;O Espresso é o aplicativo concorrente que mais chega perto dos nossos serviços. No entanto, como os outros, o usuário precisa preencher os dados manualmente. Dessa forma, o preenchimento dinamico do Kalkuli acaba sendo uma vantagem em relação a esse serviço pelo ganho de produtividade que oferece. </p>

## 4. Visão Geral do Produto

### 4.1 Perspectiva do Produto

<p style="text-align:justify">&emsp;&emsp;O produto se difere dos demais do mercado por ser capaz de, através de notas fiscais escaneadas e adicionadas pelo usuário, fazer o processamento das informações contidas. Além disso, a aplicação trata e fornece dados úteis para controle de gastos do cliente.</p>

### 4.2 Resumo dos Recursos

| Benefício para o Cliente | Recursos de Suporte |
|:---:|:---:|
| Processamento das informações provenientes de notas fiscais escaneadas | Elimina o trabalho manual do usuário de preencher várias informações. |
| Balanço de gastos do usuário no período desejado | O software apresenta as despesas do usuário semanalmente ou mensalmente, de acordo com as notas fiscais inseridas pelo mesmo. |
| Separação de gastos por tags | Indicam para qual finalidade o usuário dedicou seu dinheiro em maior volume. |

## 5. Recursos do Produto

### 5.1 Acesso

<p style="text-align:justify">&emsp;&emsp;O usuário poderá ter acesso ao sistema, através de uma autenticação por login.</p>

### 5.2 Cadastro

<p style="text-align:justify">&emsp;&emsp;O usuário poderá criar um cadastro no próprio site, para ter acesso ao sistema.</p>

### 5.3 Submissão de Informações
<p style="text-align:justify">&emsp;&emsp;Dentro do sistema, haverá um espaço para submissão de Notas Fiscais, onde serão extraídas as suas informações para serem tratadas.</p>

### 5.4 Visualização de Dados
<p style="text-align:justify">&emsp;&emsp;O sistema fornecerá
gráficos gerados a partir das informações extraídas da nota, onde dará liberdade interpretativa de informações ao usuário.</p>

### 5.5 Classificação de Gastos
<p style="text-align:justify">&emsp;&emsp;O usuário, ao inserir uma nota ou posteriormente, poderá classificar aquela nota com uma categoria e nome de acordo com sua necessidade.</p>

### 5.6 Relatórios de Gastos
<p style="text-align:justify">&emsp;&emsp;O sistema fornecerá, baseado no período de escolha do usuário, relatórios, que irão conter a soma total de gastos provenientes das notas fiscais inseridas.</p>
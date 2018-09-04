---
id: docVisao    
title: Documento de Visão
---

***


# Histórico de Revisão

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

# 1. Introdução

## 1.1 Finalidade

&emsp;&emsp;Este documento tem como objetivo demonstrar as características do desenvolvimento d@NOME. Além disso, visa auxiliar no contexto em que a ferramenta se aplica.

## 1.2 Escopo
&emsp;&emsp;A nota fiscal é um documento que tem por finalidade, registrar uma transferência de propriedade, o qual pode ser de um produto ou de um serviço comercial. A emissão dessa notas é de fundamental importância para a empresa ficar regularizada perante o estado. O motivo disso é  elas são obrigadas a guardar o talonário de notas por cinco anos, pois durante esse tempo, o consumidor pode exigir uma segunda via da nota fiscal emitida. O não cumprimento dessas leis podem acarretar em multas pesadas que podem passar de R$1.000,00 por documento perdido ou XML de Nota Fiscal.

&emsp;&emsp;Além de ser importante para regularização da empresa, as notas fiscais são ricas de dados que fornecem informações fundamentais para tomadas de decisões gerenciais mais inteligentes. APRESENTAR QUAIS SÃO ESSES DADOS.

&emsp;&emsp;E como forma de resolver esses impasses, @NOME tem como escopo as funcionalidades de não somente armazenar de maneira eficiente as notas fiscais, como também interpreta as informações delas para microempresários. ESSE PARÁGRAFO VAI FICAR MELHOR DEPOIS DA GENTE DECIDIR O QUE O PROGRAMA VAI INTERPRETAR. 

## 1.3 Não Escopo

&emsp;&emsp;@NOME não tem a finalidade de atender as necessidades empresas de grande/médio porte, empresas com renda operacional bruta anual maior que R$ 4,8 milhões, e pessoas físicas. Além disso, a aplicação não atende notas fiscais escritas à mão. 

## 1.4 Definições, Acrônimos e Abreviações

* NF - Notas Fiscais
* MDS - Método de Desenvolvimento de *Software*
* EPS - Engenharia de Produto de *Software*

## 1.5 Referências

>Documento de Visão: A estrutura de tópicos do documento de visão. IBM.
Disponível em: <a href='https://goo.gl/BNAJtT'><https://goo.gl/BNAJtT></a>. Acesso em: 29 de agosto de 2018;

>Porte de empresa: Classificação de porte dos clientes. BNDES. Disponível em: <a href='https://goo.gl/ybNS33'><https://goo.gl/ybNS33></a>. Acesso em: 03 de setembro de 2018;

>Nota Fiscal Eletrônica: Guia completo com tudo o que você precisa saber sobre notas fiscais. Egestor. Disponível em: <a href='https://goo.gl/vKzk9b'><https://goo.gl/vKzk9b></a>. Acesso em: 29 de agosto de 2018;

>Quais os riscos de não armazenar notas fiscais corretamente?. Arquivei. Disponíel em: <a href='https://goo.gl/eQKwd9'><https://goo.gl/eQKwd9></a>. Acesso em: 30 de Agosto de 2018;

>Portal Nota Fiscal: Legislação. Fazenda. Disponível em: <a href='https://goo.gl/FBfNjB'><https://goo.gl/FBfNjB></a>. Acesso em: 03 de setembro de 2018.

## 1.6 Visão Geral

&emsp;&emsp;Este documento descreve de forma detalhada o embasamento, o planejamento e a construção do software em questão. Assim contempla a visão de negócio, os problemas que serão solucionados, a descrição do perfil das partes interessadas no projeto, visão de nível superior dos recursos, interfaces com outros aplicativos e configurações de sistemas do produto, descrição dos recursos utilizados pela aplicação, as restrições, intervalos de qualidade para desempenho, robustez, tolerância a erros, usabilidade e características semelhantes que não são capturadas pelos recursos, outros requisitos para a aplicação do produto e a documentação que será necessária para o bom andamento da aplicação.

# 2. Posicionamento

## 2.1 Oportunidade de Negócios

&emsp;&emsp;Por ser recomendável que sejam guardadas até 5 anos ou até o prazo de vida útil do produto/serviço, as notas fiscais geram bastante bagunça e desorganização. Além disso, essas notas geram um acúmulo de informações que muitas vezes não são usadas e, dessa forma, gerando lixo. Por esse motivo, a aplicação iria auxiliar o nosso público alvo a conseguir a organizar sua vida econômica por meio de relatórios que são gerados dinamicamente.

## 2.2 Descrição do Problema

<table>
  <tr><th> O problema de </th><td>Armazenar de forma eficiente notas fiscais e interpretar os dados contido nelas</td></tr>
  <tr><th> afeta </th><td>Empresas</td></tr>
  <tr><th> cujo impacto é </th><td>Desregularização com  a Receita Federal, multas, pagar imposto inadequado e a possibilidade de tomar decisões gerenciais menos inteligentes</td></tr>
  <tr><th> uma boa solução seria </th><td>A automação do armazenamento das NE e interpretação dos dados delas</td></tr>
</table>


## 2.3 Sentença de Posição do Produto

<table>
  <tr><th>Para</th><td>Pequenas e micro empresas</td></tr>
  <tr><th>Que</th><td>Tem problemas de armazenar e  interpretar os dados de notas fiscais</td></tr>
  <tr><th>O (nome do produto)</th><td>é uma aplicação de controle e armazenamento de NE</td></tr>
  <tr><th>Que</th><td>auxilia a empresa a interpretar os dados das notas fiscais que ela adquire  e as armazenam de maneira eficientes</td></tr>
  <tr><th>Diferente de</th><td>Novoto que somente</td></tr>
  <tr><th>Nosso produto</th><td>interpreta os dados</td></tr>
</table>

# 3. Descrição dos Envolvidos e dos Usuários

## 3.1 Resumo dos Envolvidos

| Nome | Descrição | Responsabilidades |
|:---:|:---:|:---:|
| Equipe de desenvolvimento | Estudantes da disciplina de Métodos de Desenvolvimento de Software na Universidade de Brasília - FGA | Contribuir ativamente com o desenvolvimento e implementação do software citado nesse documento |
| Equipe de gestão do projeto | Estudantes da disciplina de Engenharia de Produto de Software na Universidade de Brasília - FGA | Gerenciar tempo, escopo, riscos, tomadas de decisões para garantir a viabilidade do projeto e garantir a aplicação dos princípios ágeis |
| Equipe de avaliação e suporte | Professora e Coaches das disciplinas de EPS e MDS | Auxiliar a equipe ao longo do desenvolvimento do projeto |
| Empresas que emitem notas fiscais | Empresas que prestam o serviço/produto | Emitem as notas fiscais para os clientes |

## 3.2 Resumo dos Usuários

| Nome | Descrição | Responsabilidades |
|:---:|:---:|:---:|
| Empresas de pequeno porte | Clientes que querem ter controle de seus gastos e ter mais facilidade no gerenciamento das notas fiscais | Utilizar o sistema e manter e alimentar a base de dados |

## 3.3 Ambiente do Usuário

&emsp;&emsp;O sistema Web poderá ser usado pelo profissional de educação em navegadores mais conhecidos (Mozilla Firefox, Google Chrome, Opera, Microsoft Edge) para melhor funcionamento do software.

## 3.4 Perfis dos Envolvidos

### 3.4.1 Equipe de avaliação e suporte

<table>
  <tr><th>Representante</th><td>Prof. Carla Rocha</td></tr>
  <tr><th>Descrição</th><td>Equipe responsável pela avaliação e direcionamento do projeto.</td></tr>
  <tr><th>Tipo</th><td>Professora e coach do grupo da disciplina.</td></tr>
  <tr><th>Responsabilidades</th><td>Direcionar e dar suporte a equipe de desenvolvimento e gestão, nas disciplinas Métodos de Desenvolvimento de Software e Engenharia de Produto de Software, quanto ao desenvolvimento do projeto.</td></tr>
  <tr><th>Critérios de Sucesso</th><td>A entrega do projeto juntamente com uma documentação coerente estabelecida, a partir das orientações dadas ao longo do semestre.</td></tr>
  <tr><th>Envolvimento</th><td>Alto</td></tr>
</table>

### 3.4.2 Equipe de Desenvolvimento

<table>
  <tr><th>Representantes</th><td>Esio Gustavo Pereira Freitas<br>
  Jacó Apolinário da Silva<br>
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

### 3.4.3 Equipe de Gestão do Projeto

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

## 3.5 Perfis dos Usuários

### 3.5.1 Micro e Pequenos Empresários

<table>
  <tr><th>Representante</th><td>Clarissa Lima Borges<br></td></tr>
  <tr><th>Descrição</th><td>Pequenas e micro empresas que emitem notas fiscais.</td></tr>
  <tr><th>Tipo</th><td>Usuários com baixo ou médio conhecimento técnico.</td></tr>
  <tr><th>Responsabilidades</th><td>Passar as suas notas fiscais escaneadas pelo site, obtendo informações em formatos de gráficos, facilitando o seu trabalho.</td></tr>
  <tr><th>Critérios de Sucesso</th><td>O sistema deverá ser útil para poder captar informações de pdf’s escaneados, contribuindo para o trabalho de micro e pequenos empresários.</td></tr>
  <tr><th>Comentários/Problemas</th><td>Desafio de lidar com informações variadas. Além do baixo conhecimento sobre notas fiscais.</td></tr>
</table>

## 3.6 Principais Necessidades dos Usuários ou dos Envolvidos

| Necessidade | Prioridade | Preocupações |Solução Atual| Soluções Propostas |
|:---:|:---:|:---:|:---:|:---:|
| Armazenar e interpretar dados das notas fiscais físicas | Alta | Estar regularizado com a Receita Federal e poder fazer uma gestão financeira focada em resultados | Armazenar manualmente em planilhas | Automatizar esse processo |

## 3.7 Alternativas e Concorrências

### 3.7.1 Novoto

&emsp;&emsp;Novoto é um aplicativo multiplataforma que permite ao usuário tirar foto, catalogar e armazenar notas fiscais. Além disso, também funciona como alerta para o usuário de contas e pagamentos próximos.

### 3.7.2 Guia Bolso

&emsp;&emsp;Guia Bolso é um software que possui três principais funcionalidades, entre elas está o controle financeiro, que é integrado com a conta bancária do usuário e categoriza os gastos, informa o saldo e estabelece metas de gastos estipulados pelo usuário. Outra funcionalidade é o radar de CPF, que informa a situação de quitação de débitos. Por último, o empréstimo, que fornece uma pesquisa baseada na conta bancária conectada pelo usuário e a oportunidade de realizar este procedimento pelo aplicativo.

### 3.7.3 Conta Azul

&emsp;&emsp;Conta azul é uma aplicação mais voltada para empresas, pois a mesma fornece ao usuário informações sobre o financeiro, os gastos e as vendas da empresa cadastrada. Porém, esse software é pago.

# 4. Visão Geral do Produto

## 4.1 Perspectiva do Produto

&emsp;&emsp;O produto se difere dos demais do mercado pois será capaz de, através de notas fiscais escaneadas adicionadas pelo usuário, fazer o processamento das informações contidas, tratá-las e fornecer dados úteis para controle de gastos e finanças do cliente.

## 4.2 Resumo dos Recursos

| Benefício para o Cliente | Recursos de Suporte |
|:---:|:---:|
| Processamento das informações provenientes de notas fiscais escaneadas | Elimina o trabalho manual do usuário de preencher várias informações. |
| Balanço de gastos do usuário no período desejado | O software apresenta as despesas do usuário semanalmente ou mensalmente, de acordo com as notas fiscais inseridas pelo mesmo. |
| Separação de gastos por tags | Indicam para qual finalidade o usuário dedicou seu dinheiro em maior volume. |

# 5. Recursos do Produto

## 5.1 Acesso

&emsp;&emsp;O usuário poderá ter acesso ao sistema, através de uma autenticação por login.

## 5.2 Cadastro

&emsp;&emsp;O usuário poderá criar um cadastro no próprio site, para ter acesso ao sistema.

## 5.3 Submissão de Informações
&emsp;&emsp;Dentro do sistema, haverá um espaço para submissão de Notas Fiscais, onde serão extraídas as suas informações para serem tratadas.

## 5.4 Visualização de Dados
&emsp;&emsp;O sistema fornecerá uma série de gráficos, onde dará liberdade interpretativa de informações ao usuário.

# 6. Intervalos de Qualidade
&emsp;&emsp;Como o software a ser desenvolvido tem como foco a sua utilização em ambientes mais formais, deve haver uma restrição na identidade visual para manter a formalidade e o profissionalismo, e assim agradar o usuário final.
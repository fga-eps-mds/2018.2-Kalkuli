---
id: deploy    
title: Guia de Deploy
---

***   

## Deploy - Serviços (Local)

* Fazer uma Dockerfile de Produção, trocando o comando de execução para

        CMD	gunicorn -b 0.0.0.0:$PORT manage:app

* Fazer login no Heroku pelo terminal

        heroku login

* Fazer login no Heroku Container Registry 

        heroku container:login

* Buildar o container a partir da imagem de produção

        docker build -t <kalkuli-nome-do-serviço> -f Dockerfile.prod .

* Adicionar uma tag para o container em preparação para o Heroku e enviá-lo para o Registry

        docker tag <kalkuli-nome-do-serviço> registry.heroku.com/<nome-do-app-no-heroku>/web

        docker push registry.heroku.com/<nome-do-app-no-heroku>/web

* Usar o container enviado para o deploy do app no heroku

        heroku container:release web

</br>
## Deploy Contínuo (Travis)

* Fazer uma Dockerfile de Produção, trocando o comando de execução para

        CMD	gunicorn -b 0.0.0.0:$PORT manage:app

* Fazer login no Heroku pelo terminal e obter o token de acesso

        heroku login
        heroku auth:token

* No site do Heroku, ir para as configurações da conta e pegar a API Key.

* No site do Travis, ir para o repositório desejado e acessar suas configurações. Adicionar nas variáveis de ambiente:

        HEROKU_API_KEY - A API Key retirada nas configurações do heroku.

        HEROKU_TOKEN - O token obtido a partir do terminal.

* Criar um shell script com as configurações de Deploy. De forma geral:

        ```
        #!/bin/bash

        set -e
        set -u

        if [ $TRAVIS_PULL_REQUEST != "false" -o $TRAVIS_BRANCH != "master" ]
        then
            echo "Skipping deployment on branch=$TRAVIS_BRANCH, PR=$TRAVIS_PULL_REQUEST"
            exit 0;
        fi

        docker login -u _ -p "$HEROKU_TOKEN" registry.heroku.com

        docker build -t registry.heroku.com/<nome-do-app-no-heroku>/web -f Dockerfile.prod .

        docker push registry.heroku.com/<nome-do-app-no-heroku>/web

        heroku container:release web -a <nome-do-app-no-heroku>
        ```

* No .travis.yml, adicionar o script no passo ``` after_success ```:

        after_success:
            chmod +x ./<nome-do-script>.sh
            ./<nome-do-script>.sh
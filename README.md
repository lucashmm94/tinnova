# Tinnova

Esse projeto é uma API para CRUD de veiculos

## Começando

Para executar o projeto, será necessário instalar os seguintes programas:

- [JDK: Necessário para executar o projeto Java]
- [Maven: Necessário para realizar o build do projeto Java]
- [Eclipse ou STS: Para desenvolvimento do projeto]


## Desenvolvimento

Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:

```shell
cd "diretorio de sua preferencia"
git clone https://github.com/lucashmm94/tinnova
```

### Construção
Para rodar o front end, basta entrar na pasta raiz da aplicação e rodar ou o yarn ou npm para baixar as dependencias do projeto
Para rodar o back end, basta entra no eclipse ou sts, importar o projeto, esperar o build e rodar a aplicação em debug

```shell
mvn clean install
```

O comando irá baixar todas as dependências do projeto e criar um diretório *target* com os artefatos construídos, que incluem o arquivo jar do projeto. 
Além disso, serão executados os testes unitários, e se algum falhar, o Maven exibirá essa informação no console.


## Testes

Para rodar os testes, utilize o comando abaixo:

```
mvn test
```


## Links
Necessário rodar o sistema:
- [API documentada swagger]



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
Para rodar o back end, basta entra no eclipse ou sts, importar o projeto, esperar o build e rodar com spring devtools(plugin do eclipse) a aplicação em debug
Para rodar o banco basta, criar uma instancia mysql e passar esses parametros no application.propeties:<br>

spring.jpa.hibernate.ddl-auto=update<br>
spring.datasource.url=jdbc:mysql://localhost:3306/desafio<br>
spring.datasource.username=root<br>
spring.datasource.password=12345<br>

server.port=8090


```shell
mvn clean install
```

O comando irá baixar todas as dependências do projeto e criar um diretório *target* com os artefatos construídos, que incluem o arquivo jar do projeto. 
Além disso, serão executados os testes unitários, e se algum falhar, o Maven exibirá essa informação no console.



```





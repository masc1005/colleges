# Colleges

## Como executar o projeto:


1. Configura cluster MongoDB atlas
   1. Sendo necessário por o ip da maquina que o projeto vai ser executado.
   2. Não é necessário criar database ou collection, pois será criado automaticamente em um dos passos a frente.
2. clonar o projeto na maquina que for executar.
3. rodar o comando `yarn` || `npm install`
4. após instalar as dependências configuarar o.env, na raiz do projeto em um example com as variáveis necessárias.
5. Com o .env configurado vamos instanciar o banco com o comando `yarn generate` || `npm run generate`
6. Agora temos duas opções rodar em ambiente dev com o comando `yarn dev` || `npm run dev`, ou podemos executar em build que iria para produção, executando o comando `yarn build` || `npm run build`, após o comando executar, utilizamos o comando `yarn start` || `npm start`, para e o projeto estará rodando como ele executaria em ambiente de produção.
7. Agora com o projeto rodando, levando em consideração as intruções de que será executado em uma maquina ubuntu 20.04 lts da amazon, será necessário liberar a porta que foi escolhida no .env no grupo de segurança da maquina virtual, sendo liberada, pode ser acessada através de: https://ipdamaquina:port/
8. Par povoar o banco com as universidades, é necessário acessar a rota `/university` no metodo `POST`


## Rotas

* `/`, rota principal retorna apenas uma mensagem de "olá"
  * método `GET`.
  
* `/university`, Existem funções e diferentes métodos.
  * método `POST`, vai cadastrar todas as universidades vindas da api, no banco de dados;
  * método `GET`, vai listar todas as universidades cadastradas.
 
* `/university/:id`, é necessário passar o id da universidade como parâmetro.
  * método `PUT`, atualiza uma universidade;
  * método `DELETE`, deleta uma universidade.
* `/newUniversity`, Existe uma função para inserir uma unica universidade.
  * método `POST`

#

Me foi solicitado que consumisse a api de universidades: [api](http://universities.hipolabs.com/). selecionando os seguintes paises: [
  "argentina", "brazil", "chile", "colombia","paraguay", "peru", "suriname", "uruguay"
].

Após consumida a api povoa o banco de dados que está sendo utilizado o mongodb.

Para todo esse requisito não funcional ser executado, basta apenas acessar a rota: `/university` no método `POST`, sem a a necessidade de um json body.

Também como solicitado, a api busca todas as universidades salvas no banco de dados. Para todo esse requisito não funcional ser executado, basta apenas acessar a rota: `/university` no método `GET`.

Da mesma forma fazemos com a listagem de apenas uma universidade, acessando a rota: `/university/:id` e passando o parametro ID no método `GET`.

Para inserir uma nova universidade no banco de dados, é necessário, acessar a rota `/newUniversity` no método `POST`, além de passar um json body com os seguintes dados:

{<br>
    "name": "UNIVERSIDADE SALVADOR",<br>
		"twoCode": "BR",<br>
		"state": "Bahia",<br>
		"country": "Brazil",<br>
		"domain": [
			"unifacs.edu.com.br."
		],<br>
		"web": [
			"https://www.unifacs.edu.com.br"
		]<br>
}

Para atualizar os dados, acessamos a rota `/university/:id`, no método `PUT`, para atualizar é necessário, passar um paramentro, que é o ID da universidade, além de um json body com os seguintes dados:

{<br>
	"name": "UNIVERSIDADE DE SALVADOR",<br>
  "domain":["unifacs.edu.com.br."],<br>
  "web": ["https://www.unifacs.edu.com.br"]<br>
}

E para deletar podemos ir direto para a rota `/university/:id`, no método `DELETE`, sendo necessário passar o ID da universidade para deletar a universidade escolhida.


### Algumas explicações:

* Por que eu optei por export o arquivo para um index e do index importar em outros lugares?
  > Eu optei por usa dessa forma pois diminui a quantidade de imports por linha e posso importar em mais de um arquivo através deste index.

* Por que utilizei o Prisma ORM?
  > Venho utilizando o prisma em alguns dos meus projetos pessoais e ele tem me agradado muito na velocidade de resposta, na formas de esccrever as queries, no como se criam as tabelas e collections através dos models no `prisma/schema.prisma`.



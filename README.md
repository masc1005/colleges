# Colleges


Colleges é uma api desenvolvida como forma 
de desafio técnico para a empresa **INTEGRADO**;

Me foi solicitado que consumisse a api de universidades: [api](http://universities.hipolabs.com/). selecionando os seguintes paises: [
  "argentina", "brazil", "chile", "colombia","paraguay", "peru", "suriname", "uruguay"
].

Após consumida a api povoa o banco de dados que está sendo utilizado o mongodb.

Para todo esse requisito não funcional ser executado, basta apenas acessar a rota: `/university` no método `POST`, sem a a necessidade de um json body.

Também como solicitado, a api busca todas as universidades salvas no banco de dados. Para todo esse requisito não funcional ser executado, basta apenas acessar a rota: `/university` no método `GET`.

Da mesma forma fazemos com a listagem de apenas uma universidade, acessando a rota: `/university/:id` e passando o parametro ID no método `GET`.

Para inserir uma nova universidade no banco de dados, é necessário, acessar a rota `/newUniversity` no metodo `POST`, além de passar um json body com os seguintes dados:

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



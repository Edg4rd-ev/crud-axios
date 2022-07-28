### Observações sobre o código

Olá, professor! Infelizmente eu não tive acesso ao seu código da atividade anterior sobre os Títulos, e então criando o meu do zero juntamente com a ajuda de documentações e tutoriais na internet.

## Sobre API Rest

Bom... O único acesso que tive a API do senhor foi ao da table professores e a de títulos, isso porque eu alterava o nome do caminho e funionava, foi assim que descobri kkk. Como não sabia como realizar requisições POST, PATCH e DELETE através da API do senhor, eu acabei criando uma própria, porém, somente com a tabela *professor* onde eu criei os mesmos campos 

{id_professor, id_titulo, tx_nome, tx_sexo, tx_estado_civil, dt_nascimento, tx_telefone}

Então através desta minha API eu criei os metodos GET, POST, PACTH e DELETE.

Esta API Rest que criei eu utilizei o Express.js e o Sequelize, pois o banco usado foi o MySql. O banco é local e para isso utilizei também o XAMPP para poder acessá-lo. 

## Sobre o código

O meu código consegue tranquilamente realizar requisições GET através da API do senhor, porém, as demais requisições eu não sei se irão funcinar. Por isso estou enviando junto a minha API, mas como disse acima, ela usa um banco local e não foi feito o deploy.

Falando mais sobre o código, o modo como envio os dados da api para o state mudam conforme a API que é usada. 

#Ex.: Se utilizar na URL a minha API - const url = "http://localhost:5000/list_teacher";
Na linha 19 do arquivo src/pages/Teacher/teacher_list.js deve estar: setTeacher(response.data.teacher)

Porém se a URL for a API do senhor const url = "https://pcn662vet2.execute-api.us-east-1.amazonaws.com/dev/professor";
Na linha 19 do arquivo teacher_list.js deve estar: setTeacher(response.data.data) 

## Sobre gambiarras

Bom, como não tive como estudar a API do senhor eu fiz umas gabiarras, principalmente no momento de listar os títulos de cada professor. Tenho certeza que na API que o senhor fez, deve ter uma rota que já traga só os nomes dos títulos junto com cada professor. A maneira que eu encontrei de fazer isso foi criando 2 states, um pegando os dados dos titulos e outro com os dados dos professores, e então no momento de exibir os dados na tela eu rodo um foreach no state de titulos e comparando os id de cada tabela para poder trazer o nome certo de cada titulo.

### Por fim...

Obrigado professor por tudo, peço desculpa por apresentar tantos problemas. Caso eu fique na matéria do senhor eu não vou achar ruim, pois acredito que irei absorver bem melhor o assunto e já estarei craque na linguagem, mas sobre o método, eu achei muito bom. Fiz todo este código nas ultimas duas semanas e eu não sabia quase nada de react, infelizmente eu sempre deixo tudo para ultima hora e isso acabou dificultando tudo, mas eu encarei e lendo muita documentação e acessando fóruns eu consegui aprender bastante, inclusive é muito melhor do que acompanhar tutorias do youtube, porque eu crio o meu próprio metodo e ainda tenho acesso/conhecimentos às atualizações da linguagem, os states mesmo tiveram muitas coisas descontinuadas de uma versão para a outra.

Enfim. Obrigado e uma excelete noite!

Atenciosamente,
Edgar Sá Neto.
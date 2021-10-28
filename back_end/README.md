<h1>Instructions></h1> 
<p>acessar pasta do projeto</p>
<p>executar o comando composer update</p>
copy .env.example .env
php artisan key:generate

configurar .env

apagar as linhas
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=instructor_app
DB_USERNAME=root
DB_PASSWORD=

e adicionar
DB_CONNECTION=sqlite

adicionar o arquivo 
database.sqlite
dentro da pasta de databases
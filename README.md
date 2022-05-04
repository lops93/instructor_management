##About the Application:
The application was made with the purpose of the user being able to search for instructors with a certain specialty.

It is also possible to add, remove and edit instructor data.

###programming languages, Frameworks and libraries I used for this project:
Front End: React and Next

Back End: PHP and Laravel

Preview:
![preview](/front_end/public/preview.png)

##instructions:

#####Open the front end folder and run the following commands:
1 - install node
npm install node

2 - install next
npm install next react react-dom

3 - Open package.json and add the following scripts:
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint"
}

4 - run the project
npx next dev

#####Now, open the back end folder and run the following commands:
1 - install node
npm install node

2- install composer
composer install

3- create the.env file, or copy the .env.example file

4 - in the .env file delete the following lines
DB_CONNECTION=mysql
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=root
DB_PASSWORD=

5- and add
DB_CONNECTION=sqlite

6 - generate the key
php artisan key:generate

7 - open the database folder and create the database.sqlite file

8 - run the migration
php artisan migrate

9 - run the project
php artisan serve

# equale-back

1. Create database(recommended: mysql), edit file lib/config/database.ts to configure the database
2. install sequelize https://sequelize.org/master/manual/migrations.html 
3. Go to sequelize-migrations and run the next command for creating database structure
    ```shell
    sequelize db:migrate
    ```
4. Start app:
    ```shell
       npm start
    ```
5. to access the admin: 
    ```shell
        email: 'admin@equale.com',
        password: '123456'
    ```
    
6. Inside admin, create one or more courses
7. create student users: 
    
    fill the fields with whatever you want the only requirements are:
    - photo: image url
    - type: 2(student)
    - course: created in last step


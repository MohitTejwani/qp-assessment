# qp-assessment
Steps to setup 
:npm install
:create .env file and declare varialbe from env.example 
:npm start =: to start server 

API List:
* /user/create to create new user 
* /user/login to login 
* /grocery/create to create new grocery
* /grocery to get list of all grocery
* /grocery/update to update grocery details such as name and price
* /grocery/delete to delete grocery by id 
* /order to order grocery (for order grocery user should login first )

Flow of execution
First create new user then list all grocery to order grocery need to login will return token in responce required this as beerar token to request order grocery


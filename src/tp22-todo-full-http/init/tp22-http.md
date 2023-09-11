# Exo : connect your TODO app to a HTTP api

1. Take the db.json file and add it in your projet folder
1. install json-server : "npm install json-server"
1. In your package.json add next scripts :
   1. "start:api": "json-server --watch db.json --port 4000"
1. launch server with : npm run start:api

Now connect your app todo with the request with your server.
GET /tasks : recuperation des tasks
POST /tasks : ajout d'une task
DELETE /tasks/:id : suppression d'une task
PUT /tasks/:id : modification d'une task

# Node Alchemy Recipe

Web App to do alchemy. Create potion by mixing 3 different ingredients together.
Each ingredient mixed has its quantity decreased by one.

![Alchemy Recipe](assets/app.png)

Each tab is a different alchemist, you don't share the cooking ingredients but you share the inventory quantities.

## Create your first potion
Click the first 3 ingredients: 
 - Vinegar
 - Rat Head
 - Lama Slaver
And mix...

Now, it is your turn to find the other ones!

# How to

## Build
```bash
# From alchemy-recipe/client
# Create the front end files the server will provide (necessary)
# Build in alchemy-recipe/client/build
# Install the react-app dependencies first
npm run build
```

## Serve

### Server
```bash
# Build the client first !!
# default port on 3000
node alchemy-recipe/server.js
# custom port
PORT=3005 node alchemy-recipe/server.js
```

### Client (development only)
```bash
# From alchemy-recipe/client
# Proxy is bind to localhost:3000 (see package.json)
# The API server has to be launched aside (on port 3000)
npm start
```

## Test
```bash
# From alchemy-recipe/
# Do the route and api tests
jasmine 
```

## API
- GET / -> client
- GET /api/potion/:id -> get potion information
- GET /api/ingredients -> get all the ingredients
- POST /api/mix/:id-ing1-:id-ing2>-:id-ing3 -> mix 3 ingredients and return potion id (-1 if failed)

# Dependencies
All the dependencies are in package.json (project) and alchemy-recipe/client/package.json (specific to react-app)

## Server
  - Node
  - Express
  - Jasmine & supertest
## Client
  - React & react-app

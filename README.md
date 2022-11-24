# Hey Lovely Team!

---

### Running it:

- `npm run dev` to start the API with added dev dependency NODEMON.
- `nodemon server/app.js` alternatively if you do have NODEMON installed in your machine globally
- `npm run test` to run JEST/SUPERTEST on Login/Register/Validate routes
- Validate Testing is Currently SKIP mode cuz you will need a valid and invalid token to test
- `test.rest` can be used if you have VS Code Extensition `REST Client`: All Calls are currently working

---

### Structure

- The server is configured to take the following structure:

1. A nested Directory called "client"
2. Directory should sit at same level as the "server" directory
3. It is ready to serve the `index.html` from `build` folder once its ready for deployment
4. This structure will give the ability to do a single repo deployment (which I can get going with Render.io)

### Proxy

- To tap into the routes, I suggest continuing using axios.
- In the Client `package.json`, add a `proxy` property and set it to `http://localhost:3002/`
- That will allow all your API calls to be made like in the following example:

> Example:

```
axios.get("/api/v1/login")
```

### .env

> To run local test feel free to add this to a `.env` IN THE ROOT of the project (same level as server directory)

DB_URI=your_mongodb_uri_without_quotes
TOKEN_SECRET=anySecretStringWithoutQuotes

### Register Route:

- Is currently expecting an Obj with the following properties:

1. email
2. username
3. password

> Check test.rest to see the object being sent if in doubt =)

### Login Route:

- Is currently expecting an Obj with the following properties:

1. username
2. password
   (email may be sent and will be ignored server side)

> Check test.rest to see the object being sent if in doubt =)

### Validate Route

- Is currently expecting a STRING being sent with HEADERS

> Check test.rest to see the string being sent if in doubt =)

### Add Product to Cart

- Is a PUT request with Params
- Expects a username and a Product id

> ex:

http://localhost:3002/api/v1/medic111111/cart/new/637d3d90d02308f12deffcf8

> Check test.rest to see the call being sent if in doubt, and observe the response =)

### Remove Product From Cart

- Is a PUT request with Params
- Expects a username and a Product id
- Will Remove x amount of items with that id

> ex:

http://localhost:3002/api/v1/medic111111/cart/new/637d3d90d02308f12deffcf8

> Check test.rest to see the call being sent if in doubt, and observe the response =)

---

I really hope this helps.

const express =  require("express")
const app = express()
const routes = require("./routes/usersRoutes")
const db = require("./db/connection")
const cors = require("cors")
const bodyparser = require("body-parser")
app.use(cors())
app.use(bodyparser.json())

app.use("/users",routes)
app.use(express.static(__dirname + '/public',));

app.listen(8000, () =>
  console.log('Example app listening on port 3000!'),
);



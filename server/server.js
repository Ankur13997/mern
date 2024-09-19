require('dotenv').config();
var cors = require('cors')
const express = require("express");
const auth_router = require("./router/auth-router");
const cont_router = require('./router/cont-router');
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middlewares');

var corsOptions = {
  origin: 'http://localhost:5173',
  methods: "GET, POST, DELETE, PATCH, HEAD",
  credential: true,
  
};


const app = express();
app.use(cors(corsOptions)); 
const PORT = 3000;

app.use(express.json());
app.use("/api/auth/", auth_router);
app.use("/api/",cont_router);
app.use(errorMiddleware);
connectDb().then(()=>{
    app.listen(PORT, () => {
        console.log("Server listening on PORT", PORT);
      });
      
})

const express =require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet")
const morgan =require("morgan")
const mainRouter = require("./routs/index")

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(helmet());
app.use(helmet.contentSecurityPolicy({policy : "cross-origin"}));
app.use(morgan("common"))


require("./startup/mongodb")()


app.use("/",mainRouter)

const port = process.env.PORT || 9000;

app.listen(port , ()=>console.log(`server running on port ${port}`))
import express, { json } from "express"


const app = express()

app.use(json());

const port = 8001;

const name = "log";

app.listen(port, (res,req) =>{
    console.log(`server is running on port ${port}`)
    console.log(`Name:${name}`);
});

app.get("/hello", (req,res) =>{
    res.send("Hello World");

})

//hello is our endpoint (line 17)   when the user reches the endpoint send this response
//Thinderman and postman test our endpoints to ensure that thet are runing
// Listens for a port (response or request)
//Javascript is a client side language
//JSON is Javascript Object Notation
//`` = back ticks - embed jaascriot code, adding variale into a stsatement
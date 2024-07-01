const app = require("express")();
const db = require("fpdb");

db.init()

app.get("/set", (req,res) => {
if(req.query.name) {
db.set(req.query.name,"",req.query.data)
res.send(JSON.stringify({"success":true}))
} else res.status(400).send(JSON.stringify({"success":false,"err":"Invalid Name"}))
})

app.get("/get",(req,res)=> {
    if(req.query.name){
        db.get(req.query.name,"",(err,data)=>{
            if(err) res.status(500).send(JSON.stringify({"success":false,"err":`${err}`})) 
                else {
                res.send(JSON.stringify({"success":true,"data":`${data}`}))
            }
        })
    } else res.status(400).send(JSON.stringify({"success":false,"err":"Invalid Name"}))
})

app.listen(6969)

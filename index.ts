import express,{Express,Request,Response} from 'express'

const app:Express=express();



app.get('/',(req:Request,res:Response)=>{
    res.send("Welcome to Express-ts")
})


app.listen(3200,()=>{
    console.log("App listening at Port 3200")
})
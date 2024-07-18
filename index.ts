import express,{Request,Response} from 'express';

const app = express();

app.get('/',(req:Request,res:Response)=>{
    res.status(200).json({message:"Alright! After deploy.sh"})
})

app.get('/health',(req,res)=>{
    res.status(200).json({
        running:process.uptime(),
        time:new Date().toLocaleString()
    })
})


app.listen(8000,()=>{
    console.log("server working fine");
})
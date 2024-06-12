const express= require("express");
const app=express();
const port=3500

app.get("/", (req,res)=>{
    res.json({mensage:"Welcome to my server"})
}
)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

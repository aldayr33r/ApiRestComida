const express=require('express')
const router=express.Router()

router.get('/comida',(req,res)=>{
    return res.json({
        mensaje: "Si cargo, Sin comida"
    })
})

module.exports = router


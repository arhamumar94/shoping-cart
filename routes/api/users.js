const User=require('../../db').User
const route= require('express').Router()
route.get('/',(req,res)=>{
    User.findAll()
        .then(users=>{
            res.status(200).send(users)

        })
        .catch((err)=>{
            res.status(508).send({
               error:'could not retrive user'
            })
        })

})
route.post('/',(req,res)=>{
    User.create({
        name: req.body.name
    }).then((users)=>{
        res.status(201).send(users)
    }).catch((err)=>{
        res.status(501).send({
            error:'could not add'
        })
    })

})
exports=module.exports=route
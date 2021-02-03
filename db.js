const Sequelize=require('sequelize')

const db= new Sequelize('shopdb','shopper','shoppass',{
    host:'localhost',
    dialect:'sqlite',
    pool:{
        min:0,
        max:5,
    }
})
const User=db.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true

    },
    name: {
        type:Sequelize.STRING(30),
        allowNull:false

    }
  

})
const Product= db.define('products',{
    id: {

        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price:{
        type: Sequelize.FLOAT,
        type:Sequelize.STRING(30),
        allowNull:false,
        defaultValue:0.0
    }
})
db.sync()
    .then(()=>console.log('data base has been created'))
    .catch((err)=>console.error("error crreated"))
exports=module.exports={
    User,Product
}
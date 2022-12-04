const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) =>{
    const U = sequelize.define(
        'user' ,
        {
            username : {type:DataTypes.STRING, 
            allowNull:false},
            email : {type:DataTypes.STRING }
        } ,
        
    );
    return  U;
}
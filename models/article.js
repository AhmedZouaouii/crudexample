const { sequelize } = require(".");

module.exports = (sequelize,DataTypes) =>{
    const article = sequelize.define(
        'article' ,
        {
            titre : {type:DataTypes.STRING,  allowNull:false},
            categorie : {type:DataTypes.STRING },
            description : {type:DataTypes.STRING },
            premiereParagraphe : {type:DataTypes.STRING },
            deusciemeParagraphe : {type:DataTypes.STRING },
            ecrivain : {type:DataTypes.STRING },
            datePublication : {type:DataTypes.DATE },
            imageArticle : {type:DataTypes.STRING }
        } ,
        
    );
    return article;
}


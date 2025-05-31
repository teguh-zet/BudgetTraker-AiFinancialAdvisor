const { uuid, email } = require("zod/v4");

module.exports =(sequelize,DataTypes)=>{
    const User = sequelize.define("User", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        uuid:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true
        },
        name:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email:{
            type : DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        number:{
            type: DataTypes.STRING(50),
            allowNull: true,
           
        },
        password:{
            type: DataTypes.STRING(225),
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }

    },{
        sequelize,
        tableName : 'users',
        modelName: 'User',
        timestamps: false,
        underscored: true

    });

    User.associate = (models) => {
        User.hasMany(models.Transaction, {
            foreignKey: 'user_id',
            as: 'transaction'
        });
        User.hasMany(models.MonthlySummary, {
            foreignKey: 'user_id',
            as: 'summary_user'
        })
    }


   

    return User;


}
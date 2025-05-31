module.exports =(sequelize, DataTypes) => {
    const Transaction = sequelize.define("Transaction", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type:{
            type: DataTypes.ENUM('income', 'expense'),
            allowNull: false
        },
        amount:{
            type:DataTypes.STRING(20),
            allowNull: false
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        note:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull: false,   
        },
        category_id:{
            type: DataTypes.INTEGER,
            allowNull: false
            
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
    }, {
        
        tableName : 'transactions',
        timestamps: true,
        underscored: true
    });

    Transaction.associate = (models) => {
        Transaction.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
        
        Transaction.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category'
        });
    };

    return Transaction;
}
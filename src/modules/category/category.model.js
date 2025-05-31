
module.exports =(sequelize,DataTypes)=>{
    const Category = sequelize.define("Category", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true
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
        tableName : 'categories',
        timestamps: true
    });

    Category.associate = (models) => {
        Category.hasMany(models.Transaction,{
            foreignKey: 'category_id',
            as: 'transactions'
        })
    }

    return Category;


}
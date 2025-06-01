module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            unique: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        number: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamp: false,
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
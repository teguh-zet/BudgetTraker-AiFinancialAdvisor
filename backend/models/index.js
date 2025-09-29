'use strict';
const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../src/store/sequelize');

const User = sequelize.define('User', {
  id:       { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name:     DataTypes.STRING,
  email:    { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  number:   DataTypes.STRING,
}, { tableName: 'users', timestamps: true, underscored: true });

const Category = sequelize.define('Category', {
  id:   { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  type: DataTypes.ENUM('income','expense'), // kalau memang ada di migrasi categories
}, { tableName: 'categories', timestamps: true, underscored: true });

const Transaction = sequelize.define('Transaction', {
  id:         { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type:       DataTypes.ENUM('income','expense'),
  amount:     DataTypes.STRING,
  date:       DataTypes.DATE,
  note:       DataTypes.STRING,
  userId:     { type: DataTypes.INTEGER, field: 'user_id', allowNull: false },
  categoryId: { type: DataTypes.INTEGER, field: 'category_id', allowNull: false },
}, { tableName: 'transactions', timestamps: true, underscored: true });

const MonthlySummary = sequelize.define('MonthlySummary', {
  id:           { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId:       { type: DataTypes.INTEGER, field: 'user_id', allowNull: false },
  month:        DataTypes.INTEGER,
  year:         DataTypes.INTEGER,
  totalIncome:  { type: DataTypes.DECIMAL(10,2), field: 'total_income' },
  totalExpense: { type: DataTypes.DECIMAL(10,2), field: 'total_expense' },
  balance:      DataTypes.DECIMAL(10,2),
}, { tableName: 'monthly_summaries', timestamps: true, underscored: true });

// Associations (pakai nama kolom FK di DB)
User.hasMany(Transaction,      { foreignKey: 'user_id' });
Transaction.belongsTo(User,    { foreignKey: 'user_id' });

Category.hasMany(Transaction,  { foreignKey: 'category_id' });
Transaction.belongsTo(Category,{ foreignKey: 'category_id' });

User.hasMany(MonthlySummary,   { foreignKey: 'user_id' });
MonthlySummary.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { sequelize, Sequelize, User, Category, Transaction, MonthlySummary };

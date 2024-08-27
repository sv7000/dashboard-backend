const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Section = require('./section')(sequelize, Sequelize.DataTypes);
const DataSource = require('./dataSource')(sequelize, Sequelize.DataTypes);


Section.associate({ DataSource });
DataSource.associate({ Section });
User.belongsToMany(Section, { through: 'UserSections' });

module.exports = { User, Section, DataSource, sequelize };

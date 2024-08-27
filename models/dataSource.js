module.exports = (sequelize, DataTypes) => {
  const DataSource = sequelize.define('DataSource', {
    id: { 
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      primaryKey: true 
    },
    name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    data: { 
      type: DataTypes.JSON, 
      allowNull: false 
    },
    SectionId: { 
      type: DataTypes.INTEGER, 
      references: { model: 'Sections', key: 'id' } 
    },
  });

  DataSource.associate = models => {
    DataSource.belongsTo(models.Section, { as: 'section', foreignKey: 'SectionId' });
  };

  return DataSource;
};

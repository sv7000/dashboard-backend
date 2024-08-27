module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: {
      type: DataTypes.STRING, allowNull:false
    }
  });

  Section.associate = models => {
    Section.hasMany(models.DataSource, { as: 'subSections', foreignKey: 'SectionId' });
  };

  return Section;
};

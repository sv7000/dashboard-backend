
const { Section, DataSource } = require('../models');


exports.createSection = async (req, res) => {
  const { name, description } = req.body;

  try {
    const section = await Section.create({ name, description });
    res.status(201).json({ section });
  } catch (error) {
    console.error('Error creating section:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createSubSection = async (req, res) => {
  const { sectionId } = req.params;
  const { name, data } = req.body;

  try {
    if (!sectionId) return res.status(400).json({ error: 'Section ID is required' });
    if (!name || !data) return res.status(400).json({ error: 'Name and data are required' });

    const section = await Section.findByPk(sectionId);
    if (!section) return res.status(404).json({ error: 'Section not found' });

    const subSection = await DataSource.create({ name, data, SectionId: sectionId });
    res.status(201).json({ subSection });
  } catch (error) {
    console.error('Error creating sub-section:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getSections = async (req, res) => {
  try {
    const sections = await Section.findAll({
      include: [{ model: DataSource, as: 'subSections' }]
    });
    res.json({ sections });
  } catch (error) {
    console.error('Error fetching sections:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.deleteSection = async (req, res) => {
  const { sectionId } = req.params;

  try {
    const section = await Section.findByPk(sectionId);
    if (!section) return res.status(404).json({ error: 'Section not found' });

   
    await DataSource.destroy({ where: { SectionId: sectionId } });

    
    await section.destroy();

    res.status(200).json({ message: 'Section and its subsections deleted successfully' });
  } catch (error) {
    console.error('Error deleting section:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.deleteSubSection = async (req, res) => {
  const { sectionId, subSectionId } = req.params;

  try {
    const section = await Section.findByPk(sectionId);
    if (!section) return res.status(404).json({ error: 'Section not found' });

    const subSection = await DataSource.findByPk(subSectionId);
    console.log(sectionId, subSectionId, subSection.SectionId, subSection)
    if (!subSection || subSection.SectionId != sectionId) {
      return res.status(404).json({ error: 'Sub-section not found or does not belong to this section' });
    }

    await subSection.destroy();
    res.status(200).json({ message: 'Sub-section deleted successfully' });
  } catch (error) {
    console.error('Error deleting sub-section:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

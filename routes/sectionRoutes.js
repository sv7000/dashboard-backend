const express = require('express');
const { createSection, createSubSection, getSections, deleteSection, deleteSubSection } = require('../controllers/sectionController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/sections', authMiddleware, createSection);
router.post('/sections/:sectionId/subsections', authMiddleware, createSubSection);
router.get('/sections', authMiddleware, getSections);
router.delete('/sections/:sectionId', authMiddleware, deleteSection);
router.delete('/sections/:sectionId/subsections/:subSectionId', authMiddleware, deleteSubSection);


module.exports = router;

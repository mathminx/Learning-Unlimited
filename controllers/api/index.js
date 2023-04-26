const router = require('express').Router();
const tutorRoutes = require('./tutorRoutes');
const studentRoutes = require('./studentRoutes');
const subjectRoutes = require('./subjectRoutes');
const userRoutes = require('./userRoutes');

router.use('/Tutor', tutorRoutes );
router.use('/Student', studentRoutes);
router.use('/Subject', subjectRoutes );
router.use('/User', userRoutes);

module.exports = router;x
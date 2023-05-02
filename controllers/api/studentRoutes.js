const router = require('express').Router();
const { Student, Tutor, User } = require('../../model');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const studentData = await Student.findAll({
      include: [{ model: Tutor, User }],
    });
    if (!studentData) {
      res.status(400).json({ message: "Unable to retrieve student data."});
      return;
    }
    res.status(200).json(studentData);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

   router.post('/', withAuth, async (req, res) => {
    try {
      const newStudent = await Student.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newStudent);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.put('/:id', (req, res) => {
    Student.update(req.body,{where:{student_id:req.params.id}}).then(studentdata =>res.json(studentdata)).catch(err =>res.json(err))
  });
  
  router.delete('/:id', (req, res) => {
    Student.destroy({where:{student_id:req.params.id}}).then(studentdata =>res.json(studentdata)).catch(err =>res.json(err))
  });

module.exports = router;
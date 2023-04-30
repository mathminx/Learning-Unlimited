const router = require('express').Router();
const { Subject, Student, Tutor } = require('../../model');

module.exports = router;

router.get('/', async (req, res) => {
  try {
    const subjectData = await Subject.findAll({
      include: [{ model: Student, Tutor }],
    });
    if (!subjectData) {
      res.status(400).json({ message: "Unable to retrieve subject data."});
      return;
    }
    res.status(200).json(subjectData);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  Subject.findOne({where:{subject_id:req.params.id}})
.then(subjectData => res.json(subjectData)).catch(err =>res.json(err))
});

router.put('/:id', (req, res) => {
  Subject.update(req.body, {where:{subject_id:req.params.id}})
.then(subjectData => res.json(subjectData)).catch(err =>res.json(err))
});

router.post('/', async (req, res) => {
  try {
    const newSubject = await Subject.create({
      ...req.body,
    });
    res.status(200).json(newSubject);
  } catch (err) {
    res.status(400).json(err);
  }
});

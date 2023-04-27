const router = require('express').Router();
const { Student } = require('../../model');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
    Student.findAll({include:[User]}).then(studentdata =>res.json(studentdata)).catch(err =>res.json(err))
  });
  
  router.get('/:id', (req, res) => {
    Student.findOne({where:{id:req.params.id},include:[User]}).then(studentdata =>res.json(studentdata)).catch(err =>res.json(err))
  });

// //router.get
// router.get('/', async (req, res) => {
//     res.render('all', {student});
//   });
  
// router.get('/student/:id', async (req, res) => {
//     try {
//       const studentData = await Student.findByPk(req.params.id);
//       res.render('student', studentData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

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
// router.post('/', async (req, res) => {
//     try {
//       const studentData = await Student.create(req.body);
  
//       req.session.save(() => {
//         req.session.user_id = userData.id;
//         req.session.logged_in = true;
  
//         res.status(200).json(userData);
//       });
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });


router.put('/',async (req, res) => {
    try {
      const studentData = await Student.create(req.body);
  
      req.session.save(() => {
        req.session.student_id = studentData.id;
        req.session.logged_in = true;
  
        res.status(200).json(studentData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const studentData = await Student.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!studentData) {
        res.status(404).json({ message: 'No student found with this id!' });
        return;
      }
  
      res.status(200).json(studentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });






module.exports = router;
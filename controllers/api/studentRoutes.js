const router = require('express').Router();
const { Student, Tutor, User } = require('../../model');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const studentData = await Student.findAll({
      include:[Tutor, User] ,
    });
     console.log(studentData);
    if (!studentData) {
      res.status(400).json({ message: "Unable to retrieve student data."});
      return;
    }
    res.status(200).json(studentData);
    // res.render('all', {student});
  }
  catch(err) {
    res.status(500).json(err);
  }
});

// //router.get
// router.get('/', async (req, res) => {
//     res.render('all', {student});
//   });
  
router.get('/:id', async (req, res) => {
    try {
      const studentData = await Student.findByPk(req.params.id, {include: [Tutor, User] });
      console.log(studentData)
      const student = studentData.get({ plain: true });
      res.status(200).json(student);
      res.render('student', studentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //  router.post('/', withAuth, async (req, res) => {
  //   try {
  //     const newStudent = await Student.create({
  //       ...req.body,
  //       user_id: req.session.user_id,
  //     });
  
  //     res.status(200).json(newStudent);
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // });
  
  // router.put('/:id', (req, res) => {
  //   Student.update(req.body,{where:{student_id:req.params.id}}).then(studentdata =>res.json(studentdata)).catch(err =>res.json(err))
  // });
  
  // router.delete('/:id', (req, res) => {
  //   Student.destroy({where:{student_id:req.params.id}}).then(studentdata =>res.json(studentdata)).catch(err =>res.json(err))
  // });

// // //router.get
// // router.get('/', async (req, res) => {
// //     res.render('all', {student});
// //   });
  
// // router.get('/student/:id', async (req, res) => {
// //     try {
// //       const studentData = await Student.findByPk(req.params.id);
// //       res.render('student', studentData);
// //     } catch (err) {
// //       res.status(500).json(err);
// //     }
// //   });

   router.post('/', async (req, res) => {
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
  //   router.post('/', withAuth, async (req, res) => {
  //   try {
  //     const studentData = await Student.create(req.body);
  
  //     req.session.save(() => {
  //       req.session.user_id = studentData.id;
  //       req.session.logged_in = true;
  
  //       res.status(200).json(studentData);
  //     });
  //   } catch (err) {
  //     res.status(400).json(err);
  //   }
  // });


router.put('/',async (req, res) => {
    try {
      const studentData = await Student.update(req.body, {where:{student_id:req.params.id}});
      // req.session.save(() => {
      //   req.session.student_id = studentData.id;
      //   req.session.logged_in = true;
  
      //});
      res.status(200).json(studentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const studentData = await Student.destroy({where:{student_id:req.params.id}})
      // .destroy({
      //   where: {
      //     id: req.params.id,
      //     user_id: req.session.user_id,
      //   },
     // });
  
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
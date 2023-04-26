const router = require('express').Router();
const { Student } = require('../../model');
const withAuth = require('../../utils/auth');
//    router.post('/', withAuth, async (req, res) => {
//     try {
//       const newStudent = await Student.create({
//         ...req.body,
//         user_id: req.session.user_id,
//       });
  
//       res.status(200).json(newStudent);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });
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

//   router.delete('/:id', withAuth, async (req, res) => {
//     try {
//       const studentData = await Project.destroy({
//         where: {
//           id: req.params.id,
//           user_id: req.session.user_id,
//         },
//       });
  
//       if (!studentData) {
//         res.status(404).json({ message: 'No student found with this id!' });
//         return;
//       }
  
//       res.status(200).json(studentData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });






module.exports = router;
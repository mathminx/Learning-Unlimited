const router = require('express').Router();
const { Tutor } = require('../../model');
const withAuth = require('../../utils/auth');

//router.get


//router.get(by id)

//   router.post('/', async (req, res) => {
//     try {
//       const tutorData = await Tutor.create(req.body);
  
//       req.session.save(() => {
//         req.session.tutor_id = tutorData.id;
//         req.session.logged_in = true;
  
//         res.status(200).json(tutorData);
//       });
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

//router.put('/',async (req, res) => {
//     try {
//       const tutorData = await Tutor.create(req.body);
  
//       req.session.save(() => {
//         req.session.tutor_id = tutorData.id;
//         req.session.logged_in = true;
  
//         res.status(200).json(tutorData);
//       });
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });




module.exports = router;
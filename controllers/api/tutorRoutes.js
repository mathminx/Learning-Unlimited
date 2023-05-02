const router = require('express').Router();
const { Tutor, Student, User } = require('../../model');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const tutorData = await Tutor.findAll({include: [Student, User] });
    console.log(tutorData);
    if (!tutorData) {
      res.status(400).json({ message: "Unable to retrieve tutor data."});
      return;
    }
    res.status(200).json(tutorData);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

// router.get('/', (req, res) => {
//     Tutor.findAll({include:[User]}).then(tutordata =>res.json(tutordata)).catch(err =>res.status(500).json(err))
//   });
  
//   router.get('/:id', (req, res) => {
//     Tutor.findOne({where:{id:req.params.id},include:[User]}).then(tutordata =>res.json(tutordata)).catch(err =>res.json(err))
//   });

//router.get
// router.get('/', async (req, res) => {
//     res.render('all', {tutor});
//   });
  

  // router.post('/', (req, res) => {
  //   Tutor.create(req.body).then(tutordata =>res.json(tutordata)).catch(err =>res.json(err))
  // });
  
  // router.put('/:id', (req, res) => {
  //   Tutor.update(req.body,{where:{tutor_id:req.params.id}}).then(tutordata =>res.json(tutordata)).catch(err =>res.json(err))
  // });
  
  // router.delete('/:id', (req, res) => {
  //   Tutor.destroy({where:{tutor_id:req.params.id}}).then(tutordata =>res.json(tutordata)).catch(err =>res.json(err))
  // });
// //router.get
// // router.get('/', async (req, res) => {
// //     res.render('all', {tutor});
// //   });
  

// //   router.get('/tutor/:num', async (req, res) => {
// //     return res.render('tutor', tutors[req.params.num - 1]);
// //   });
  


router.get('/:id', async (req, res) => {
    try {
      const tutorData = await Tutor.findByPk(req.params.id, {include: [Student, User] });
      console.log(tutorData)
      const tutor = tutorData.get({ plain: true });
      res.status(200).json(tutor);
      //res.render('tutor', { tutor });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.post('/', async (req, res) => {
    try {
      const tutorData = await Tutor.create(req.body);
  
      // req.session.save(() => {
      //   req.session.tutor_id = tutorData.id;
      //   req.session.logged_in = true;
  
      // });
        res.status(200).json(tutorData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', async (req, res) => {
    try {
      console.log(req.params.id, req.body)
      const tutorData = await Tutor.update(req.body, {where:{tutor_id:req.params.id}});
  
      // req.session.save(() => {
      //   req.session.tutor_id = tutorData.id;
      //   req.session.logged_in = true;
  
      //  });
      res.status(200).json(tutorData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', withAuth, async (req, res) => {
        try {
          const tutorData = await Tutor.destroy({where:{tutor_id:req.params.id}})
          // Tutor.destroy({
          //   where: {
          //     id: req.params.id,
          //     tutor_id: req.session.tutor_id,
          //   },
          // });
      
          if (!tutorData) {
            res.status(404).json({ message: 'No tutor found with this id!' });
            return;
          }
      
          res.status(200).json(tutorData);
        } catch (err) {
          res.status(500).json(err);
        }
      });
    



module.exports = router;
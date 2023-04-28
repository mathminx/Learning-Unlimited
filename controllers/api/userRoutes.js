const router = require('express').Router();
const { User, Tutor, Student, Subject, Address } = require('../../model');
const withAuth = require('../../utils/auth');


router.get('/',(req, res) => {
    User.findAll({include:[User, Tutor, Student, Subject, Address,]}).then(userdata=>res.json(userdata)).catch(err=>res.json(err))
});

router.get('/:id', (req, res)=>{
    User.findOne({where:{id:req.params.id},include:[User, Tutor, Student, Subject, Address]}).then(Userdata=>res.json(tutordata)).catch(err=>res.json(err))
});

//router.get
// router.get('/', async (req, res) => {
//     res.render('all', {user});
//   });


router.get('/User/:id', async (req, res)=>{
    try{
        const userData = await User.findByPk(req.params.id);
        res.render('User', Userdata);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/', async (req, res) => {
    try {
      const UserData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.User_id = UserData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/',async (req, res) => {
    try {
      const userData = await User.create(req.body);
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', withAuth, async (req, res) => {
        try {
          const userData = await User.destroy({
            where: {
              id: req.params.id,
              user_id: req.session.user_id,
            },
          });
      
          if (!userData) {
            res.status(404).json({ message: 'user ID incorrect.' });
            return;
          }
      
          res.status(200).json(UserData);
        } catch (err) {
          res.status(500).json(err);
        }
      });
    



module.exports =  router;
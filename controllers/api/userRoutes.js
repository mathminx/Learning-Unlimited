const router = require('express').Router();
const { User } = require('../../model');

router.get('/', async (req, res) => {
  // Send the rendered login page back as the response
  res.render('homepage');
});

router.get('/login', async (req, res) => {
  // Send the rendered login page back as the response
  res.render('login');
});

router.post('/', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });const router = require('express').Router();
        const {User} = require("../model");
        
        router.get('/', async (req, res) => {
          // Send the rendered Handlebars.js template back as the response
          res.render('login');
        });
        
        module.exports = router;
        
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', (req, res) => {
  User.update(req.body,{where:{user_id:req.params.id}})
  .then(userData => res.status(200).json(userData))
  .catch (err => res.status(400).json(err));
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
      
          res.status(200).json(userData);
        } catch (err) {
          res.status(500).json(err);
        }
      });
    

router.put('/:id', async (req, res)=> {
  try{
    const UserData =  await User.create(req.body);

    req.session.save(() => {
      req.sessionID.User_id = UserData.id;
      req.session.logged_in = true;
      res.status(200).json(UserData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});     

router.post('/:id', async (req, res)=> {
  try{
    const UserData = await User.create(req.body);


    req.session.save(() => {
      req.session.User_id = userDAta.id;
      req.session.logged_in = true;
      res.status(200).json(UserData);
    });
  } catch (err) {res.status(400).json(err)};
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const UserData = await UserData.destroy({
      id: req.params.id,
      user_id: req.session.user_id,
    });


    if (UserData) {
      res.status(404).json('no user found.');
    }
    res.status(200).json(UserData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});






const router = require('express').Router();
const { Subject, Student, Tutor } = require('../../model');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const subjectData = await Subject.findAll({
      include: [Student, Tutor],
    });
    console.log(subjectData);
    if (!subjectData) {
      res.status(400).json({ message: "Unable to retrieve subject data."});
      return;
    }
    res.status(200).json(subjectData);
    // res.render('all', {subject});
  }
  catch(err) {
    res.status(500).json(err);
  }
});

//router.get('/:id', (req, res) => {
  // Subject.findOne({where:{subject_id:req.params.id}})
  //.then(subjectData => res.json(subjectData)).catch(err =>res.status(500).json(err))
  //});
  
  router.get('/:id', async (req, res) => {
    try {
      const subjectData = await subject.findByPk(req.params.id, {include: [Tutor, Student] });
      console.log(subjectData)
      const subject = subjectData.get({ plain: true });
      res.status(200).json(subject);
      //res.render('subject', subjectData);
    } catch (err) {
      res.status(500).json(err);
    }
  });



  //router.put('/:id', (req, res) => {
    //Subject.update(req.body, {where:{subject_id:req.params.id}})
    //.then(subjectData => res.json(subjectData)).catch(err =>res.json(err))
    //});
    
    //router.post('/:id', (req, res)=>{
      // Subject.create(req.body).then(subjectData =>res.json()).catch(err =>res.json(err))
      //});
      
      //router.put('/:id', (req, res) => {Subject.update(req.body,{where:{subject_id:req.params.id}}).then(subjectData =>res.json(subjectData)).catch(err =>res.json(err))
      //});
      
      //router.delete('/:id', (req, res) => {
        // Subject.destroy({where:{subject_id:req.params.id}}).then(subjectData =>res.json(subjectData)).catch(err =>res.json(err))
        //});
        
        //router.post('/', async (req, res) => {
          //try {
            //const newSubject = await Subject.create({
              //...req.body,
              //});
              //res.status(200).json(newSubject);
              //} catch (err) {
                //res.status(400).json(err);
                //}
                //});
                
                router.put('/', async (req, res)=> {
                  try{
                    const subjectData =  await Subject.update(req.body, {where:{subject_id:req.params.id}});
                    
                    // req.session.save(() => {
                      //   req.sessionID.subject_id = subjectData.id;
                      //   req.session.logged_in = true;
                      res.status(200).json(subjectData);
                      // });
                    } catch (err) {
                      res.status(400).json(err);
                    }
                  });     
                  
                  router.post('/', async (req, res)=> {
                    try{
                      const subjectData = await Subject.create({
                        ...req.body,
                        user_id: req.session.user_id,
                      });

                      // req.session.save(() => {
                        //   req.session.User_id = SubjectData.id;
                        //   req.session.logged_in = true;
                        res.status(200).json(subjectData);
                        // });
                      } catch (err) {
                        res.status(400).json(err);
                      }
                    });
                    
                    router.delete('/:id', async (req, res) => {
                      try {
                        const SubjectData = await Subject.destroy({where:{subject_id:req.params.id}});
                        //   {
                        //   id: req.params.id,
                        //   user_id: req.session.user_id,
                        // });
                        
                        
                        if (SubjectData) {
                          res.status(404).json('no subject ID found.');
                        }
                        res.status(200).json(SubjectData);
                      } catch (err) {
                        res.status(500).json(err);
                      }
                      
                      
                         module.exports = router;
                      
                    });
                    
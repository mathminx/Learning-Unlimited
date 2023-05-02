const router = require('express').Router();
const { Address, User, Tutor, Student} = require('../../model');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const addressData = Subject.findAll({
      include: [{ model: Student, Tutor, User }],
    });
    if (!addressData) {
      res.status(400).json({ message: "Unable to retrieve address data."});
      return;
    }
    res.status(200).json(addressData);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res)=> {
  Address.findOne({where:{id:req.params.id},include:[User]})
.then(addressData=>res.json(addressData)).catch(err=>res.json(err))
});

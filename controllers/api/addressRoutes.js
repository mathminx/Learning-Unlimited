const router = require('express').Router();
const { Address, User, Tutor, Student, Subject} = require('../../model');
const withAuth = require('../../utils/auth');


router.get('/',(req, res) => {
  Address.findAll({include:[User]})
  .then(addressData=>res.json(addressData)).catch(err=>res.json(err))
});

router.get('/:id', (req, res)=> {
  Address.findOne({where:{id:req.params.id},include:[User]})
.then(addressData=>res.json(addressData)).catch(err=>res.json(err))
});

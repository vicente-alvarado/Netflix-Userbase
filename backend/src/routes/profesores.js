const {Router}=require('express');
const router = Router();
const {getProfesores,getProfesor,postProfesor,putProfesor,deleteProfesor} =
require('../controllers/profesoresControl.js');
router.route('/')
.get(getProfesores)
.post(postProfesor);
router.route('/:id')
.get(getProfesor)
.put(putProfesor)
.delete(deleteProfesor);
module.exports = router;

const express = require('express');
const router = express.Router();

const employee = require('../controllers/employee.controller');

//uso como rest api en json
router.get('/', employee.getEmployees);//get para obtener
router.post('/', employee.createEmployee);//para guardar
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.editEmployee);//para actualizar datos
router.delete('/:id', employee.deleteEmployee)

module.exports = router;
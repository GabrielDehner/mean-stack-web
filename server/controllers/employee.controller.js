const Employee = require('../models/employee'); //para consultas a BD
const employeeController = {};

employeeController.getEmployees = async (req, res)=> {
    const  employees  = await Employee.find();
    res.json(employees);
};


employeeController.createEmployee = async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    console.log(employee);
    //console.log(req.body);
    await employee.save();
    res.json({
        'status': 'Empleado guardado'
    });
};

employeeController.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

employeeController.editEmployee = async (req, res) => {
    const { id } = req.params;
    const  employee ={
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({
        status: 'Empleado actualizado'
    });
};

employeeController.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Empleado Eliminado'
    });
};

module.exports =employeeController;
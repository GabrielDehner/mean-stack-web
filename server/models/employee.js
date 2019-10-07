const mongoose = require('mongoose');
//para definir esquemas de datos
const {Schema} = mongoose;

const EmployeeSchema = new Schema({
    name: {type: String, required: true},
    position: {type: String, required: true},
    office:{type: String, required: true},
    salary:{type: Number, required: true}
});

//pasar a modelo de datos mongoose
module.exports = mongoose.model('Employee', EmployeeSchema);
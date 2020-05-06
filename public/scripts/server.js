
const express = require('express');
const app = express();
const Joi = require('joi');
const PORT = process.env.PORT || 3000;
const userdata = require("./customers.json");
const customers = userdata.customers;
app.use(express.static('./signup.html'));


app.get('/customers', (req, res) =>{
    if (!customers){
         return res.status(404).send("Customer were not found")
    }

    res.send(customers)
})

app.get('/customers/:id', (req, res) => {

    const idData = customers.find(function(customers){
        return parseInt(req.params.id) === customers.id
    })
    if (!idData){
        return res.status(404).send("Customer ID was not found");
    }

    res.send(idData)
});

app.post('/customers', (req, res) => {
    //Validate
const {error} = validateCustomer(req.body);

//return error if invalid
if (error){
    res.status(400).send(error.details[0].message);
    return;
}
    
const newCustomer = {
    id: customers.length + 1,
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password
};
customers.push(newCustomer);
res.send(customers);
});

app.put('/customers/:id', (req, res)=>{
//find ID
    const idData = customers.find(function(customers){
        return parseInt(req.params.employeeID) === employees.employeeID
    })
    if (!idData){
        return res.status(404).send("Customer ID was not found");
    }
//Validate
const {error} = validateCustomer(req.body);

//return error if invalid
if (error){
    res.status(400).send(error.details[0].message);
    return;
}
//update ID
idData.fullName = req.body.fullName;
idData.email = req.body.email;
idData.password = req.body.password;

res.send(idData)
});

app.delete('/customers/:id', (req, res) => {
//Look up employee
const idData = customers.find(function(customers){
    return parseInt(req.params.id) === customers.id
})
//return error if not found
if (!idData){
    return res.status(404).send("Customer ID was not found");
}
//delete
const index = customers.indexOf(idData);
customers.splice(index, 1);
res.send(customers);

});


function validateCustomer(customers){
    const schema = {
        fullName: Joi.string().min(3).required(),
        email: Joi.string().min(3).required(),
        password: Joi.number().min(3).required()
    };
    return  Joi.validate(customers, schema);
    
}


app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})

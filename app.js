// Bringing in the express module in my server file in order for me to use.
const express = require('express')
// Creating express app for server
const app = express()
// Creating a variable that will set the port of my server to 4000
const PORT = process.env.PORT || 4000
//Telling express app to use express.static() method in order to stage my client folder
const Joi = require('joi');
const userdata = require("./customers.json");
const customers = userdata.customers;
const bodyParser = require('body-parser')
const userContact= require("./user.json");
const user=userContact.user;

app.use(bodyParser.urlencoded({extended: false}))
//This parses thru the json, uses the same code as bodyparser
app.use(express.json());
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send('Welcome to website')
})
//tutors
const tutors = require('./tutor-profiles.json')
//API that will be getting all of my tutors in my tutor-profiles.json
app.get("/courses", (req, res) => {
    if (!tutors) {
        return res.status(404).send("Resource is not found. Please try again")
    }
        
    res.send(tutors)
})
//API that will be getting tutors from my tutor-profiles.json via there subject
app.get('/courses/:subject', (req, res) => {
    if (!tutors) {
        return res.status(404).send("Resource is not found. Please try again")
    }
    const tutor = tutors.find(tutor => tutor.subject === req.params.subject)
    
    res.send(tutor)
})

app.get('/customers', (req, res) =>{
    if (!customers){
         return res.status(404).send("Customer were not found")
    }

    res.send(customers)
})
app.get('/user', (req, res) =>{
    if (!userContact){
        return res.status(404).send("User comments were not found")
   }

   res.send(userContact)
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

app.get('/user/:id', (req,res)=>{
    const id = user.find(function(user){
        return parseInt(req.params.id) === user.id
    })
    if (!id){
        return res.status(404).send("User ID was not found");
    }

    res.send(id)
})

app.post('/customers', (req, res) => {
    //Validate
// const {error} = validateCustomer(req.body);

//return error if invalid
// if (error){
//     res.status(400).send(error.details[0].message);
//     return;
// }
    
const newCustomer = {
    id: customers.length + 1,
    fullname: req.body.create_full_name,
    email: req.body.create_email,
    password:req.body.create_password
};
customers.push(newCustomer);
res.send(customers);
});

app.post('/user', (req, res) => {
    
const newUser = {
    id: user.length + 1,
    fullname: req.body.name,
    email: req.body.email,
    message:req.body.message
};
user.push(newUser);
res.send(user);
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


// App is running on port 4000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
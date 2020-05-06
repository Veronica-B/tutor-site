// Bringing in the express module in my server file in order for me to use.
const express = require('express')
// Creating express app for server
const app = express()
// Creating a variable that will set the port of my server to 5000
const PORT = process.env.PORT || 3000
//Telling express app to use express.static() method in order to stage my client folder
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send('Welcome to website')
})
//tutors
const tutors = require('/Users/quintonhbrown/Desktop/tutor-site/public/scripts/tutor-profiles.json')
//API that will be getting all of my tutors in my tutor-profiles.json
app.get("/courses", (req, res) => {
    if (!tutors) {
        return res.status(404).send("Resource is not found. Please try again")
    }
        
    res.send(tutors)
})
//API that will be getting technical tutor from my tutor-profiles.json
app.get('/courses/:subject', (req, res) => {
    if (!tutors) {
        return res.status(404).send("Resource is not found. Please try again")
    }
    const tutor = tutors.find(tutor => tutor.subject === req.params.subject)
    
    res.send(tutor)
    
})
//API that will be getting financial-literacy tutor from my tutor-profiles.json
app.get('/courses/financial-literacy', (req, res) => {
    if (!X) {
        return res.status(404).send("Resource is not found. Please try again")
    }
        
    res.send(X)
})
//API that will be getting human-anatomy tutor from my tutor-profiles.json
app.get('/courses/human-anatomy', (req, res) => {
    if (!X) {
        return res.status(404).send("Resource is not found. Please try again")
    }
        
    res.send(X)
})
//API that will be getting nutrition tutor from my tutor-profiles.json
app.get('/courses/nutrition', (req, res) => {
    if (!X) {
        return res.status(404).send("Resource is not found. Please try again")
    }
        
    res.send(X)
})


// App is running on port 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
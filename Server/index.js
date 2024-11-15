const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./Models/EmployeeModels')
const bcrypt = require('bcrypt')

//middleware
const app = express()
app.use(express.json())
app.use(cors())

//connecting to db
mongoose.connect('mongodb://localhost:27017/test')

//defining Routes for Signup
app.post('/register', (req, res) => {
    const {name, email, password} =  req.body;
    bcrypt.hash(password, 10)
    .then(hash=>{
        EmployeeModel.create({name, email, password: hash})
        .then(employe => res.json(employe))
        .catch(err => res.json(err))
    })
    })

//routes for Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find the user by email in the database
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                // Compare the plain password with the hashed password in the database
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        return res.status(500).json({ message: 'Server error during password comparison' });
                    }

                    // If the passwords match, return success, otherwise return an error
                    if (isMatch) {
                        res.status(200).json({ message: 'Login successful', user: user });
                    } else {
                        res.status(400).json({ message: 'Invalid credentials. Incorrect password.' });
                    }
                });
            } else {
                res.status(404).json({ message: 'User not found. Please sign up first.' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'An error occurred while processing your request.', error: err });
        });
});







app.listen(3001, () => console.log("server is running"))
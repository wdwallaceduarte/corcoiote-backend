import express from "express";

const app = express()

app.use(express.json())

app.get('/customers', (request, response) => {
    const customers = [{
        name: 'Wallace Duarte',
        status: true
    }, {
        name: 'Daniele',
        status: true
    }, {
        name: 'Beatriz',
        status: false
    }]

    response.status(200).json(customers)
})

app.listen(3000)

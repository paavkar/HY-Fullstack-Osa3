const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'))

morgan.token('body', function (req, res) {
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms  :body'))

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendieck",
        number: "39-23-6423122"
    }
  ]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})


app.get('/api/persons', (req,res) => {
    res.json(persons)
})


app.get('/api/info', (req,res) => {
    const date = new Date()
    res.send(`<p>Phonebook has info for ${persons.length} people</p>
        <p>${date}</p>`)
})

app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})


app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
})


const generateId = (maksimi) => {
    const maxId = persons.length > 0
        ? Math.floor(Math.random() * Math.floor(maksimi))
        : 0
    return maxId
}


app.post('/api/persons', (req,res) => {
    
    const body = req.body
    
    if (!body.name) {
        return res.status(400).json({
            error : 'name missing'
        })
    }

    else if (persons.find(person => person.name === body.name)) {
        return res.status(400).json({
            error : 'name must be unique'
        })
    }

    else if (!body.number) {
        return res.status(400).json({
            error : 'number missing'
        })
    }

    const person = {
        id: generateId(1000),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)
    //console.log(person)
    res.json(person)
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
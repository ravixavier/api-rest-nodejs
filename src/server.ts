import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

// GET, POST, PUT, PATCH, DELETE

// http://localhost:3333/hello

app.get('/test', async () => {
    const tables = await knex('sqlite_schema').select('*')

    console.log(tables)
    return tables
})

app.listen({port: 3333})
    .then(() => {
        console.log('HTTP Server Running!')
    })
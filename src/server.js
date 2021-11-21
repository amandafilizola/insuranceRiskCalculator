/**
 * @author Amanda Filizola <amandapaivafilizola@gmail.com>
 */

import express from 'express'
import routes from './routes'

const server = express()
const port = process.env.PORT || 3333

server.use(express.json())
server.use(routes)
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
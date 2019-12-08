const app = require('./app')
const morgan = require('morgan')
const rutaIndex = require('./routes/index')
async function main(){
 await app.listen(3000)
 console.log('server on port 300')
}
app.use(morgan('dev'))
app.use(rutaIndex)

main()
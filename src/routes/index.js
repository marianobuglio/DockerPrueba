const {Router} = require('express') 
const router = Router()
router.get('/',(req,res) => {
    res.status(200).send({message:'hola mundo'})
})

module.exports = router
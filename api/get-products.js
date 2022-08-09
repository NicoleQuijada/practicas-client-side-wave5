const router = require('nordic/ragnar').router();
const productsService = require('../services/productsService');
/**
 * Ejercitación 1
 * 
 * Aquí deberás crear el endpoint con el método GET, el cual consuma
 * el servicio que devuelve los productos de la API de MeLi.
 * 
 * Comando para correr el test: `npm run test:unit:watch get-products`
 */

router.get('/', (req,res)=>{
    console.log(req.query)
    const {offset} = req.query;
    const {siteId} = req.platform;

    productsService.getProducts(siteId, 'tablet', 10, offset)
    .then(response => res.json(response))
    .catch(error => console.log(error))
})



module.exports = router;

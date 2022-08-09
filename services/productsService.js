/**
 * Implementar un servicio que tenga un método estático llamado `getProducts`,
 * el cual tiene recibe dos parámetros: siteId y el nombre nombre de un producto.
 * Restclient va a hacer una request a la ruta `/sites/${siteId}/search`.
 * 
 * Comando para correr el test: `npm run test:unit:watch products-service`
 */
const restclient = require('nordic/restclient')({
  timeout: 5000,
  baseURL: 'https://api.mercadolibre.com'
});

class ProductsService { 
  static getProducts(siteId,name,limit,offset){
    return restclient.get(`/sites/${siteId}/search?q=${name}&limit=${limit}&offset=${offset}`)
    .then(response => response.data.results)
    .catch(error => console.log(error))
  }
}

module.exports = ProductsService;

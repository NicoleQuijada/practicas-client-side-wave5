const React = require('react');
const View = require('./view');
const ProductsService = require('../../../services/productsService');

// renderiza el componente de la View y crear el componente de la view

exports.getProducts = function getProducts(req,res,next){
 
  ProductsService.getProducts('MLA','tablet',10)
  .then(response => {
    res.locals.products = response 
    next() 
  })
  
  .catch(error => console.log(error));

}

exports.render = function render(req,res){
    /**
   * creamos componente con el nombre de la pages para pasarle las props a la view
   */

     
     const Products = (props) => <View {...props} />;
     // Metodo Render propio de ragnar que recibe el componente y las props, permite poder renderizar html(jsx)

     res.render(Products, {message:'hola', products: res.locals.products})
}

const React = require('react');
const View = require('./view');
const ProductsService = require('../../../services/productsService');


exports.getProducts = function getProducts (req, res, next){
    const { siteId } = req.platform;
    const { name,limit, offset } = req.query;

    ProductsService.getProducts(siteId, name, limit, offset)
    .then(response => {
        res.locals.ProductsList = response;
        next()
    })
    .catch(error => console.error('error en controller'))
    
}

exports.render = function render(req , res){
    const ProductsList = props => < View {...props} />
    res.render(ProductsList, {products:res.locals.ProductsList})
}


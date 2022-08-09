const React = require('react');
const View = require('./view');
const productsService = require ('../../../services/productsService');


exports.fetchProducts = function fetchProducts(req, res, next){
    productsService.getProducts(req.platform.siteId,'tablet',10,10)
    .then(response => {
        res.locals.products = response;
        next()
    })
    .catch(error => console.log(error))
}


exports.render = function render(req, res){
    const Home = props => (< View {...props} />)
    res.render(Home , {
        products: res.locals.products
    })
}


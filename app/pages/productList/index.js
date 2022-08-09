const router = require('nordic/ragnar').router();
const { render, getProducts } = require('./controller');

router.get('/', getProducts , render);

module.exports = router;

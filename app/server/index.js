/**
 * Module dependencies
 */
const router = require('nordic/ragnar').router();
const config = require('nordic/config');
const { layoutMiddleware } = require('nordic/layout');
const i18nMiddleware = require('nordic/i18n/middleware');
const polyfillsMiddleware = require('nordic/script/polyfills-middleware');
const products = require('../pages/products');
const productsList = require('../pages/productList');
const home = require('../pages/home');

/**
 * Set up mocks
 */
require('../../mocks');

/**
 * Routers
 */


/**
 * Use global middlewares
 */
router.use(layoutMiddleware());
router.use(i18nMiddleware(config.i18n));
router.use(polyfillsMiddleware(config.polyfillLimits));

/**
 * Redirect
 */
router.get('/', (req, res) => res.redirect(`${config.ragnar.basePath}products`));

/**
 * Mount routers
 */
router.use('/products', products);
router.use('/products-list', productsList);
router.use('/home', home);

/**
 * Expose router
 */
module.exports = router;

const router = require('nordic/ragnar').router();
const { render } = require('./controller'); //este es el middleware que nos permite renderizar la vista.


// en el caso que tuvieramos dos middleware debemos renderizar primeros todos los demas y luego de ultimo render

router.get('/', render)


module.exports = router;
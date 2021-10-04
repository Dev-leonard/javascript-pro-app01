const {Router} = require( 'express' );
const router = Router();

//router.get('/', (req, res) => res.send('Hello World'));
router.get('/', (req, res) => res.json({text: 'Hello World'}));

module.exports = router;


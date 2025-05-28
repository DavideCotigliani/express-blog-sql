const express = require('express');
const router = express.Router();
// importo il controller
const blogController = require("../controllers/blogController");

// rotte per i blog
// rotta index
router.get('/', blogController.index)
// rotta per lo show
router.get('/:id', blogController.show)

module.exports = router;
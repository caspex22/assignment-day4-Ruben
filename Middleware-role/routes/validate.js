const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const roleMiddleware = require('../middleware/roleMiddleware');

router.get('/', roleMiddleware(['admin', 'user']), productController.getAllCourse);
router.post('/', roleMiddleware(['admin', 'user']) , productController.createCourse);
router.put('/:id', roleMiddleware(['admin', 'user']) ,  productController.updateCourse);
router.delete('/:id', roleMiddleware(['admin', 'user']) , productController.deleteCourse);



module.exports = router;
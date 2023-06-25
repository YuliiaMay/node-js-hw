const express = require('express');
const ctrl = require("../../controllers/contacts");

const router = express.Router();

const { validateBody } = require("../../middlewares");
const { schemas } = require('../../models');


router.get('/', ctrl.getAll);
router.get('/:contactId', ctrl.getById);
router.post('/', validateBody(schemas.addSchema), ctrl.add);
router.put('/:contactId', validateBody(schemas.addSchema), ctrl.update);
router.delete('/:contactId', ctrl.remove);
router.patch('/:contactId/favorite', validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContact);


module.exports = router;


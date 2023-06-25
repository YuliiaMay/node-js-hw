const express = require('express');
const ctrl = require("../../controllers/contacts");

const router = express.Router();

const { validateBody } = require("../../middlewares");
const { contactSchemas } = require('../../models');


router.get('/', ctrl.getAll);
router.get('/:contactId', ctrl.getById);
router.post('/', validateBody(contactSchemas.addSchema), ctrl.add);
router.put('/:contactId', validateBody(contactSchemas.addSchema), ctrl.update);
router.delete('/:contactId', ctrl.remove);
router.patch('/:contactId/favorite', validateBody(contactSchemas.updateFavoriteSchema), ctrl.updateStatusContact);


module.exports = router;


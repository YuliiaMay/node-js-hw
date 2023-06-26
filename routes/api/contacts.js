const express = require('express');
const ctrl = require("../../controllers/contacts");

const router = express.Router();

const { validateBody, authenticate } = require("../../middlewares");
const { contactSchemas } = require('../../models');


router.get('/', authenticate, ctrl.getAll);
router.get('/:contactId', authenticate, ctrl.getById);
router.post('/', authenticate, validateBody(contactSchemas.addSchema), ctrl.add);
router.put('/:contactId', authenticate,  validateBody(contactSchemas.addSchema), ctrl.update);
router.delete('/:contactId', authenticate,  ctrl.remove);
router.patch('/:contactId/favorite', authenticate, validateBody(contactSchemas.updateFavoriteSchema), ctrl.updateStatusContact);


module.exports = router;


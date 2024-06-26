const express = require('express');
const router = express.Router();
const passport = require('passport');
const procedureController = require('../controllers/procedure.controller');
const roleMiddleware = require('../middleware/auth.middleware');

router.post('/create', passport.authenticate('jwt', { session: false }), roleMiddleware(['Guard']), procedureController.createProcedure);

router.get('/list', passport.authenticate('jwt', { session: false }), roleMiddleware(['Guard', 'Pathologist']), procedureController.getAllProcedures);

router.get('/show/:id', passport.authenticate('jwt', { session: false }), roleMiddleware(['Guard', 'Pathologist']), procedureController.getOneProcedure);

router.put('/edit/:id', passport.authenticate('jwt', { session: false }), roleMiddleware(['Guard']), procedureController.updateProcedure);

module.exports = router;

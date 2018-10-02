const TemporadasController      = require('./controllers/temporadas'),     
    express                     = require('express');

module.exports = function(app){
    const apiRoutes       = express.Router(),
        temporadasRoutes  = express.Router();

    // Case Routes
    apiRoutes.use('/temporadas',temporadasRoutes);
    temporadasRoutes.get('/', TemporadasController.getTemporadas);
   // caseRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['reader','creator','editor','Agricultor','Administrador']), CaseController.createCase);
   // caseRoutes.delete('/:cases_id', requireAuth, AuthenticationController.roleAuthorization(['reader','creator','editor','Agricultor','Administrador']), CaseController.deleteCase);

    // Set up routes
    app.use('/api', apiRoutes);
 
}
module.exports = function(app) {
  const casos = require('../controller/casos.controller.js')

  app.post('/api/casos', app.urlEncondedParser, casos.criar)

  app.put('/api/casos/:idcaso', app.urlEncondedParser, casos.atualizar)

  app.get('/api/casos', app.urlEncondedParser, casos.listar)

  app.get('/api/casos/total/:uf', app.urlEncondedParser, casos.total)

  app.get('/api/casos/totall', app.urlEncondedParser, casos.totall)
  
  app.get('/api/casos/filtrar/:uf', app.urlEncondedParser, casos.filtrar)
}
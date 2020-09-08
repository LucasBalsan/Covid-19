const express = require('express')
const app = express()
const bodyParse = require('body-parser')

const http = require('http')
const db = require('./app/config/db.config.js')

const path = require('path');

app.use(bodyParse.json())

const casoRoute = require('./app/route/cadastro.route.js')
const { response } = require('express')

app.use('/', express.static('client', { redirect: false }));
app.use(express.static(__dirname + './client/index.html'));

app.get('/', function (req, res) {
  path.resolve(__dirname, './client/index.html');
});

db.conexaoSequelize.sync({ force: false }).then(() => {
  console.log('Exclusão e sincronização com force.');
});

this.http = http.createServer(app)

const urlEncondedParser = bodyParse.urlencoded({ extended: true })
app.urlEncondedParser = urlEncondedParser

casoRoute(app)

var server = app.listen(4200, () => {
  var host = server.address().address
  var port = server.address().port

  console.log(`Rodando. Porta: ${port}`)
})
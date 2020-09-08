const db = require('../config/db.config.js')
const { Sequelize } = require('../config/db.config.js')
const sequelize = require('sequelize');
const Casos = db.casos


exports.criar = (req, res) => {
  Casos.create(req.body).then(casos => {
    res.send(casos)
  })
}

exports.atualizar = (req, res) => {
  const id = req.params.idcaso
  Casos.update(
    req.body,
    {
      where: {
        idcaso: id
      }
    }
  ).then(() => {
    res.status(200).send(`Caso ${id} atualizado`)
  })
}

exports.listar = (req, res) => {
  Casos.findAll().then(caso => {
    res.send(caso)
  })
}


exports.total = (req, res) => {
  const uf = req.params.uf
  Casos.findAll({
    group: 'uf',
    attributes:['uf',
    [Sequelize.fn('SUM', Sequelize.col('confirmados')), 'confirmados'],
    [Sequelize.fn('SUM', Sequelize.col('recuperados')), 'recuperados'],
    [Sequelize.fn('SUM', Sequelize.col('mortes')), 'mortes']],
    where:{
      uf: uf
    }
  }).then(caso => {
    res.send(caso)
  })
}

exports.totall = (req, res) => {
  Casos.findAll({
    attributes:[
    [Sequelize.fn('SUM', Sequelize.col('confirmados')), 'confirmados'],
    [Sequelize.fn('SUM', Sequelize.col('recuperados')), 'recuperados'],
    [Sequelize.fn('SUM', Sequelize.col('mortes')), 'mortes']],
  }).then(caso => {
    res.send(caso)
  })
}


exports.filtrar = (req, res) => {
  const uf = req.params.uf
  Casos.findAll(
    {
      where: {
        uf: uf
      }
    }
  ).then(caso => {
    res.send(caso)
  })
}
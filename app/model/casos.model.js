module.exports = (conexaoSequelize, Sequelize) => {
  const Casos = conexaoSequelize.define('casos', {
    idcaso: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    uf: {
      type: Sequelize.STRING(2)
    },
    cidade: {
      type: Sequelize.STRING(50)
    },
    confirmados: {
      type: Sequelize.INTEGER
    },
    recuperados: {
      type: Sequelize.INTEGER
    },
    mortes: {
      type: Sequelize.INTEGER
    }
  })

  return Casos
}
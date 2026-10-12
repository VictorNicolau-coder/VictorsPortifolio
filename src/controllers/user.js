const portfolio = require("../data/portfolio")

const homepage = async (req, res) => {
  try {
    res.render('index', portfolio)
  } catch (e) {
    console.log(`Erro: ${e}`)
  }
}

module.exports = {
  homepage
}

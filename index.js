import data from 'data'

module.exports = (req, res) => {
  console.log(req.query)
  const { name = 'World' } = req.query
  res.send(`Hello ${name}!`)
}
const mongoose = require('mongoose')

const url = "mongodb+srv://arlequin:Qwp6nUp6LoQoPlX9@cluster0.0dlpmcp.mongodb.net/heroes?retryWrites=true&w=majority"


mongoose.connect(url)
  .then((res) => console.log('Conexión a la base de datos exitosa'))

module.exports = mongoose
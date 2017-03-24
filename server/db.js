module.exports = {
  getUsers: getUsers
}

var users = [{
  id: 1,
  name: 'Red widget',
  price: 23.45,
  mfg: 'Acme Inc.',
  inStock: 4
}, {
  id: 2,
  name: 'Blue widget',
  price: 423.47,
  mfg: 'Acme Inc.',
  inStock: 8
}, {
  id: 3,
  name: 'Yellow widget',
  price: 123.40,
  mfg: 'Acme Inc.',
  inStock: 3
}]

function getUsers () {
  console.log('heloo');

  return users
}

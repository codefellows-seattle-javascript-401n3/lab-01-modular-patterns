module.exports = function(name) {
  if (!name) throw ReferenceError('Must provide name!')
  return `Hello ${name}`
}

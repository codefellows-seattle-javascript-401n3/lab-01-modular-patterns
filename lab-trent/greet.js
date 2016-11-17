module.exports = function(name) {
  if (process.argv[2] && !name) {
    name = process.argv[2];
    console.log('hello' + (name ? ' ' + name : ''));
  }
  return 'hello' + (name ? ' ' + name : '');
};

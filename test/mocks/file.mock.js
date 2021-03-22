const transformer = {
  process() {
    return 'module.exports = {};'
  },
  getCacheKey() {
    return 'file'
  },
}

module.exports = transformer

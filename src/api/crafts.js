import Crafts from '@/json/tests/home/popular.json'

export default {
  getCrafts (cb) {
    setTimeout(() => cb(Crafts), 100)
  }
}

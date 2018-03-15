import Crafts from '@/datas/tests/home/popular'

export default {
  getCrafts (cb) {
    setTimeout(() => cb(Crafts), 100)
  }
}

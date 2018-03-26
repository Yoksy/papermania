import popularCrafts from '@/datas/tests/home/popular'
import latestCrafts from '@/datas/tests/home/latest'
import papercraftCrafts from '@/datas/tests/home/papercraft'
import origamisCrafts from '@/datas/tests/home/origamis'
import modelismCrafts from '@/datas/tests/home/modelism'

export default {
  getCrafts(cb) {
    setTimeout(() => cb(popularCrafts), 100)
  },

  async getHomepageCrafts(limit) {
    return new Promise(resolve => setTimeout(() => {
      resolve({
        popular: popularCrafts.slice(0, limit),
        latest: latestCrafts.slice(0, limit),
        papercraft: papercraftCrafts.slice(0, limit),
        origamis: origamisCrafts.slice(0, limit),
        modelism: modelismCrafts.slice(0, limit)
      })
    }, 1))
  }
}

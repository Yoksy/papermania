import popularCrafts from '@/datas/tests/category/popular'
import latestCrafts from '@/datas/tests/category/latest'
import papercraftCrafts from '@/datas/tests/category/papercraft'
import origamiCrafts from '@/datas/tests/category/origami'
import modelismCrafts from '@/datas/tests/category/modelism'

export default {
  getCrafts(cb) {
    setTimeout(() => cb(popularCrafts), 100)
  },

  async getCrafts(limit, category) {
    return new Promise(resolve => setTimeout(() => {
      let response;

      limit = limit || null

      if (category) {
        switch (category) {
          case 'papercraft':
            response = papercraftCrafts
            break;
          case 'origami':
            response = origamiCrafts
            break;
          case 'modelism':
            response = modelismCrafts
            break;
          default:
            response = popularCrafts
            break;

          response = response.slice(0, limit)
        }
      } else {
        response = {
          popular: popularCrafts.slice(0, limit),
          latest: latestCrafts.slice(0, limit),
          papercraft: papercraftCrafts.slice(0, limit),
          origamis: origamiCrafts.slice(0, limit),
          modelism: modelismCrafts.slice(0, limit)
        }
      }

      resolve(response)
    }, 100))
  }
}

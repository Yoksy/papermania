import popularCrafts from '@/datas/tests/category/popular'
import latestCrafts from '@/datas/tests/category/latest'
import papercraftCrafts from '@/datas/tests/category/papercraft'
import origamisCrafts from '@/datas/tests/category/origamis'
import modelismCrafts from '@/datas/tests/category/modelism'

export default {
  getCrafts(cb) {
    setTimeout(() => cb(popularCrafts), 100)
  },

  async getCrafts(limit, category) {
    return new Promise(resolve => setTimeout(() => {
      let response;

      if (category) {
        switch (category) {
          case 'papercraft':
            response = papercraftCrafts.slice(0, limit);
            break;
          case 'origamis':
            response = origamisCrafts.slice(0, limit);
            break;
          case 'modelism':
            response = modelismCrafts.slice(0, limit);
            break;
          default:
            response = popularCrafts.slice(0, limit);
            break;
        }
      } else {
        response = {
          popular: popularCrafts.slice(0, limit),
          latest: latestCrafts.slice(0, limit),
          papercraft: papercraftCrafts.slice(0, limit),
          origamis: origamisCrafts.slice(0, limit),
          modelism: modelismCrafts.slice(0, limit)
        }
      }

      resolve(response)
    }, 100))
  }
}

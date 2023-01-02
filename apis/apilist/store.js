import { getStores, getStoreDetail } from '../mock/store'

export default () => ({
  // 交易所清單
  getStores,
  // getStores: data =>
  //   axios({
  //     url: '/api/Store/GetStores',
  //     method: 'POST',
  //     data
  //   }),
  // 交易所詳細頁
  getStoreDetail
  // getStoreDetail: data =>
  //   axios({
  //     url: '/api/Store/GetStoreDetail',
  //     method: 'POST',
  //     data
  //   })
})

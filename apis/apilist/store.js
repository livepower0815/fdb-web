export default axios => ({
  // 交易所清單
  getStores: data =>
    axios({
      url: '/api/Store/GetStores',
      method: 'POST',
      data
    }),
  // 交易所詳細頁
  getStoreDetail: data =>
    axios({
      url: '/api/Store/GetStoreDetail',
      method: 'POST',
      data
    })
})

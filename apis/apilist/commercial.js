export default axios => ({
  // 廣告位: 廣告位置(首頁 = 1,新聞 = 2,直播 = 3)
  getCommercial: data =>
    axios({
      url: '/api/Commercial/GetCommercial',
      method: 'POST',
      data
    })
})
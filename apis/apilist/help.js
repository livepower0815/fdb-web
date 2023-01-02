import { getHelps, getHelpDetails } from '../mock/help'

export default () => ({
  // 取得幫助中心資訊
  getHelps,
  // getHelps: data =>
  //   axios({
  //     url: '/api/Help/GetHelps',
  //     method: 'POST',
  //     data
  //   }),
  // 取得文章資訊 by 文章 ID
  getHelpDetails
  // getHelpDetails: data =>
  //   axios({
  //     url: '/api/Help/GetHelpDetails',
  //     method: 'POST',
  //     data
  //   })
})

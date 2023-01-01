import { getToken } from '@/utils/auth'

export default ({ store }) => {
  // 拿取 token
  const token = getToken() || ''
  store.commit('user/SET_TOKEN', token)
}
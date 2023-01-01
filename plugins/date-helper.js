import dayjs from 'dayjs'

export default (_, inject) => {
  const formatDate = (date, formatStr = 'YYYY.MM.DD') => {
    return dayjs(date).format(formatStr)
  }
  inject('formatDate', formatDate)
}

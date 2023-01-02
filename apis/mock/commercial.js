import fdbImage from './imgs/fdb-image.png'

export const getCommercial = async () => {
  return [
    {
      title: '',
      titlePosition: 1,
      titleColor: '#FFFFFF',
      url: 'https://partner.bybit.com/b/fundobit',
      img: fdbImage,
      imgAlt: 'bybit-metatrader',
      lang: 'TW',
      store: 'Bybit',
      sort: 1
    },
    {
      title: ' Fundobit Partner',
      titlePosition: 3,
      titleColor: '#FFFFFF',
      url: 'https://fdb-web-front.azurewebsites.net/TW/partner',
      img: fdbImage,
      imgAlt: 'Fundobit-partner',
      lang: 'TW',
      store: 'Fundobit',
      sort: 3
    }
  ]
}
import i18n from '@/plugins/i18n'

// 幣種對應
// BTC = 1 ETH= 2 XPR= 3 EOS = 4 USDT=5
export const currencyMap = {
  '1': 'BTC',
  '2': 'ETH',
  '3': 'XRP',
  '4': 'EOS',
  '5': 'USDT'
}

export const currencyIdMap = {
  BTC: '1',
  ETH: '2',
  XRP: '3',
  EOS: '4',
  USDT: '5'
}

export const phoneAreaCode = [
  { country: i18n.t('Taiwan'), code: '886' },
  { country: i18n.t('China_Mainland'), code: '86' },
  { country: i18n.t('Hongkong'), code: '852' },
  { country: i18n.t('Japan'), code: '81' },
  { country: i18n.t('South_Korea'), code: '82' },
  { country: i18n.t('Philippines'), code: '63' },
  { country: i18n.t('Singapore'), code: '65' },
  { country: i18n.t('Malaysia'), code: '60' },
  { country: i18n.t('America'), code: '1' }
]

export const articleMap = {
  '0': { name: i18n.t('forum'), key: 'forum' },
  '1': { name: i18n.t('announcement'), key: 'bulletin' },
  '2': { name: i18n.t('activity'), key: 'activity' }
}

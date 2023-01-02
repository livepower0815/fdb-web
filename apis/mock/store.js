import bybit from './imgs/bybit.png'
import balance from './imgs/balance.d3c35f0.png'
import one from './imgs/one.f176564.png'
import verified from './imgs/verified.fd31a5b.png'
import intelligence from './imgs/intelligence.f13000c.png'
import lever from './imgs/lever.f3dd697.png'
import money from './imgs/money.ac53272.png'
import coinbase from './imgs/coinbase.png'

// 交易所清單
export const getStores = async () => {
  return [
    {
      id: 1,
      icon: bybit,
      name: 'bybit',
      buildDate: '2018',
      desc: '全球衍生品交易量前三名，目前為超過 1000 萬用戶和機構提供服務',
      registerText: '綁定返佣30%',
      registerUrl: 'https://partner.bybit.com/b/fundobit',
      techUrl: 'https://www.fundobit.com/TW/article/how-to-register-bybit-account',
      featureTitle: '全球交易深度',
      featureScore: 1,
      creditScore: 4,
      interfaceScore: 4.5,
      lang: 'TW'
    },
    {
      id: 2,
      icon: bybit,
      name: 'bybit',
      buildDate: '2018',
      desc: '全球衍生品交易量前三名，目前為超過 1000 萬用戶和機構提供服務',
      registerText: '綁定返佣30%',
      registerUrl: 'https://partner.bybit.com/b/fundobit',
      techUrl: 'https://www.fundobit.com/TW/article/how-to-register-bybit-account',
      featureTitle: '全球交易深度',
      featureScore: 1,
      creditScore: 4,
      interfaceScore: 4.5,
      lang: 'TW'
    },
    {
      id: 3,
      icon: bybit,
      name: 'bybit',
      buildDate: '2018',
      desc: '全球衍生品交易量前三名，目前為超過 1000 萬用戶和機構提供服務',
      registerText: '綁定返佣30%',
      registerUrl: 'https://partner.bybit.com/b/fundobit',
      techUrl: 'https://www.fundobit.com/TW/article/how-to-register-bybit-account',
      featureTitle: '全球交易深度',
      featureScore: 1,
      creditScore: 4,
      interfaceScore: 4.5,
      lang: 'TW'
    },
    {
      id: 4,
      icon: bybit,
      name: 'bybit',
      buildDate: '2018',
      desc: '全球衍生品交易量前三名，目前為超過 1000 萬用戶和機構提供服務',
      registerText: '綁定返佣30%',
      registerUrl: 'https://partner.bybit.com/b/fundobit',
      techUrl: 'https://www.fundobit.com/TW/article/how-to-register-bybit-account',
      featureTitle: '全球交易深度',
      featureScore: 1,
      creditScore: 4,
      interfaceScore: 4.5,
      lang: 'TW'
    },
    {
      id: 5,
      icon: bybit,
      name: 'bybit',
      buildDate: '2018',
      desc: '全球衍生品交易量前三名，目前為超過 1000 萬用戶和機構提供服務',
      registerText: '綁定返佣30%',
      registerUrl: 'https://partner.bybit.com/b/fundobit',
      techUrl: 'https://www.fundobit.com/TW/article/how-to-register-bybit-account',
      featureTitle: '全球交易深度',
      featureScore: 1,
      creditScore: 4,
      interfaceScore: 4.5,
      lang: 'TW'
    }
  ]
}
// 交易所詳細頁
export const getStoreDetail = async () => {
  return {
    rebate: 30,
    friendRebate: 10,
    setDate: '2018',
    advantages: [
      {
        img: balance,
        title: '報價公開透明',
        desc: '標記價格選取 Coinbase、Bitstamp、Kraken（三大受美國證監會監管交易所）的實時成交價'
      },
      {
        img: one,
        title: '市場深度全球第一',
        desc: '根據最新統計數據，Bybit的平均前三個檔位盤口深度已遠超全球市場平均深度水準'
      },
      {
        img: verified,
        title: '頂配的資金安全體系',
        desc: '平台自建業內最領先的分層確定性冷錢包體系'
      },
      {
        img: intelligence,
        title: '智能下單系統支持',
        desc: '入場時直接設置止盈/止損及追踪止損，無需時刻盯盤'
      },
      {
        img: lever,
        title: '彈性槓桿',
        desc: '提供1至100倍槓桿，且為永續合約，可長線投資'
      },
      {
        img: money,
        title: '資金調配靈活',
        desc: '無交易金額下限，即使資金不足也有機會投資'
      }
    ],
    articles: [
      {
        id: '20221026-MARKET-bybit-airdrop-event',
        img: coinbase,
        title: 'BYBIT AIRDROP空投活動來囉',
        description: '空投送代幣活動又來囉!!!!',
        tagCount: null,
        tags: [
          {
            id: 34,
            name: '交易所'
          },
          {
            id: 91,
            name: '空投'
          },
          {
            id: 6,
            name: '加密貨幣'
          },
          {
            id: 93,
            name: 'AIRDROP'
          },
          {
            id: 65,
            name: 'bybit'
          }
        ],
        date: '2022-10-26T17:32:15.223'
      },
      {
        id: '20221013-GUIDE-withdrawl-crypto-asset-to-fiat',
        img: coinbase,
        title: '出金介紹(Bybit為例)',
        description: '步入幣圈必備 如何出金',
        tagCount: null,
        tags: [
          {
            id: 38,
            name: '出金'
          },
          {
            id: 6,
            name: '加密貨幣'
          },
          {
            id: 34,
            name: '交易所'
          },
          {
            id: 65,
            name: 'bybit'
          }
        ],
        date: '2022-10-13T02:00:15.01'
      }
    ],
    marketTrading: [
      {
        name: 'BTC/USDT',
        num: '5396104782'
      },
      {
        name: 'ETH/USDT',
        num: '3118133597'
      },
      {
        name: 'BTC/USD',
        num: '1115130863'
      },
      {
        name: 'LUNA2/USDT',
        num: '593450974'
      },
      {
        name: 'ETH/USD',
        num: '420743761'
      },
      {
        name: 'SOL/USDT',
        num: '239885353'
      },
      {
        name: 'ETC/USDT',
        num: '224065530'
      },
      {
        name: 'ATOM/USDT',
        num: '97384662'
      },
      {
        name: 'MATIC/USDT',
        num: '88786593'
      },
      {
        name: 'REEF/USDT',
        num: '74299677'
      },
      {
        name: 'AVAX/USDT',
        num: '72483454'
      },
      {
        name: 'ADA/USDT',
        num: '69265872'
      },
      {
        name: 'NEAR/USDT',
        num: '62500372'
      },
      {
        name: 'XRP/USD',
        num: '59680146'
      },
      {
        name: 'APE/USDT',
        num: '53642862'
      },
      {
        name: 'CHZ/USDT',
        num: '53570259'
      },
      {
        name: 'RVN/USDT',
        num: '52197289'
      },
      {
        name: 'XRP/USDT',
        num: '51293462'
      },
      {
        name: 'LTC/USDT',
        num: '50608089'
      },
      {
        name: 'OP/USDT',
        num: '42412686'
      },
      {
        name: 'EOS/USDT',
        num: '42112264'
      },
      {
        name: 'LINK/USDT',
        num: '27675719'
      },
      {
        name: 'GMT/USDT',
        num: '22238260'
      },
      {
        name: 'Other',
        num: '515647306.53'
      }
    ],
    currencyTrading: [
      {
        name: 'USDT總和',
        num: '10432111756'
      },
      {
        name: 'USD總和',
        num: '1595554770'
      }
    ],
    id: 1,
    icon: bybit,
    name: 'bybit',
    buildDate: '2018',
    desc: '全球衍生品交易量前三名，目前為超過 1000 萬用戶和機構提供服務',
    registerText: '綁定返佣30%',
    registerUrl: 'https://partner.bybit.com/b/fundobit',
    techUrl: 'https://www.fundobit.com/TW/article/how-to-register-bybit-account',
    featureTitle: '全球交易深度',
    featureScore: 1,
    creditScore: 4,
    interfaceScore: 4.5,
    lang: 'TW'
  }
}

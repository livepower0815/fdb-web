import coinbase from './imgs/coinbase.png'
import streamerImg from './imgs/streamerImg.jpeg'

export const getStreamSetting = async () => {
  return {
    result: 1,
    resultMsg: '',
    data: {
      live: 0,
      ytkey: '',
      streamer: 'Rex',
      streamerImg: streamerImg,
      experience: '超過8年外匯經驗、5年美股台股港股經驗、16年進入幣圈、加密貨幣交易所產品經理',
      direction: '【手續費退回操作說明】操作教學',
      liveListUrl: 'PLEPIn4fi-aWfBGylNUPwgtBX5ol2Id7tl'
    }
  }
}

export const getStreamNews = async () => {
  return [
    {
      id: '20221226-MARKET-French-investors-sued-Binance-for-over-2.4-million-euros-in-losses',
      img: coinbase,
      title: '法國投資者起訴幣安，要求其損失超過 240 萬歐元',
      description:
        '據當地媒體報導，Binance France 及其母公司 Binance Holdings Limited 因涉嫌誤導性商業行為和欺詐性隱瞞而被 15 名法國投資者起訴。',
      tagCount: null,
      tags: [
        {
          id: 81,
          name: '產業相關'
        },
        {
          id: 34,
          name: '交易所'
        },
        {
          id: 136,
          name: '幣安'
        },
        {
          id: 20,
          name: '區塊鏈'
        }
      ],
      date: '2022-12-26T10:56:56.073'
    },
    {
      id: '20221223-MARKET-ex-ftx-chief-sam-bankman-fried-makes-appearance-in-us-court',
      img: coinbase,
      title: 'SBF由父母擔保 2.5 億美元保釋金獲釋',
      description: 'SBF父母付了高額的 2.5 億美元...',
      tagCount: null,
      tags: [
        {
          id: 119,
          name: 'FTX'
        },
        {
          id: 122,
          name: 'SBF'
        },
        {
          id: 107,
          name: '破產'
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
          id: 129,
          name: 'Alameda'
        }
      ],
      date: '2022-12-23T11:40:06.13'
    },
    {
      id: '20221222-MARKET-bankman-fried-in-fbi-custody-ellison-wang-plead-guilty-and-are-cooperating',
      img: coinbase,
      title: 'SBF被FBI拘留，這兩位相關人士已認罪並合作',
      description: '聯邦檢察官Damian Williams在一份錄音聲明中表示...',
      tagCount: null,
      tags: [
        {
          id: 119,
          name: 'FTX'
        },
        {
          id: 122,
          name: 'SBF'
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
          id: 107,
          name: '破產'
        }
      ],
      date: '2022-12-22T16:52:09.743'
    },
    {
      id: '20221221-GUIDE-how-to-register-zoomex-account',
      img: coinbase,
      title: 'Zoomex註冊教學',
      description: '不需KYC交易所, 交易體驗更不受限',
      tagCount: null,
      tags: [
        {
          id: 144,
          name: 'ZOOMEX'
        },
        {
          id: 34,
          name: '交易所'
        },
        {
          id: 143,
          name: '註冊教學'
        }
      ],
      date: '2022-12-21T20:02:22.063'
    },
    {
      id: '20221216-MARKET-binance-cz-media-interview-problem',
      img: coinbase,
      title: ' 幣安執行長 CZ 接受電視採訪卻演變成一場災難',
      description: '在加密貨幣漫天風雪之中，幣安執行長 CZ 接受美國財經媒體 CNBC 連線專訪...',
      tagCount: null,
      tags: [
        {
          id: 114,
          name: 'CZ'
        },
        {
          id: 136,
          name: '幣安'
        },
        {
          id: 34,
          name: '交易所'
        },
        {
          id: 20,
          name: '區塊鏈'
        },
        {
          id: 6,
          name: '加密貨幣'
        },
        {
          id: 138,
          name: 'BNB'
        }
      ],
      date: '2022-12-16T13:02:20.497'
    },
    {
      id: '20221214-MARKET-binance-ceo-could-facing-money-laundering-charges',
      img: coinbase,
      title: '幣安CEO CZ可能面臨洗錢指控',
      description: '幣安及其首席執行官兼創始人趙長鵬（CZ）可能在美國面臨洗錢陰謀和其他違法行為的指控。 這潛在的指控仍然只是一種可能.....',
      tagCount: null,
      tags: [
        {
          id: 136,
          name: '幣安'
        },
        {
          id: 114,
          name: 'CZ'
        },
        {
          id: 137,
          name: '洗錢'
        },
        {
          id: 81,
          name: '產業相關'
        },
        {
          id: 6,
          name: '加密貨幣'
        },
        {
          id: 20,
          name: '區塊鏈'
        },
        {
          id: 34,
          name: '交易所'
        }
      ],
      date: '2022-12-14T10:57:25.057'
    },
    {
      id: '20221212-MARKET-FTX-bankruptcy-issue-retail-investors-think-regulation-is-important',
      img: coinbase,
      title: '加密貨幣交易所FTX申請破產保護 散戶認為監管重要',
      description: '加密貨幣交易所FTX申請破產保護，許多散戶表示加密資產被凍結。',
      tagCount: null,
      tags: [
        {
          id: 34,
          name: '交易所'
        },
        {
          id: 119,
          name: 'FTX'
        },
        {
          id: 107,
          name: '破產'
        },
        {
          id: 109,
          name: '監管'
        }
      ],
      date: '2022-12-12T15:20:03.943'
    },
    {
      id: '20221211-MARKET-sam-bankman-fried-finally-agrees-to-testify-before-house-committee-next-week',
      img: coinbase,
      title: 'SBF 終於同意下週在眾議院委員會作證',
      description: 'FTX 的創始人兼前首席執行官 SBF 終於同意參加即將舉行的美國眾議院委員會的聽證會',
      tagCount: null,
      tags: [
        {
          id: 122,
          name: 'SBF'
        },
        {
          id: 119,
          name: 'FTX'
        },
        {
          id: 34,
          name: '交易所'
        },
        {
          id: 107,
          name: '破產'
        },
        {
          id: 81,
          name: '產業相關'
        }
      ],
      date: '2022-12-11T11:40:21.607'
    },
    {
      id: '20221210-MARKET-maicoin-ceo-share-his-open-letter-talk-about-cryptocurrency-ecosystem',
      img: coinbase,
      title: '全台最大交易所MaiCoin十歲了！創辦人劉世偉一封信，透露加密貨幣未來',
      description: '全台最大交易所MaiCoin成立將滿10年，執行長劉世偉透過一封公開信',
      tagCount: null,
      tags: [
        {
          id: 34,
          name: '交易所'
        },
        {
          id: 6,
          name: '加密貨幣'
        },
        {
          id: 20,
          name: '區塊鏈'
        },
        {
          id: 14,
          name: '未來'
        }
      ],
      date: '2022-12-10T11:45:00.297'
    },
    {
      id: '20221206-MARKET-ftx-founder-sam-bankman-fried-publicly-refuses-to-testify-in-us-house-committee',
      img: coinbase,
      title: 'FTX 創始人 SBF 目前公開拒絕在美國眾議院委員會作證 ',
      description: '崩盤的加密貨幣交易所 FTX 的前首席執行官兼創始人SBF公開表示，他可能不會出現在即將舉行的美國眾議院委員會的聽證會...',
      tagCount: null,
      tags: [
        {
          id: 34,
          name: '交易所'
        },
        {
          id: 107,
          name: '破產'
        },
        {
          id: 6,
          name: '加密貨幣'
        },
        {
          id: 119,
          name: 'FTX'
        },
        {
          id: 122,
          name: 'SBF'
        }
      ],
      date: '2022-12-06T10:20:33.557'
    }
  ]
}

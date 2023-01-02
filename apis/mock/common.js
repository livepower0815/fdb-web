import 火箭Img from './imgs/跑馬燈-火箭-網頁.jpeg'
import 好友推薦Img from './imgs/跑馬燈-好友推薦-網頁.png'
import bitcoinImage from './imgs/bitcoin-xmas-holiday.png'
import btcImage from './imgs/btc.png'
import coinbase from './imgs/coinbase.png'

export const getHomePageInfo = async () => {
  return {
    result: 1,
    resultMsg: '成功',
    data: [
      {
        title: '交易變得更輕鬆',
        titleColor: '#FFFFFF',
        description: '業界第一，手續費返還服務',
        descColor: '#FFFFFF',
        linkText: '免費註冊',
        linkUrl: 'https://www.bybit.com/zh-TW/register?affiliate_id=12787&group_id=2738&group_type=1',
        webImageUrl: 火箭Img,
        mobileImageUrl: 火箭Img,
        lang: 'TW',
        isshow: 1
      },
      {
        title: '邀請好友獎勵',
        titleColor: '#FFFFFF',
        description: '好友返佣的10%將作為您的推薦獎金',
        descColor: '#FFFFFF',
        linkText: '邀請好友',
        linkUrl: 'https://www.fundobit.com/TW/register',
        webImageUrl: 好友推薦Img,
        mobileImageUrl: 好友推薦Img,
        lang: 'TW',
        isshow: 1
      }
    ]
  }
}

export const getMarketPulse = async () => {
  return [
    {
      id: '20221228-MARKET-Crypto-Investment-Firm-Midas-Shutting-Down-Platform-Following-Losses',
      img: bitcoinImage,
      title: '加密貨幣投資公司 Midas 在虧損後關閉平台',
      tags: [
        {
          id: 119,
          name: 'FTX'
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
          id: 142,
          name: '未來展望'
        }
      ]
    },
    {
      id: '20221228-MARKET-Crypto-com-CEO-Reassures',
      img: bitcoinImage,
      title: 'FTX令加密貨幣交易市場失信心　Crypto.com CEO 派定心丸',
      tags: [
        {
          id: 119,
          name: 'FTX'
        },
        {
          id: 107,
          name: '破產'
        },
        {
          id: 81,
          name: '產業相關'
        },
        {
          id: 148,
          name: 'crypto.com'
        },
        {
          id: 142,
          name: '未來展望'
        }
      ]
    },
    {
      id: '20221227-MARKET-the-real-life-dog-behind-memecoin-doge-is-seriously-ill',
      img: bitcoinImage,
      title: '迷因DOGE狗狗幣本尊 柴犬病危',
      tags: [
        {
          id: 89,
          name: '迷因'
        },
        {
          id: 98,
          name: '狗狗幣'
        },
        {
          id: 6,
          name: '加密貨幣'
        }
      ]
    },
    {
      id: '20221226-MARKET-WhiteHat-Hackers-Crack-the-Code-Over-65M-in-Crypto-Bug-Bounties-Since-2020',
      img: bitcoinImage,
      title: '白帽駭客破解代碼：自 2020 年以來的加密漏洞賞金超過 6500 萬美元',
      tags: [
        {
          id: 6,
          name: '加密貨幣'
        },
        {
          id: 147,
          name: '趣聞'
        },
        {
          id: 81,
          name: '產業相關'
        },
        {
          id: 106,
          name: '駭客'
        }
      ]
    },
    {
      id: '20221226-MARKET-French-investors-sued-Binance-for-over-2.4-million-euros-in-losses',
      img: bitcoinImage,
      title: '法國投資者起訴幣安，要求其損失超過 240 萬歐元',
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
      ]
    },
    {
      id: '20221225-MARKET-coinbase-bull-bear-in-2023',
      img: bitcoinImage,
      title: '關於2023 年 Coinbase 的牛熊看法',
      tags: [
        {
          id: 140,
          name: 'COINBASE'
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
          id: 81,
          name: '產業相關'
        },
        {
          id: 139,
          name: '未來發展'
        }
      ]
    },
    {
      id: '20221225-MARKET-10-ideas-to-help-demystify-crypto-myths',
      img: bitcoinImage,
      title: '假期期間幫助親朋好友揭開加密貨幣迷思的 10 個想法',
      tags: [
        {
          id: 6,
          name: '加密貨幣'
        },
        {
          id: 20,
          name: '區塊鏈'
        },
        {
          id: 146,
          name: '迷思'
        },
        {
          id: 16,
          name: '發展'
        },
        {
          id: 21,
          name: '科技'
        }
      ]
    },
    {
      id: '20221225-MARKET-The-State-of-Bitcoin-Development-in-2022-from-NYDIG',
      img: bitcoinImage,
      title: '2022 年比特幣發展狀況：NYDIG紐約數字投資集團 ',
      tags: [
        {
          id: 6,
          name: '加密貨幣'
        },
        {
          id: 23,
          name: '比特幣'
        },
        {
          id: 24,
          name: 'BTC'
        },
        {
          id: 16,
          name: '發展'
        }
      ]
    },
    {
      id: '20221223-MARKET-ex-ftx-chief-sam-bankman-fried-makes-appearance-in-us-court',
      img: bitcoinImage,
      title: 'SBF由父母擔保 2.5 億美元保釋金獲釋',
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
      ]
    },
    {
      id: '20221222-MARKET-bankman-fried-in-fbi-custody-ellison-wang-plead-guilty-and-are-cooperating',
      img: bitcoinImage,
      title: 'SBF被FBI拘留，這兩位相關人士已認罪並合作',
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
      ]
    }
  ]
}

export const getCoinTrend = async () => {
  return {
    result: 1,
    resultMsg: '',
    data: [
      {
        icon: btcImage,
        name: 'BTC',
        price: '16593.43',
        percentrice: '0.42%',
        direction: 1
      },
      {
        icon: btcImage,
        name: 'ETH',
        price: '1197.04',
        percentrice: '0.33%',
        direction: 1
      },
      {
        icon: btcImage,
        name: 'BNB',
        price: '242.817133',
        percentrice: '-0.96%',
        direction: -1
      },
      {
        icon: btcImage,
        name: 'XRP',
        price: '0.3265',
        percentrice: '-3.35%',
        direction: -1
      },
      {
        icon: btcImage,
        name: 'Cardano',
        price: '0.2492',
        percentrice: '1.63%',
        direction: 1
      },
      {
        icon: btcImage,
        name: 'Solana',
        price: '9.94',
        percentrice: '-0.2%',
        direction: -1
      },
      {
        icon: btcImage,
        name: 'Dogecoin',
        price: '0.06959',
        percentrice: '-0.26%',
        direction: -1
      },
      {
        icon: btcImage,
        name: 'Shiba Inu',
        price: '0.00000808',
        percentrice: '0.25%',
        direction: 1
      },
      {
        icon: btcImage,
        name: 'BitDAO',
        price: '0.3437',
        percentrice: '0.26%',
        direction: 1
      },
      {
        icon: btcImage,
        name: 'Polygon',
        price: '0.7532',
        percentrice: '0.21%',
        direction: 1
      }
    ]
  }
}

export const getHomeRecommendNews = async () => {
  return [
    {
      id: '20221228-MARKET-Crypto-Investment-Firm-Midas-Shutting-Down-Platform-Following-Losses',
      img: coinbase,
      title: '加密貨幣投資公司 Midas 在虧損後關閉平台',
      description: null,
      tagCount: null,
      tags: [
        {
          id: 119,
          name: 'FTX'
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
          id: 142,
          name: '未來展望'
        }
      ],
      date: '2022-12-28T12:45:51.877'
    },
    {
      id: '20221228-MARKET-Crypto-com-CEO-Reassures',
      img: coinbase,
      title: 'FTX令加密貨幣交易市場失信心　Crypto.com CEO 派定心丸',
      description: null,
      tagCount: null,
      tags: [
        {
          id: 119,
          name: 'FTX'
        },
        {
          id: 107,
          name: '破產'
        },
        {
          id: 81,
          name: '產業相關'
        },
        {
          id: 148,
          name: 'crypto.com'
        },
        {
          id: 142,
          name: '未來展望'
        }
      ],
      date: '2022-12-28T12:36:46.26'
    },
    {
      id: '20221227-MARKET-the-real-life-dog-behind-memecoin-doge-is-seriously-ill',
      img: coinbase,
      title: '迷因DOGE狗狗幣本尊 柴犬病危',
      description: null,
      tagCount: null,
      tags: [
        {
          id: 89,
          name: '迷因'
        },
        {
          id: 98,
          name: '狗狗幣'
        },
        {
          id: 6,
          name: '加密貨幣'
        }
      ],
      date: '2022-12-27T15:02:22.34'
    },
    {
      id: '20221226-MARKET-WhiteHat-Hackers-Crack-the-Code-Over-65M-in-Crypto-Bug-Bounties-Since-2020',
      img: coinbase,
      title: '白帽駭客破解代碼：自 2020 年以來的加密漏洞賞金超過 6500 萬美元',
      description: null,
      tagCount: null,
      tags: [
        {
          id: 6,
          name: '加密貨幣'
        },
        {
          id: 147,
          name: '趣聞'
        },
        {
          id: 81,
          name: '產業相關'
        },
        {
          id: 106,
          name: '駭客'
        }
      ],
      date: '2022-12-26T11:18:33.383'
    },
    {
      id: '20221226-MARKET-French-investors-sued-Binance-for-over-2.4-million-euros-in-losses',
      img: coinbase,
      title: '法國投資者起訴幣安，要求其損失超過 240 萬歐元',
      description: null,
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
      date: '2022-12-26T10:55:22.697'
    },
    {
      id: '20221225-MARKET-coinbase-bull-bear-in-2023',
      img: coinbase,
      title: '關於2023 年 Coinbase 的牛熊看法',
      description: null,
      tagCount: null,
      tags: [
        {
          id: 140,
          name: 'COINBASE'
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
          id: 81,
          name: '產業相關'
        },
        {
          id: 139,
          name: '未來發展'
        }
      ],
      date: '2022-12-25T02:04:23.73'
    },
    {
      id: '20221225-MARKET-10-ideas-to-help-demystify-crypto-myths',
      img: coinbase,
      title: '假期期間幫助親朋好友揭開加密貨幣迷思的 10 個想法',
      description: null,
      tagCount: null,
      tags: [
        {
          id: 6,
          name: '加密貨幣'
        },
        {
          id: 20,
          name: '區塊鏈'
        },
        {
          id: 146,
          name: '迷思'
        },
        {
          id: 16,
          name: '發展'
        },
        {
          id: 21,
          name: '科技'
        }
      ],
      date: '2022-12-25T01:33:08.737'
    },
    {
      id: '20221225-MARKET-The-State-of-Bitcoin-Development-in-2022-from-NYDIG',
      img: coinbase,
      title: '2022 年比特幣發展狀況：NYDIG紐約數字投資集團 ',
      description: null,
      tagCount: null,
      tags: [
        {
          id: 6,
          name: '加密貨幣'
        },
        {
          id: 23,
          name: '比特幣'
        },
        {
          id: 24,
          name: 'BTC'
        },
        {
          id: 16,
          name: '發展'
        }
      ],
      date: '2022-12-25T01:16:16.95'
    },
    {
      id: '20221223-MARKET-ex-ftx-chief-sam-bankman-fried-makes-appearance-in-us-court',
      img: coinbase,
      title: 'SBF由父母擔保 2.5 億美元保釋金獲釋',
      description: null,
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
      date: '2022-12-23T11:38:01.457'
    },
    {
      id: '20221222-MARKET-bankman-fried-in-fbi-custody-ellison-wang-plead-guilty-and-are-cooperating',
      img: coinbase,
      title: 'SBF被FBI拘留，這兩位相關人士已認罪並合作',
      description: null,
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
      date: '2022-12-22T16:46:28.323'
    }
  ]
}

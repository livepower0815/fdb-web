import ethereum from './imgs/ethereum-3818347_1920.jpeg'
import blockChain from './imgs/blockChain.png'

export const getNews = async () => {
  return {
    result: 1,
    resultMsg: '',
    data: {
      pageTotal: 3,
      pageSize: 12,
      pageIndex: 1,
      totalCount: 32,
      data: [
        {
          id: '20221015-HOT-risk-control-crypto-contract-trading',
          img: blockChain,
          title: '風險控管',
          description: '沒有交易策略的交易就是賭博 風險控管是交易中最重要的一環',
          tagCount: null,
          tags: [
            {
              id: 29,
              name: '交易'
            },
            {
              id: 78,
              name: '風險控管'
            },
            {
              id: 6,
              name: '加密貨幣'
            },
            {
              id: 30,
              name: '合約'
            },
            {
              id: 28,
              name: '現貨'
            },
            {
              id: 33,
              name: '教學'
            }
          ],
          date: '2022-10-15T21:35:58.937'
        },
        {
          id: '20221015-HOT-technical-analysis-support-resistance',
          img: blockChain,
          title: '支撐壓力',
          description: '技術分析中支撐位與壓力位置判別方式',
          tagCount: null,
          tags: [
            {
              id: 31,
              name: '技術分析'
            },
            {
              id: 77,
              name: '支撐壓力'
            },
            {
              id: 6,
              name: '加密貨幣'
            },
            {
              id: 29,
              name: '交易'
            },
            {
              id: 33,
              name: '教學'
            }
          ],
          date: '2022-10-15T21:26:40.493'
        },
        {
          id: '20221015-HOT-technical-analysis-ICH-ichimoku-indactors-Goichi-Hosoda',
          img: blockChain,
          title: '一目均衡表/雲圖',
          description: '一目均衡表又稱雲圖指標ICH(Ichimoku)',
          tagCount: null,
          tags: [
            {
              id: 31,
              name: '技術分析'
            },
            {
              id: 76,
              name: '雲圖'
            },
            {
              id: 6,
              name: '加密貨幣'
            },
            {
              id: 33,
              name: '教學'
            },
            {
              id: 29,
              name: '交易'
            }
          ],
          date: '2022-10-15T20:55:22.457'
        },
        {
          id: '20221015-HOT-technical-analysis-uptrend-downtrend',
          img: blockChain,
          title: '上下通道  ',
          description: '技術分析中判別壓力支撐指標之一',
          tagCount: null,
          tags: [
            {
              id: 31,
              name: '技術分析'
            },
            {
              id: 75,
              name: '上下通道'
            },
            {
              id: 6,
              name: '加密貨幣'
            },
            {
              id: 29,
              name: '交易'
            },
            {
              id: 33,
              name: '教學'
            }
          ],
          date: '2022-10-15T20:50:17.767'
        },
        {
          id: '20221015-HOT-technical-analysis-OBV-VOL',
          img: blockChain,
          title: 'VOL',
          description: '成交量是投資人常用的技術指標不管任何市場',
          tagCount: null,
          tags: [
            {
              id: 31,
              name: '技術分析'
            },
            {
              id: 74,
              name: 'VOL'
            },
            {
              id: 6,
              name: '加密貨幣'
            },
            {
              id: 33,
              name: '教學'
            },
            {
              id: 29,
              name: '交易'
            }
          ],
          date: '2022-10-15T20:46:21.16'
        },
        {
          id: '20221015-HOT-technical-analysis-SAR-Stop-And-Reverse-intro',
          img: blockChain,
          title: 'SAR',
          description: 'SAR又稱拋物線指標（Stop And Reverse）是用來判斷趨勢停止與反轉的指標，',
          tagCount: null,
          tags: [
            {
              id: 31,
              name: '技術分析'
            },
            {
              id: 72,
              name: 'SAR'
            },
            {
              id: 29,
              name: '交易'
            },
            {
              id: 6,
              name: '加密貨幣'
            },
            {
              id: 33,
              name: '教學'
            }
          ],
          date: '2022-10-15T20:32:36.433'
        },
        {
          id: '20221015-HOT-technical-analysis-Fibonacci-intro',
          img: blockChain,
          title: 'Fibo斐波納契回調線',
          description: '斐波納契回調線(Fibonacci retracement)在技術分析上常被投資人拿來應用',
          tagCount: null,
          tags: [
            {
              id: 31,
              name: '技術分析'
            },
            {
              id: 71,
              name: '斐波那契'
            },
            {
              id: 29,
              name: '交易'
            },
            {
              id: 6,
              name: '加密貨幣'
            },
            {
              id: 33,
              name: '教學'
            }
          ],
          date: '2022-10-15T20:24:33.057'
        },
        {
          id: '20221015-HOT-technical-analysis-RSI-introduction',
          img: blockChain,
          title: 'RSI',
          description: 'RSI相對強弱指標簡單介紹',
          tagCount: null,
          tags: [
            {
              id: 31,
              name: '技術分析'
            },
            {
              id: 70,
              name: 'RSI'
            },
            {
              id: 6,
              name: '加密貨幣'
            },
            {
              id: 29,
              name: '交易'
            },
            {
              id: 33,
              name: '教學'
            }
          ],
          date: '2022-10-15T20:11:03.043'
        },
        {
          id: '20221015-HOT-technical-analysis-Moving-Average-Convergence-Divergence ',
          img: blockChain,
          title: 'MACD',
          description: 'MADC 全名平滑異同移動平均線 是一種投資常用的技術指標',
          tagCount: null,
          tags: [
            {
              id: 31,
              name: '技術分析'
            },
            {
              id: 69,
              name: 'MACD'
            },
            {
              id: 6,
              name: '加密貨幣'
            },
            {
              id: 29,
              name: '交易'
            },
            {
              id: 33,
              name: '教學'
            }
          ],
          date: '2022-10-15T20:04:51.6'
        },
        {
          id: '20221015-HOT-technical-analysis-kd-Stochastic-Osciallator-intro',
          img: blockChain,
          title: 'KD值',
          description: 'KD值算是常使用的技術指標之一 又稱隨機指標(Stochastic Osciallator)',
          tagCount: null,
          tags: [
            {
              id: 31,
              name: '技術分析'
            },
            {
              id: 68,
              name: 'KD值'
            },
            {
              id: 6,
              name: '加密貨幣'
            },
            {
              id: 29,
              name: '交易'
            },
            {
              id: 33,
              name: '教學'
            }
          ],
          date: '2022-10-15T19:57:10.293'
        },
        {
          id: '20221015-HOT-technical-analysis-ma-moving-average-intro',
          img: blockChain,
          title: 'MA均線',
          description: '在技術分析裡面許多人會觀察MA來輔助判斷趨勢的多空',
          tagCount: null,
          tags: [
            {
              id: 31,
              name: '技術分析'
            },
            {
              id: 67,
              name: '均線'
            },
            {
              id: 6,
              name: '加密貨幣'
            },
            {
              id: 29,
              name: '交易'
            },
            {
              id: 33,
              name: '教學'
            }
          ],
          date: '2022-10-15T19:43:35.617'
        },
        {
          id: '20221014-HOT-technical-analysis-Kchart-candlesticks',
          img: blockChain,
          title: 'K棒',
          description: '認識K棒—技術分析基礎',
          tagCount: null,
          tags: [
            {
              id: 31,
              name: '技術分析'
            },
            {
              id: 29,
              name: '交易'
            },
            {
              id: 6,
              name: '加密貨幣'
            },
            {
              id: 33,
              name: '教學'
            }
          ],
          date: '2022-10-14T11:10:14.75'
        }
      ]
    }
  }
}

export const getTopNews = async () => {
  return {
    result: 1,
    resultMsg: '',
    data: [
      {
        id: 'knowing-what-blockchain-is',
        img: ethereum,
        title: '區塊鏈是什麼?',
        description: null,
        tagCount: null,
        tags: [
          {
            id: 20,
            name: '區塊鏈'
          },
          {
            id: 22,
            name: '去中心化'
          },
          {
            id: 90,
            name: 'Bitcoin'
          }
        ],
        date: '2022-10-12T00:14:50.197'
      },
      {
        id: '2022-10-12-HOT-know-eth-1and2',
        img: ethereum,
        title: '以太1.0 v.s 以太2.0',
        description: null,
        tagCount: null,
        tags: [
          {
            id: 27,
            name: '以太坊'
          },
          {
            id: 22,
            name: '去中心化'
          },
          {
            id: 20,
            name: '區塊鏈'
          },
          {
            id: 19,
            name: '升級'
          },
          {
            id: 15,
            name: '價值'
          }
        ],
        date: '2022-10-12T16:46:34.113'
      },
      {
        id: '2022-10-11-HOT-knowing-what-bitcoin-is',
        img: ethereum,
        title: '什麼是比特幣',
        description: null,
        tagCount: null,
        tags: [
          {
            id: 23,
            name: '比特幣'
          },
          {
            id: 6,
            name: '加密貨幣'
          },
          {
            id: 24,
            name: 'BTC'
          },
          {
            id: 25,
            name: '中本聰'
          },
          {
            id: 22,
            name: '去中心化'
          },
          {
            id: 26,
            name: '數位黃金'
          }
        ],
        date: '2022-10-12T00:29:25.013'
      }
    ]
  }
}

export const getLastNews = async () => {
  return {
    result: 1,
    resultMsg: '',
    data: [
      {
        id: '20221015-HOT-risk-control-crypto-contract-trading',
        img: ethereum,
        title: '風險控管',
        description: '沒有交易策略的交易就是賭博 風險控管是交易中最重要的一環',
        tagCount: null,
        tags: [
          {
            id: 29,
            name: '交易'
          },
          {
            id: 78,
            name: '風險控管'
          },
          {
            id: 6,
            name: '加密貨幣'
          },
          {
            id: 30,
            name: '合約'
          },
          {
            id: 28,
            name: '現貨'
          },
          {
            id: 33,
            name: '教學'
          }
        ],
        date: '2022-10-15T21:35:58.937'
      },
      {
        id: '20221015-HOT-technical-analysis-support-resistance',
        img: ethereum,
        title: '支撐壓力',
        description: '技術分析中支撐位與壓力位置判別方式',
        tagCount: null,
        tags: [
          {
            id: 31,
            name: '技術分析'
          },
          {
            id: 77,
            name: '支撐壓力'
          },
          {
            id: 6,
            name: '加密貨幣'
          },
          {
            id: 29,
            name: '交易'
          },
          {
            id: 33,
            name: '教學'
          }
        ],
        date: '2022-10-15T21:26:40.493'
      },
      {
        id: '20221015-HOT-technical-analysis-ICH-ichimoku-indactors-Goichi-Hosoda',
        img: ethereum,
        title: '一目均衡表/雲圖',
        description: '一目均衡表又稱雲圖指標ICH(Ichimoku)',
        tagCount: null,
        tags: [
          {
            id: 31,
            name: '技術分析'
          },
          {
            id: 76,
            name: '雲圖'
          },
          {
            id: 6,
            name: '加密貨幣'
          },
          {
            id: 33,
            name: '教學'
          },
          {
            id: 29,
            name: '交易'
          }
        ],
        date: '2022-10-15T20:55:22.457'
      }
    ]
  }
}

export const getHashTagID = async () => {
  return {
    result: 1,
    resultMsg: '',
    data: 6
  }
}

export const getNewsDetail = async () => {
  return {
    result: 1,
    resultMsg: '',
    data: {
      id: '2022-10-12-HOT-know-eth-1and2',
      category: 0,
      auther: 'FDB Aki',
      desc: '認識最大山寨幣以太坊ETH',
      title: '以太1.0 v.s 以太2.0',
      img: ethereum,
      content:
        '<p><span style="font-size: 22px;"><strong>以太1.0 v.s. 以太2.0</strong></span></p><p><span style="font-size: 14px;">加密世界中除了比特幣以外，常被聯想與提及到的無非以太坊，以太坊Ethereum是目前應用最廣的區塊鏈，Ether以太幣是目前市值第二大的虛擬貨幣</span><span style="font-size: 12px;">。</span></p><p><br></p><p><span style="font-size: 19px;"><strong>以太1.0</strong></span></p><p><span style="font-size: 14px;">2013-2014年俄裔加拿大程式編寫員Vitalik Buterin (人稱V神) 受到比特幣啟發提出以太坊，以太坊意思為「下一代加密貨幣與去中心化應用平台」, 其目標是打造一個「去中心化的世界電腦」。</span></p><p><span style="font-size: 14px;">2014透過ICO眾籌後於2015年7月上線，以太坊是一個不須經過第三方監管的去中心化公鏈平台，鏈上資訊分散在世界各地的節點，使用及在平台創建的使用者需支付以太幣作為供給以太坊運作的動能，為運行使用支付給礦工編程維護的乙太幣稱為Gas fee。</span></p><p><span style="font-size: 14px;">以太坊就像中心化的Android系統, 開發者創建了Line, Telegram等App在Android(以太坊)上運行, Line的開發者必須支付Android運營費(以太幣)。</span></p><p><span style="font-size: 14px;">以太坊的智能合約(Smart contract)，是一套寫入觸發什麼條件就會自動執行什麼行為的代碼， 也可以讓更多開發撰寫新的智能合約，常聽見的Dapp、NFT、Defi、發行Token等都是一連串的智能合約，其發行和走鏈都需要Gas Fee。</span></p><p><span style="font-size: 14px;">以太坊1.0的礦工獎勵模式與比特幣和現有的挖礦一樣是採PoW(Proof of Work)工作量證明機制，意思是礦工們互相競爭，運用電腦CPU、強力顯卡、設備在同一時間解同一複雜的題目，哪個礦工先解出來，挖礦的獎勵(幣)就歸給誰，意思是除了獲得獎勵的礦工其他礦工都在做白工，與此同時也製造了龐大能源消耗。</span></p><p><br></p><p><span style="font-size: 14px;"><em>以太坊2.0 就如同Android, iOS的系統更新, 使其規模擴展容納更多交易量與減少成本費用等全方面的升級，以太2.0並非一個全新的系統，是新技術的融合與優化現有應用，升級行為稱作The Merge</em></span><span style="font-size: 14px;">。</span></p><p><br></p><p><br></p><p><span style="font-size: 19px;"><strong>以太2.0</strong></span></p><p><span style="font-size: 14px;">以太2.0兼容了1.0的功能，以太幣、智能合約等通通都一樣，不一樣的地方在於</span></p><p><span style="font-size: 14px;">1. 信標鏈(Beacon Chain)—為以太2.0核心</span></p><p><span style="font-size: 14px;">2. 獎勵機制由PoW升級成PoS(Proof of Stake)</span></p><p><span style="font-size: 14px;">3. 分片鏈(Shard Chain) 解決處理交易數量(擴展性)的問題</span></p><p><span style="font-size: 14px;"><em> </em></span></p><p><br></p><p><span style="font-size: 14px;">以太2.0升級計畫分為三階段，</span></p><p><span style="font-size: 14px;">1.信標鏈 (信標鏈已存在) </span></p><p><span style="font-size: 14px;">2.合併 (當前2022，將PoW過渡到PoS) </span></p><p><span style="font-size: 14px;">3.分片鏈 (預計2023-2024)</span></p><p><br></p><p><img src="https://fdb-webadmin.azurewebsites.net/Upload/7df894ed0caf416bba8bcf58a6bc378a/Untitled.png" alt="Untitled" data-href="https://fdb-webadmin.azurewebsites.net/Upload/7df894ed0caf416bba8bcf58a6bc378a/Untitled.png" style="width: 690.17px;height: 322.69px;"/></p><p><span style="font-size: 12px;"><em>(圖片來源:以太坊官網https://ethereum.org/en/upgrades/merge/)</em></span></p><p><em> </em></p><p style="text-align: justify;"><span style="font-size: 14px;">信標鏈(Beacon Chain)則是一種全新的PoS區塊鏈，一種全新的共識機制，但不會改變以太坊任何東西，信標鏈也是將舊版PoW機制過渡到PoS的關鍵。</span></p><p><span style="font-size: 14px;">上面1.0介紹的PoW機制其耗能之龐大，對環境造成的迫害一直都是加密貨幣爭議點之一，以太2.0的PoS機制則是解決了這問題。</span></p><p><span style="font-size: 14px;">PoS(Proof of Stake)權益證明，是透過持幣數量決定誰來建構新區塊，概念類似於一間公司裡持有股份較多的大股東對公司的影響遠甚於小股東。PoS雖然解決的PoW耗能的問題，但權益證明也伴隨一些弊端，為爭取建構權而囤幣、數據集中化等問題類似大股東集權於一身，原本區塊鏈的去中心化特性在PoS隨著以太2.0問世情況下是否背道而馳？</span></p><p><span style="font-size: 12px;"> </span></p><p><br></p><p><span style="font-size: 19px;"><strong>PoW vs PoS比較</strong></span></p><p><img src="https://fdb-webadmin.azurewebsites.net/Upload/d6037fcad94a40e4a40f8e84f8728cac/POSVSPOW.jpg" alt="POSVSPOW" data-href="https://fdb-webadmin.azurewebsites.net/Upload/d6037fcad94a40e4a40f8e84f8728cac/POSVSPOW.jpg" style=""/></p><p><span style="font-size: 14px;">協助以太1.0的為礦工(PoW機制)，而運行以太2.0則為驗證者(PoS)。</span></p><p><span style="font-size: 14px;">驗證者負責儲存數據處理交易以及創建新區塊，任何在以太2.0的人都能成為驗證者</span><span style="font-size: 12px;">。</span></p><p><span style="font-size: 12px;"> </span></p><p><span style="font-size: 14px;">分片鏈是一種提升以太坊擴展和容量的機制，目前以太1.0採區塊鏈組成的單條區塊鏈，2.0分片鏈機制將區塊鏈分解，進而分配數據給更多節點，簡化了訊息驗證過程，提升驗證訊息和交易的速度。</span></p><p><span style="font-size: 12px;"> </span></p><p><span style="font-size: 14px;">已持有以太幣的人則無需做任何動作，儘管PoW即將被取代，以太坊自問世以來在過渡到權益證明仍完好無損。錢包中持有的任何資金在合併之後仍然可以使用無需做任何升級</span><span style="font-size: 12px;">。 </span></p><p><span style="font-size: 12px;"> </span></p><p><br></p><p><span style="font-size: 19px;"><strong>以太1.0與2.0比較</strong></span></p><table style="width: auto;"><tbody><tr><td colSpan="1" rowSpan="1" width="132"></td><td colSpan="1" rowSpan="1" width="208">以太1.0</td><td colSpan="1" rowSpan="1" width="213">以太2.0</td></tr><tr><td colSpan="1" rowSpan="1" width="132">核心概念</td><td colSpan="1" rowSpan="1" width="208">單一區塊鏈</td><td colSpan="1" rowSpan="1" width="213">信標鏈+分片鏈</td></tr><tr><td colSpan="1" rowSpan="1" width="132">交易處理</td><td colSpan="1" rowSpan="1" width="208">連續處理</td><td colSpan="1" rowSpan="1" width="213">同時處理</td></tr><tr><td colSpan="1" rowSpan="1" width="132">處理交易數</td><td colSpan="1" rowSpan="1" width="208">15-30筆 / 秒</td><td colSpan="1" rowSpan="1" width="213">100000筆 / 秒 (狀態好的預期)</td></tr><tr><td colSpan="1" rowSpan="1" width="132">加密貨幣</td><td colSpan="1" rowSpan="1" width="208">有 (Ether)</td><td colSpan="1" rowSpan="1" width="213">有 (Ether)</td></tr><tr><td colSpan="1" rowSpan="1" width="132">智能合約</td><td colSpan="1" rowSpan="1" width="208">有</td><td colSpan="1" rowSpan="1" width="213">有</td></tr><tr><td colSpan="1" rowSpan="1" width="132">獎勵機制</td><td colSpan="1" rowSpan="1" width="208">PoW 工作量證明</td><td colSpan="1" rowSpan="1" width="213">PoS 權益證明</td></tr><tr><td colSpan="1" rowSpan="1" width="132">消耗能源</td><td colSpan="1" rowSpan="1" width="208">較多</td><td colSpan="1" rowSpan="1" width="213">較少</td></tr><tr><td colSpan="1" rowSpan="1" width="132">數據庫</td><td colSpan="1" rowSpan="1" width="208">複製的</td><td colSpan="1" rowSpan="1" width="213">分段的</td></tr></tbody></table><p> </p><p> </p><p><br></p>',
      createdate: '2022.10.12',
      tags: [
        {
          id: 3379,
          name: '以太坊'
        },
        {
          id: 3380,
          name: '去中心化'
        },
        {
          id: 3381,
          name: '區塊鏈'
        },
        {
          id: 3382,
          name: '升級'
        },
        {
          id: 3383,
          name: '價值'
        }
      ],
      istop: 1
    }
  }
}

export const getNewsRecommendNews = async () => {
  return {
    result: 1,
    resultMsg: '成功',
    data: [
      {
        id: '20221015-HOT-technical-analysis-support-resistance',
        img: blockChain,
        title: '支撐壓力',
        description: '技術分析中支撐位與壓力位置判別方式',
        tagCount: 5,
        tags: [
          {
            id: 31,
            name: '技術分析'
          },
          {
            id: 77,
            name: '支撐壓力'
          },
          {
            id: 6,
            name: '加密貨幣'
          },
          {
            id: 29,
            name: '交易'
          },
          {
            id: 33,
            name: '教學'
          }
        ],
        date: '2022-10-15T21:26:40.493'
      },
      {
        id: '20221015-HOT-technical-analysis-ICH-ichimoku-indactors-Goichi-Hosoda',
        img: blockChain,
        title: '一目均衡表/雲圖',
        description: '一目均衡表又稱雲圖指標ICH(Ichimoku)',
        tagCount: 4,
        tags: [
          {
            id: 31,
            name: '技術分析'
          },
          {
            id: 76,
            name: '雲圖'
          },
          {
            id: 6,
            name: '加密貨幣'
          },
          {
            id: 33,
            name: '教學'
          },
          {
            id: 29,
            name: '交易'
          }
        ],
        date: '2022-10-15T20:55:22.457'
      },
      {
        id: '20221015-HOT-technical-analysis-uptrend-downtrend',
        img: blockChain,
        title: '上下通道  ',
        description: '技術分析中判別壓力支撐指標之一',
        tagCount: 4,
        tags: [
          {
            id: 31,
            name: '技術分析'
          },
          {
            id: 75,
            name: '上下通道'
          },
          {
            id: 6,
            name: '加密貨幣'
          },
          {
            id: 29,
            name: '交易'
          },
          {
            id: 33,
            name: '教學'
          }
        ],
        date: '2022-10-15T20:50:17.767'
      },
      {
        id: '20221015-HOT-technical-analysis-OBV-VOL',
        img: blockChain,
        title: 'VOL',
        description: '成交量是投資人常用的技術指標不管任何市場',
        tagCount: 4,
        tags: [
          {
            id: 31,
            name: '技術分析'
          },
          {
            id: 74,
            name: 'VOL'
          },
          {
            id: 6,
            name: '加密貨幣'
          },
          {
            id: 33,
            name: '教學'
          },
          {
            id: 29,
            name: '交易'
          }
        ],
        date: '2022-10-15T20:46:21.16'
      },
      {
        id: '20221015-HOT-technical-analysis-SAR-Stop-And-Reverse-intro',
        img: blockChain,
        title: 'SAR',
        description: 'SAR又稱拋物線指標（Stop And Reverse）是用來判斷趨勢停止與反轉的指標，',
        tagCount: 4,
        tags: [
          {
            id: 31,
            name: '技術分析'
          },
          {
            id: 72,
            name: 'SAR'
          },
          {
            id: 29,
            name: '交易'
          },
          {
            id: 6,
            name: '加密貨幣'
          },
          {
            id: 33,
            name: '教學'
          }
        ],
        date: '2022-10-15T20:32:36.433'
      }
    ]
  }
}

export const getHashTags = async () => {
  return {
    result: 1,
    resultMsg: '成功',
    data: [
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
        id: 89,
        name: '迷因'
      },
      {
        id: 107,
        name: '破產'
      },
      {
        id: 119,
        name: 'FTX'
      },
      {
        id: 142,
        name: '未來展望'
      },
      {
        id: 148,
        name: 'crypto.com'
      }
    ]
  }
}

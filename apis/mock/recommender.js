export const getRecGroup = async () => {
  return {
    result: 1,
    resultMsg: '成功',
    data: [
      {
        rgid: 638,
        name: 'FDB',
        color: 8,
        lang: null
      },
      {
        rgid: 639,
        name: 'Kerry',
        color: 2,
        lang: null
      },
      {
        rgid: 640,
        name: '',
        color: 0,
        lang: null
      },
      {
        rgid: 641,
        name: '',
        color: 0,
        lang: null
      },
      {
        rgid: 642,
        name: '',
        color: 0,
        lang: null
      },
      {
        rgid: 643,
        name: '',
        color: 0,
        lang: null
      },
      {
        rgid: 644,
        name: '',
        color: 0,
        lang: null
      },
      {
        rgid: 645,
        name: '',
        color: 0,
        lang: null
      },
      {
        rgid: 646,
        name: '',
        color: 0,
        lang: null
      },
      {
        rgid: 647,
        name: '',
        color: 0,
        lang: null
      }
    ]
  }
}

export const getRecList = async () => {
  return {
    result: 1,
    resultMsg: '成功',
    data: {
      pageTotal: 1,
      pageSzie: 10,
      pageIndex: 1,
      totalCount: 2,
      data: [
        {
          fdb_id: 'FDB2201021859205716',
          name: 'Mark偉',
          email: 'markgame866@gmail.com',
          areaCode: '886',
          phone: '0989626990',
          userCoinModels: [
            {
              currencyType: '1',
              coinCount: '0',
              bindStatus: 0,
              coinfeeAmount: null,
              coinminiAmount: null
            },
            {
              currencyType: '2',
              coinCount: '0',
              bindStatus: 0,
              coinfeeAmount: null,
              coinminiAmount: null
            },
            {
              currencyType: '3',
              coinCount: '0',
              bindStatus: 0,
              coinfeeAmount: null,
              coinminiAmount: null
            },
            {
              currencyType: '4',
              coinCount: '0',
              bindStatus: 0,
              coinfeeAmount: null,
              coinminiAmount: null
            },
            {
              currencyType: '5',
              coinCount: '0',
              bindStatus: 0,
              coinfeeAmount: null,
              coinminiAmount: null
            }
          ],
          rgid: '639',
          createdate: '2022/01/02 18:59:20',
          lastdate: ''
        },
        {
          fdb_id: 'FDB2201021316579448',
          name: 'fdbtest',
          email: 'fdb.test@protonmail.com',
          areaCode: '886',
          phone: '12345',
          userCoinModels: [
            {
              currencyType: '1',
              coinCount: '0',
              bindStatus: 0,
              coinfeeAmount: null,
              coinminiAmount: null
            },
            {
              currencyType: '2',
              coinCount: '0',
              bindStatus: 0,
              coinfeeAmount: null,
              coinminiAmount: null
            },
            {
              currencyType: '3',
              coinCount: '0',
              bindStatus: 0,
              coinfeeAmount: null,
              coinminiAmount: null
            },
            {
              currencyType: '4',
              coinCount: '0',
              bindStatus: 0,
              coinfeeAmount: null,
              coinminiAmount: null
            },
            {
              currencyType: '5',
              coinCount: '8528.367',
              bindStatus: 1,
              coinfeeAmount: null,
              coinminiAmount: null
            }
          ],
          rgid: '638',
          createdate: '2022/01/02 13:16:57',
          lastdate: '2022/02/24 08:06:00'
        }
      ]
    }
  }
}

export const insertGroup = async () => {
  return {
    status: 200
  }
}

export const editGroup = async () => {
  return {
    status: 200
  }
}

export const getDashboardChart = async () => {
  return {
    personValue: '20',
    recommenderValue: '20',
    withdrawValue: '20',
    dates: [
      {
        date: '2022-12-27',
        personValue: '43.435',
        recommenderValue: '123.33',
        withdrawValue: '1.243'
      },
      {
        date: '2022-12-28',
        personValue: '34.6',
        recommenderValue: '10.0',
        withdrawValue: '200.1'
      },
      {
        date: '2022-12-29',
        personValue: '0.0',
        recommenderValue: '0.0',
        withdrawValue: '0.0'
      },
      {
        date: '2022-12-30',
        personValue: '2.0',
        recommenderValue: '0.0',
        withdrawValue: '70.0'
      },
      {
        date: '2022-12-31',
        personValue: '0.0',
        recommenderValue: '94.32',
        withdrawValue: '0.0'
      },
      {
        date: '2023-01-01',
        personValue: '10.0',
        recommenderValue: '40.0',
        withdrawValue: '22.0'
      },
      {
        date: '2023-01-02',
        personValue: '20.0',
        recommenderValue: '20.0',
        withdrawValue: '20.0'
      }
    ]
  }
}

export const getExchangeInfo = async () => {
  return [
    {
      currencyType: '1',
      coinCount: '1.03403121',
      bindStatus: 1,
      coinfeeAmount: '0.0005',
      coinminiAmount: '0.001'
    },
    {
      currencyType: '2',
      coinCount: '20.22931226',
      bindStatus: 1,
      coinfeeAmount: '0.01',
      coinminiAmount: '0.03'
    },
    {
      currencyType: '3',
      coinCount: '0',
      bindStatus: 0,
      coinfeeAmount: '0.25',
      coinminiAmount: '20'
    },
    {
      currencyType: '4',
      coinCount: '0',
      bindStatus: 0,
      coinfeeAmount: '0.1',
      coinminiAmount: '0.3'
    },
    {
      currencyType: '5',
      coinCount: '388.21625589',
      bindStatus: 1,
      coinfeeAmount: '1',
      coinminiAmount: '20'
    }
  ]
}

export const getCommissionTransaction = async () => {
  return {
    pageTotal: 2,
    pageSzie: 10,
    pageIndex: 1,
    totalCount: 13,
    data: [
      {
        id: 246,
        txDate: '2023-01-02T00:00:00',
        currency: 'USDT',
        changeType: 0,
        changeNum: '-70',
        restNum: '209.21625589'
      },
      {
        id: 247,
        txDate: '2023-01-02T00:00:00',
        currency: 'TEH',
        changeType: 2,
        changeNum: '20',
        restNum: '29.21625589'
      },
      {
        id: 248,
        txDate: '2023-01-02T00:00:00',
        currency: 'BTC',
        changeType: 2,
        changeNum: '7',
        restNum: '9.21625589'
      },
      {
        id: 249,
        txDate: '2023-01-02T00:00:00',
        currency: 'USDT',
        changeType: 3,
        changeNum: '-70',
        restNum: '9.21625589'
      },
      {
        id: 250,
        txDate: '2023-01-02T00:00:00',
        currency: 'USDT',
        changeType: 2,
        changeNum: '-70',
        restNum: '9.21625589'
      },
      {
        id: 251,
        txDate: '2023-01-02T00:00:00',
        currency: 'USDT',
        changeType: 2,
        changeNum: '-70',
        restNum: '9.21625589'
      },
      {
        id: 252,
        txDate: '2023-01-02T00:00:00',
        currency: 'USDT',
        changeType: 2,
        changeNum: '-70',
        restNum: '9.21625589'
      },
      {
        id: 253,
        txDate: '2023-01-02T00:00:00',
        currency: 'USDT',
        changeType: 2,
        changeNum: '70',
        restNum: '9.21625589'
      },
      {
        id: 254,
        txDate: '2023-01-02T00:00:00',
        currency: 'USDT',
        changeType: 2,
        changeNum: '70',
        restNum: '9.21625589'
      }
    ]
  }
}

export const getPersonalFeedback = async () => {
  return {
    pageTotal: 3,
    pageSzie: 10,
    pageIndex: 1,
    totalCount: 23,
    data: [
      {
        id: 58,
        txDate: '2022-10-21T23:31:00',
        currency: 5,
        canRebatePoint: '447.8',
        canRebatValue: '0.06717',
        rebateStatus: 1
      },
      {
        id: 57,
        txDate: '2022-10-20T03:50:00',
        currency: 5,
        canRebatePoint: '103.76',
        canRebatValue: '0.015564',
        rebateStatus: 1
      },
      {
        id: 56,
        txDate: '2022-10-13T10:31:00',
        currency: 5,
        canRebatePoint: '487.315',
        canRebatValue: '0.07674525',
        rebateStatus: 1
      },
      {
        id: 55,
        txDate: '2022-10-12T06:47:00',
        currency: 5,
        canRebatePoint: '260.06',
        canRebatValue: '0.039009',
        rebateStatus: 1
      },
      {
        id: 54,
        txDate: '2022-10-10T08:56:00',
        currency: 5,
        canRebatePoint: '65.265',
        canRebatValue: '0.01125821',
        rebateStatus: 1
      },
      {
        id: 53,
        txDate: '2022-10-07T13:26:00',
        currency: 5,
        canRebatePoint: '66.63',
        canRebatValue: '0.0099945',
        rebateStatus: 1
      },
      {
        id: 52,
        txDate: '2022-10-05T13:15:00',
        currency: 5,
        canRebatePoint: '66.2225',
        canRebatValue: '0.00993338',
        rebateStatus: 0
      },
      {
        id: 51,
        txDate: '2022-10-02T23:19:00',
        currency: 5,
        canRebatePoint: '63.8225',
        canRebatValue: '0.00957338',
        rebateStatus: 0
      },
      {
        id: 49,
        txDate: '2022-09-30T01:27:00',
        currency: 5,
        canRebatePoint: '536',
        canRebatValue: '0.07638',
        rebateStatus: 1
      },
      {
        id: 50,
        txDate: '2022-09-30T01:27:00',
        currency: 5,
        canRebatePoint: '133.145',
        canRebatValue: '0.01997175',
        rebateStatus: 1
      }
    ]
  }
}

export const getRecommender = async () => {
  return {
    pageTotal: 3,
    pageSzie: 10,
    pageIndex: 1,
    totalCount: 29,
    data: [
      {
        txDate: '2022-02-24T08:06:00',
        currency: 5,
        memberName: 'fdbtest',
        rgid: 638,
        canRebatePoint: '1598.085',
        canRebatValue: '0.0319617',
        rebateStatus: 1
      },
      {
        txDate: '2022-02-20T08:55:00',
        currency: 5,
        memberName: 'fdbtest',
        rgid: 638,
        canRebatePoint: '1070.328',
        canRebatValue: '0.02140656',
        rebateStatus: 0
      },
      {
        txDate: '2022-02-18T12:04:00',
        currency: 5,
        memberName: 'fdbtest',
        rgid: 638,
        canRebatePoint: '1124.718',
        canRebatValue: '0.02249436',
        rebateStatus: 1
      },
      {
        txDate: '2022-02-17T12:10:00',
        currency: 5,
        memberName: 'fdbtest',
        rgid: 638,
        canRebatePoint: '996.659',
        canRebatValue: '0.01993318',
        rebateStatus: 1
      },
      {
        txDate: '2022-02-15T17:23:00',
        currency: 5,
        memberName: 'fdbtest',
        rgid: 638,
        canRebatePoint: '1010.4935',
        canRebatValue: '0.02020987',
        rebateStatus: 1
      },
      {
        txDate: '2022-02-09T19:08:00',
        currency: 5,
        memberName: 'fdbtest',
        rgid: 638,
        canRebatePoint: '534',
        canRebatValue: '0.01068',
        rebateStatus: 1
      },
      {
        txDate: '2022-02-08T09:14:00',
        currency: 5,
        memberName: 'fdbtest',
        rgid: 638,
        canRebatePoint: '523.788',
        canRebatValue: '0.01047576',
        rebateStatus: 1
      },
      {
        txDate: '2021-12-31T09:32:00',
        currency: 5,
        memberName: 'fdbtest',
        rgid: 638,
        canRebatePoint: '76.16',
        canRebatValue: '0.0015232',
        rebateStatus: 1
      },
      {
        txDate: '2021-12-29T00:47:00',
        currency: 5,
        memberName: 'fdbtest',
        rgid: 638,
        canRebatePoint: '228.414',
        canRebatValue: '0.00456828',
        rebateStatus: 1
      },
      {
        txDate: '2021-12-24T07:31:00',
        currency: 5,
        memberName: 'fdbtest',
        rgid: 638,
        canRebatePoint: '204.6825',
        canRebatValue: '0.00409365',
        rebateStatus: 1
      }
    ]
  }
}

export const getWithdrawal = async () => {
  return {
    pageTotal: 3,
    pageSzie: 10,
    pageIndex: 1,
    totalCount: 21,
    data: [
      {
        id: 64,
        rebateStatus: 0,
        orderNum: '22111405A000001',
        orderDate: '2022-11-14T13:33:20.537',
        currency: 1,
        orderValue: '20',
        finishDate: '2022-11-14 00:00:00'
      },
      {
        id: 65,
        rebateStatus: 1,
        orderNum: '22111405A000002',
        orderDate: '2022-11-14T13:33:20.537',
        currency: 5,
        orderValue: '20',
        finishDate: '2022-11-14 00:00:00'
      },
      {
        id: 66,
        rebateStatus: 2,
        orderNum: '22111405A000003',
        orderDate: '2022-11-14T13:33:20.537',
        currency: 3,
        orderValue: '20',
        finishDate: '2022-11-14 00:00:00'
      },
      {
        id: 67,
        rebateStatus: 3,
        orderNum: '22111405A000004',
        orderDate: '2022-11-14T13:33:20.537',
        currency: 5,
        orderValue: '20',
        finishDate: '2022-11-14 00:00:00'
      }
    ]
  }
}

export const withdrawalOrder = async () => {
  return {
    data: {
      bwoOrderID: 'GREAGREAGRE12343'
    }
  }
}

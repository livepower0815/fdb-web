import bybiy from './imgs/bybit.png'
import default1 from './imgs/default.png'

export const login = async () => {
  return {
    result: 1,
    resultMsg: null,
    data: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGREIyMTEyMzExNDUzMjMyMDA1IiwiVG9rZW5JRCI6IjQwYTI2NGVlLTcwNDEtNDNkMy05NDhjLWU2NGU1YmVkYmMwMiIsInVuaXF1ZV9uYW1lIjoiRkRCMjExMjMxMTQ1MzIzMjAwNSIsIm5iZiI6MTY3MjY3NDMxNywiZXhwIjoxNjcyNzg5NTE3LCJpYXQiOjE2NzI2NzQzMTd9.xi_6kcaaHhWdQ7B6wl690UBf0E7BfG-IZC9oeIm0e0Y'
  }
}

export const googleLogin = async () => {
  return {
    status: 200
  }
}

export const logout = async () => {
  return {
    status: 200
  }
}

export const reSendCheckMail = async () => {
  return {
    status: 200
  }
}

export const register = async () => {
  return {
    status: 200
  }
}

export const googleRegister = async () => {
  return {
    status: 200
  }
}

export const getUserInfo = async () => {
  return {
    udid: 1,
    fdB_ID: 'FDB2112311453232005',
    name: 'Fdb_JinHao',
    areaCode: '886',
    password: 'QbFHZJU0QOmslRf1PDv6Zdc5GEv2Qp0Nv4QxPeMK3zM=',
    phone: '980320398',
    email: 'ben1937537@gmail.com',
    openDate: null,
    myInviteCore: 'y4hb79sS',
    inviteCore: '',
    imageUrl: default1,
    createDate: '2021-12-31T14:53:24.033',
    modifyDate: '2022-02-16T21:14:46.737',
    status: 0,
    isEnable: 1,
    sub: null,
    accountType: 'FDB'
  }
}

export const getCaptchaImage = async () => {
  return {
    img: '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAgAEgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD35l3Iy5IyMZB5FNDJGAhkGVXJ3Nzj1NQ3lwsFpLciT5LcF5AgDEhRkr9a86Pxs8My263sWlazLZ/JHc3Ysx5VvuP3Xbd174Gc54zWtOjUq/Aribtuekm4gEiRmaPe4yi7hlh7DvUBUrdtPLMilFOUUZzH2P1zWJPdwXOu6Xd2ZEsD25eIqMBhhsYrZkikZTdbSz+XxDwMAjkE9/WuHD13UdRNW5ZNfck/1NqlNRUWnurlpszQZhk2FgCr7c/oaFmUwiVwY17+ZwR9a8r0LUfG/iZLsWGs28SWzBSskSIec4xtQ+lbOieOxG95p3i9rWxntAN88zKiNyB83OM5IORwc8Y790qTXU82ljqdRrRpPRNrS539V8w7biWNtrcq74JwQPT2rP0zUNK1G3W50/UVuYmkI+0RTiRZCnX5gSMDNasUolDEKwAOASPve49qyO0iF3CnkxvLud1BB2n5s9/aipZZPKjL7GfH8KDJNFAFDWlZdFv/AC1jCG2mMnHJOw9K8RtYpD+y9MwK+WJGZhjB/wCPgAfWvdYDa27Msc3yldwBbKqM44P1qQW4ieSSEkMwJ2ljtLHviuijX9mrW6p/df8AzDqn2OQ8O2M93pHhmfy0lgj0+FJSrgbfk+uc4Irr5LdGt5kcs6uSxDN09h7VJGu1OVUMeW2jgnvUMiJGFDzSjfKCOepP8P0rijSjCVSUftty+b/4YrnbjGL+yrHkfgfxBp+itfx3969sk0gPyIxJxu7gHHJrjL+48P8AjX4w3k/iaZLXSEtvMgiuLkW4kIAHL5wD1OAecY7V7vLpGjid4m8N2DcZJWBCSucZHFeb/E3w54i8Q6zb2uj+DdD1nS7OFBDM87RSx9cxkiaPK8cAZHvnNdNSopS5ktf+AcGFw1WlHklJcqu/PV/8FjvgdaaVJq3jC/0RDFpD3a29tAWZgY13EMd3PIPfnmvWgLZr0xCB96lWLAfKCBx3rjvhb4Su/CPhy7g1BoIdRv7p7h4oFxHFwAFQdwAO3HbnGT2hkmti7y7pYggOVABB6Hj9ah9F5L8jsXVlqiq6RlYY/srhYwpIUjIbPTnqOaKQz//Z',
    code: 'nlDg',
    uuid: 'b6e81cd2-b6e4-4168-9932-0449bd903c36'
  }
}

export const updateUserData = async () => {
  return {
    status: 200
  }
}

export const resetPassword = async () => {
  return {
    status: 200
  }
}

export const setNewPassword = async () => {
  return {
    status: 200
  }
}

export const getCoinStoreGroup = async () => {
  return {
    result: 1,
    resultMsg: 'Success',
    data: [
      {
        eid: 1,
        csgName: 'bybit',
        imageUrl: bybiy
      }
    ]
  }
}

export const bindCoinStoreData = async () => {
  return {
    status: 200
  }
}

export const getBindCoinStores = async () => {
  return {
    result: 0,
    resultMsg: 'Success',
    data: [
      {
        bcsiid: 35,
        fdB_ID: 'FDB2112311453232005',
        eid: 1,
        fdB_UID: '7712188',
        email: '',
        areaCode: '',
        phone: '',
        createDate: '2022-01-02T04:00:50.037',
        status: 1,
        modifyDate: '2022-12-13T23:51:00.413',
        checkCount: 0,
        lang: 'TW'
      }
    ]
  }
}

export const getAllWithdrawalAddress = async () => {
  return {
    result: 0,
    resultMsg: 'Success',
    data: [
      {
        wasid: 61,
        fdB_ID: 'FDB2112311453232005',
        cid: 1,
        coinAddress: '0x88af3c9ed1dd7dd73d7232d15d5e44e00f1dXXXX',
        coinAddress2: '',
        status: 0,
        isEnable: 0,
        createDate: '2022-03-29T16:53:57.04',
        modifyDate: '2022-12-07T15:33:38.107'
      },
      {
        wasid: 65,
        fdB_ID: 'FDB2112311453232005',
        cid: 2,
        coinAddress: '0x88af3c9ed1dd7dd73d7232d15d5e44e00f1dXXXX',
        coinAddress2: '',
        status: 0,
        isEnable: 0,
        createDate: '2022-03-29T16:53:57.33',
        modifyDate: '2022-12-07T15:33:38.693'
      },
      {
        wasid: 62,
        fdB_ID: 'FDB2112311453232005',
        cid: 3,
        coinAddress: '',
        coinAddress2: '',
        status: 0,
        isEnable: 0,
        createDate: '2022-03-29T16:53:57.117',
        modifyDate: '2022-12-07T15:33:38.257'
      },
      {
        wasid: 64,
        fdB_ID: 'FDB2112311453232005',
        cid: 4,
        coinAddress: '',
        coinAddress2: '',
        status: 0,
        isEnable: 0,
        createDate: '2022-03-29T16:53:57.26',
        modifyDate: '2022-12-07T15:33:38.547'
      },
      {
        wasid: 63,
        fdB_ID: 'FDB2112311453232005',
        cid: 5,
        coinAddress: '0x88af3c9ed1dd7dd73d7232d15d5e44e00f1dXXXX',
        coinAddress2: '',
        status: 0,
        isEnable: 0,
        createDate: '2022-03-29T16:53:57.187',
        modifyDate: '2022-12-07T15:33:38.403'
      }
    ]
  }
}

export const withdrawalDataUpdate = async () => {
  return {
    status: 200
  }
}

export const validWithdrawalData = async () => {
  return {
    status: 200
  }
}

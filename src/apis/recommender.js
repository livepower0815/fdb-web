import request from '@/utils/request'

// 取得推薦人群組
export const getRecGroup = () =>
  request({
    url: '/api/User/GetReferrerGroup',
    method: 'GET'
  })

// export const getRecGroup = async () => {
//   return [
//     { name: '幼稚園同學', color: 7 },
//     { name: '國小同學', color: 0 },
//     { name: '國中同學', color: 4 },
//     { name: '高中同學', color: 5 },
//     { name: '大學同學', color: 0 },
//     { name: '', color: 0 },
//     { name: '主力', color: 3 },
//     { name: '同事', color: 3 },
//     { name: '大戶', color: 2 },
//     { name: '', color: 0 }
//   ]
// }

// 取得推薦人列表
export const getRecList = data =>
  request({
    url: '/api/User/GetReferrerLog',
    method: 'POST',
    data
  })

// export const getRecList = async () => {
//   return {
//     data: [
//       {
//         name: 'kerry',
//         fdb_id: 'id01',
//         coins: [
//           { type: 1, value: '0.12345678' },
//           { type: 2, value: '0.12345678' },
//           { type: 3, value: '0.12345678' },
//           { type: 4, value: '0.12345678' },
//           { type: 5, value: '0.12345678' }
//         ],
//         rgid: 1,
//         email: 'markweiwebdesign@gmail.com',
//         areaCode: '886',
//         phone: '987654321',
//         createdate: '2021-07-29T03:52:00.253',
//         lastdate: '2021-07-29T03:52:00.253'
//       },
//       {
//         name: 'kerry1',
//         fdb_id: 'id02',
//         coins: [
//           { type: 1, value: '0.12345678' },
//           { type: 3, value: '0.12345678' },
//           { type: 4, value: '0.12345678' },
//           { type: 5, value: '0.12345678' }
//         ],
//         rgid: 2,
//         email: 'markweiwebdesign@gmail.com',
//         areaCode: '886',
//         phone: '987654321',
//         createdate: '2021-07-29T03:52:00.253',
//         lastdate: '2021-07-29T03:52:00.253'
//       },
//       {
//         name: 'kerry2',
//         fdb_id: 'id03',
//         coins: [
//           { type: 1, value: '0.12345678' },
//           { type: 2, value: '0.12345678' },
//           { type: 3, value: '0.12345678' },
//           { type: 5, value: '0.12345678' }
//         ],
//         rgid: 2,
//         email: 'markweiwebdesign@gmail.com',
//         areaCode: '886',
//         phone: '987654321',
//         createdate: '2021-07-29T03:52:00.253',
//         lastdate: '2021-07-29T03:52:00.253'
//       },
//       {
//         name: 'kerry3',
//         fdb_id: 'id04',
//         coins: [
//           { type: 1, value: '0.12345678' },
//           { type: 2, value: '0.12345678' },
//           { type: 3, value: '0.12345678' }
//         ],
//         rgid: 0,
//         email: 'markweiwebdesign@gmail.com',
//         areaCode: '886',
//         phone: '987654321',
//         createdate: '2021-07-29T03:52:00.253',
//         lastdate: '2021-07-29T03:52:00.253'
//       }
//     ],
//     totalCount: 36
//   }
// }

// 添加群組
export const insertGroup = async () => {
  return { status: 200 }
}

// 建立新組別
export const addNewGroup = async () => {
  return { status: 200 }
}

// 編輯推薦人組別
export const editGroup = data =>
  request({
    url: '/api/User/SetReferrerGroup',
    method: 'POST',
    data
  })

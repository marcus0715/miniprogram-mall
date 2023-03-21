// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  const {pid, searchVal = ''} = event
  const db = cloud.database();
  const _ = db.command
  const result = await db.collection('categoryList').where({
    type: _.elemMatch(_.eq(pid)),
    name: {
      $regex: '.*' + searchVal,
      $options: 'i'
    },
  }).get()
  return result.data;
}
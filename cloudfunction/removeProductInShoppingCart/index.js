// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

exports.main = async (event, context) => {
  const { _id } = event;
  const db = cloud.database();
  const result = await db.collection('shoppingCartList').doc(_id).remove();
  return result.data
}
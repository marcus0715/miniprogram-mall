function isNegative(str){
  var s=str+'';

  if(s.indexOf("-")>=0){
    return true
  }else{
    return false
  }
}
function getImageUrl(width, height){
  return `https://picsum.photos/seed/${Math.random()}/${width}/${height}`
}
module.exports = {
  isNegative,
  getImageUrl
}
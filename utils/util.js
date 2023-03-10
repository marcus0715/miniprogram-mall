const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${[year, month, day].map(formatNumber).join('/')} ${[
    hour,
    minute,
    second,
  ]
    .map(formatNumber)
    .join(':')}`;
};

const rpxToPx = (px) => {
  let deviceWidth = wx.getSystemInfoSync().windowWidth;
  let rpx = (750 / deviceWidth) * Number(px);

  return Math.floor(rpx);
}

module.exports = {
  formatTime,
  rpxToPx
};

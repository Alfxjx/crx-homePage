
// bing 壁纸
// https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1
async function _getBackgroundImageFromBing() {
  const apiLink = "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1";
  let bing = "https://cn.bing.com";
  // let ImgUrl = axios.get(apiLink).then((res) => {
  //   let retlinks = res["images"][0]["url"];
  //   return retlinks;
  // });
  let ImgUrl = await fetch(apiLink)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      return myJson;
    });
  console.log(ImgUrl.images[0].url);

  let bgLink = bing + ImgUrl.images[0].url;
  return bgLink;
}




// https://wx.jdcloud.com/market/api/10610
// 天气api
async function _getWeatherState(city) {
  const appKey = "b41051aa16322b5dcc0b49fa57378d4b";
  let weatherQuery = `https://way.jd.com/he/freeweather?city=beijing&appkey=${appKey}&city=${city}`;
  let resJson = await fetch(weatherQuery).then(res=>{
    return res.json();
  }).then(res=>{
    return res;
  })
  return resJson;
}

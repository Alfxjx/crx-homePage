function _getBackgroundImageFromBing() {
  const apiLink = "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1";
  const bing = "https://cn.bing.com";
  // let ImgUrl = axios.get(apiLink).then((res) => {
  //   let retlinks = res["images"][0]["url"];
  //   return retlinks;
  // });

  let ImgUrl = fetch(apiLink).then((res) => {
    console.log(res);
    let json = res.json();
    return json;
  });
  // TODO 有问题
  console.log(ImgUrl);
  console.log(ImgUrl["images"][0]["url"]);

  let bgLink = bing + ImgUrl;
  return bgLink;
}

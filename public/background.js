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

// {
//   "images": [
//   {
//   "startdate": "20200708",
//   "fullstartdate": "202007081600",
//   "enddate": "20200709",
//   "url": "/th?id=OHR.ColoradoColumbine_ZH-CN0901580141_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
//   "urlbase": "/th?id=OHR.ColoradoColumbine_ZH-CN0901580141",
//   "copyright": "位于科罗拉多南部圣胡安山脉的美国盆地 (© Blaine Harrington III/Alamy)",
//   "copyrightlink": "https://www.bing.com/search?q=%E5%9C%A3%E8%83%A1%E5%AE%89%E5%B1%B1%E8%84%89&form=hpcapt&mkt=zh-cn",
//   "title": "",
//   "quiz": "/search?q=Bing+homepage+quiz&filters=WQOskey:%22HPQuiz_20200708_ColoradoColumbine%22&FORM=HPQUIZ",
//   "wp": true,
//   "hsh": "2bca1e176b879f5b4839ac7c88b32392",
//   "drk": 1,
//   "top": 1,
//   "bot": 1,
//   "hs": []
//   }
//   ],
//   "tooltips": {
//   "loading": "正在加载...",
//   "previous": "上一个图像",
//   "next": "下一个图像",
//   "walle": "此图片不能下载用作壁纸。",
//   "walls": "下载今日美图。仅限用作桌面壁纸。"
//   }
//   }

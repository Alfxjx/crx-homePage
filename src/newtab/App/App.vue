<template>
  <div class="main_app" :style="{ background: `url(${bgLink})` }">
    <div class="head-bar">
      <div class="time-part">
        {{ nowTime }}
      </div>
      <div class="weather-part">
        {{ localWeather }}
      </div>
    </div>
    <div class="mid-search">
      <input class="input-s" type="text" v-model="inputData">
    </div>
    <div class="bot-links"></div>
  </div>
</template>

<script>
// import { Notification } from "element-ui";
// import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      bgLink: "",
      date: new Date(),
      updateTimer: null,
      localWeather: "晴天",
      inputData:"plz input"
    };
  },
  created() {
    this._initTimer();
    this._initBackground();
  },
  computed: {
    nowTime() {
      let date = this.date;
      return `${date.getHours()}:${date.getMinutes()}`;
    },
  },
  methods: {
    _initTimer() {
      this.date = new Date();
      clearInterval(this.updateTimer);
      this.updateTimer = setInterval(() => {
        this.date = new Date();
      }, 1000);
    },
    _initBackground() {
      var bg = window.chrome.extension.getBackgroundPage();
      console.log("bglink " + this.bgLink);
      bg._getBackgroundImageFromBing().then((res) => {
        this.bgLink = res;
      });
      console.log("bglink " + this.bgLink);
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
.main_app {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 0% 0%;
  display: flex;
  justify-content: center;
  position: relative;
}
/* .main_app:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: inherit;
  filter: blur(1px);
  z-index: 2;
} */
.head-bar {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.time-part {
  color: #fff;
  padding: 50px 10px 0 50px;
  font-size: 40px;
  z-index: 10;
}
.weather-part {
  font-size: 40px;
  padding: 50px 10px 0 10px;
  color: #fff;
  z-index: 10;
}
.mid-search{
  padding-top: 300px;
  z-index: 10;
}
.input-s{
  padding: 10px 25px;
}
</style>

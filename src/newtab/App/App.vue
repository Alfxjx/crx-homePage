<template>
  <div class="main_app" :style="{ background: `url(${bgLink})` }">
    <div class="head-bar"></div>
    <div class="mid-search"></div>
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
    };
  },
  mounted() {
    var chrome = window.chrome;
    var bg = chrome.extension.getBackgroundPage();
    this.bgLink = bg._getBackgroundImageFromBing();
  },
  computed: {},
  methods: {},
};
</script>

<style>
body {
  margin: 0;
}
.main_app {
  width: 100%;
  height: 100vh;
  background: 100% 100% no-repeat;
}
</style>

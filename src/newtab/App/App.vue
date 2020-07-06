<template>
  <!-- :style="{ background: `url(${bgLink})` }" -->
	<div class="main_app">
		<div class="head-bar"></div>
		<div class="mid-search"></div>
		<div class="bot-links"></div>
	</div>
</template>

<script>
import { Notification } from 'element-ui';
import axios from 'axios';

export default {
	name: 'app',
	data() {
		return {
			bgLink: '',
		};
	},
	mounted() {
		this._getBackgroundImageFromBing();
	},
	computed: {},
	methods: {
		_getBackgroundImageFromBing() {
			const apiLink = 'https://bing.ioliu.cn/v1/';
			// axios.defaults.withCredentials = true;
			// let ImgUrl = axios.get(apiLink).then((res)=>{
			//   let retlinks = res['images'][0]['url'];
			//   return retlinks;
			// });
			this.bgLink = apiLink;
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
  background: 100% 100% no-repeat;
}
</style>

import Vue from "vue";
import AppComponent from "./App/App.vue";
// import { Notification } from 'element-ui';

// Vue.component(Notification.name, Notification);
Vue.component("app-component", AppComponent);

new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});

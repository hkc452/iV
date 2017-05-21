import Vue from 'vue';
import router from 'router';
import store from 'store';
import App from './app.vue';

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});
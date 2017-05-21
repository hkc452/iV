/**
 * Created by 77954 on 2017/5/19.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import iView from 'iview';
import Util from 'libs/util';
import routes from './routes';
Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes
})
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

export default router;
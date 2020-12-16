import Vue from 'vue';
import VueRouter from 'vue-router';
import { syncRouteList } from './syncRouteList';
import { getPageTitle } from '@/utils/utils';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: syncRouteList
});
router.beforeEach(async (to, from, next) => {
    //	console.log('来自哪儿', from.path);
    //	console.log('去哪儿', to.path);
    window.document.title = getPageTitle(to.meta);
    next();
});

export default router;

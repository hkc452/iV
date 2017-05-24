/**
 * Created by 77954 on 2017/5/20.
 */
import {loadRoute} from './tool';
import notfind from 'notfind';
import children from './child/iview';
import tChildren from './child/tview';
// import genRoute from './genRoute';
// const children  = genRoute('iview');
// const tChildren  = genRoute('tview');


export default  [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: loadRoute('index'),
    },
    {
        path: '/iview',
        component: loadRoute('iview/index'),
        children
    },
    {
        path: '/tview',
        component: loadRoute('tview/index'),
        children: tChildren
    },
    {
        path:'*',
        component:notfind
    }
];


/**
 * Created by 77954 on 2017/5/20.
 */
import {loadRoute, loadChildRoute} from './tool';
import notfind from 'notfind';
const loadIViewChildren = loadChildRoute();
const loadTViewChildren = loadChildRoute('tview');

let children = [
    {
        path: 'grid', component: loadIViewChildren('grid/index')
    }
];

let tChildren = [
    {
        path: 'grid', component: loadTViewChildren('grid/index')
    }
];


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


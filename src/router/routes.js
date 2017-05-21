/**
 * Created by 77954 on 2017/5/20.
 */
import {loadRoute,loadChildRoute} from './tool';

const loadIViewChildren = loadChildRoute();
const loadKViewChiildren = loadChildRoute('kview');


let children = [
  {
    path:'grid',component:loadIViewChildren('grid/index')
  }
];

let  kChildren = [];


export default  [
  {
    path: '/',
    meta:{
      title:''
    },
    component:loadRoute('index'),
  },
  {
    path:'/iview',
    component:loadRoute('iview/index'),
    children
  },
  {
    path:'/kview',
    component:loadRoute('kview/index')
  },
];


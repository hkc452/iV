/**
 * Created by kc on 2017/5/23.
 */
//使用iview的路由
import {loadChildRoute} from '../tool';
const loadIViewChildren = loadChildRoute();
let children = [
    {
        path: 'grid', component: loadIViewChildren('grid/index')
    }
];

export default children;

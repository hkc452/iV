/**
 * Created by kc on 2017/5/23.
 */
//测试山寨kview的路由
import {loadChildRoute} from '../tool';
const loadTViewChildren = loadChildRoute('tview');

let children = [
    {
        path: 'grid', component: loadTViewChildren('grid/index')
    }
];
export default children;
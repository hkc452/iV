/**
 * Created by kc on 2017/5/24.
 */
import path from 'path';
import fs from 'fs';
import {loadRoute} from './tool';

const views = path.resolve('../', 'views');
const ext = '.vue';


export default function readdir (modulePath) {
    let routes = [];
    const fullPath = path.join(views, modulePath)
    fs.readdirSync(fullPath).forEach(function (filename) {
        let Path = path.join(fullPath, filename);
        let rPath = path.join(modulePath, filename)
        let stat = fs.statSync(Path);
        if (stat && stat.isDirectory()) {
            routes = routes.concat(readdir(rPath));
        } else if (path.extname(Path) === ext) {

            let baseFileName = path.basename(Path, ext)
            routes.push({
                path: baseFileName === 'index' ? modulePath : rPath,
                component: loadRoute(Path)
            });
        }
    });
    return routes;
}



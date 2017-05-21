/**
 * Created by 77954 on 2017/5/20.
 */
export const loadRoute = function (path) {
    return (resolve, reject) => {
        return System.import(`views/${path}`);
    };
};

export const loadChildRoute = function (root='iview') {
    return (path)=>{
        return loadRoute(`${root}/${path}`);
    };
}
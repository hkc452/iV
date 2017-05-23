/**
 * Created by kc on 2017/5/23.
 */
//相当于Array filter
export function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}
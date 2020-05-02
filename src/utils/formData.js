export function formData(obj) {
    let data = new FormData();
    for( let key in obj){
        data.append(key, obj[key]);
    }
    return data;
}
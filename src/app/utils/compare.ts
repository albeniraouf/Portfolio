export const compare = (a, b, desc?) => {
    if(a>b) return desc? -1 : 1;
    if(a<b) return desc? 1 : -1;
    return 0;
}

export const compareBy = (a , b, key, desc?)=>{
    return compare(a[key], b[key], desc)
}
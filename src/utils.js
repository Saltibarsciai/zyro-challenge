export const compare = ( a, b , direction) =>{
    if ( a < b ){
        return direction === 'desc' ? -1 : 1;
    }
    if ( a > b ){
        return direction === 'desc' ? 1 : -1;
    }
    return 0;
};
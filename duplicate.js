module.exports = function(arr){
    for(var i = 0 ; i<arr.length;i++){
        if(arr.indexOf(arr[i])!=i){
            return true;
        }
    }
    return false;
}
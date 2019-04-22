module.exports = function (arr){
    var maxFirst=0;
    var maxSecond=0;
    for(var i =0 ; i<arr.length;i++){
      if(arr[i]>maxFirst){
        maxSecond=maxFirst;
        maxFirst=arr[i];
      }
      else if(arr[i]>maxSecond){
        maxSecond=arr[i];
      }
    } 
    var v= new Array();
    v[0]=maxFirst;
    v[1]=maxSecond;
    return v.toString();
  }
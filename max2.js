function secondMax(arr){
  var max1 = Math.max.apply(null,arr);
  var max2 =Math.max.apply(null,arr);
  max2 =  arr.splice(arr.indexOf(max2),1);
   max2 = Math.max.apply(null,arr);
  var v= new Array();
  v[0]=max1;
  v[1]=max2;
  return v;
  
}


 var unitTest={};
 
 unitTest.testMax = function (method){
 
  var arr1 = [15,70,2,61,100,21];
  var arr2 = [15,70,2,61,100,21];

  var maxFirst = Math.max.apply(null,arr2);
  var maxSecond= Math.max.apply(null,arr2);
  maxSecond = arr2.splice(arr2.indexOf(maxSecond),1);
  maxSecond = Math.max.apply(null,arr2);
 
  var result= new Array();
  result[0]=maxFirst;
  result[1]=maxSecond;

  var methodResult=method(arr1);

 if ( methodResult.toString()== result.toString()){
   return result;
 }
  else{
    
    return false;
  }
 
 };
 
 console.log(unitTest.testMax(secondMax));
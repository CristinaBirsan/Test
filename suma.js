function sum(arr)
{
  sum = 0;
  for(var i =0 ; i<arr.length;i++){
    sum+=arr[i];
  } 
  return sum;
}

var unitTest={};
unitTest.testSum = function(method){
  var arrtest = [1,4,5,6,9,2,7];
  var sum =0;
  for(var i=0 ;i<arrtest.length;i++){
    sum+=arrtest[i];
  var result=sum;
  }
  if (method(arrtest)===result){
    return result;
  }
  else{
    return false;
  }
};
console.log(unitTest.testSum(sum));


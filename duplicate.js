function duplicate(arr){
  var a =new Set(arr);
  if (arr.length === a.size){
     return false;
  }
  else {
      return true;
  }
}

var unitTest={};

unitTest.testDupl = function(method){
  var arr=[15,43,19,42,20,20];
  var result
  var a =new Set(arr);
  if(arr.length === a.size)
  {
   result=false;
  }
  else {
      return true;
  }

  var test=method(arr);

  if (test ===false && result==false){
    return false;
  }
  else{
    return true;
  }
};
unitTest.testDupl(duplicate);
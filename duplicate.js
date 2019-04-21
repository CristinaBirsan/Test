function duplicate(arr){
var a =new Set(arr);
if (arr.length=== a.size)
  {
    return "Nu sunt duplicate";
  }else return "Sunt duplicate";
}


var unitTest={};

unitTest.testDupl = function(method){
  var arr=[15,20,43,19,42,20,15];
   var a =new Set(arr);
  var result = arr.length === a.size;
  
  if (method(arr) === result){
    return false;
  }
  else{
    return true;
  }
};
console.log(unitTest.testDupl(duplicate));
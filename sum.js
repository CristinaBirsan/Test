module.exports = function(arr)
{
  sum = 0;
  for(var i =0 ; i<arr.length;i++){
    if (arr[i] % 2 == 0) 
    {
      sum+=arr[i];
    } 
  } 
  return sum;
}
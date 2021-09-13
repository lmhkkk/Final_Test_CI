//Problem 1
function adjacentElementsProduct(inputArray){
  const arr = [];
  let rs = 0;
  for(let i = 0; i<inputArray.length -1; i++){
    arr.push(inputArray[i]*inputArray[i+1]);
  }
  console.log(arr);
  for(let j =0; j <arr.length-1; j++){
    if(rs < arr[j]){
      if(arr[j]>arr[j+1] ){
        rs = arr[j];
      }
      else{
        rs = arr[j+1];
      }
    }
  }
  return rs;
}
console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));
console.log(adjacentElementsProduct([5, -1, -100, 2, 0]));

//Problem 2
function alternatingSums(a){
  let weightTeam1 = 0;
  let weightTeam2 = 0;
  const rs =[];
  for(let i=0; i<a.length; i++){
    if((i+1) % 2 == 0){
      weightTeam2 += a[i];
    }
    else{
      weightTeam1 += a[i];
    }
  }
  rs.unshift(weightTeam1,weightTeam2)
  return rs;
}
console.log(alternatingSums([60, 40, 55, 75, 64]));
console.log(alternatingSums([59, 48, 50, 70, 55, 60]));
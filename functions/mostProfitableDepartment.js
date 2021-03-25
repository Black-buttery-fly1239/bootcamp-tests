function mostProfitableDepartment(profit){
    const departmentMep = {};
   
  for(var i=0; i<profit.length; i++){
     const curProSold = profit[i];
    if(departmentMep[curProSold.department] === undefined){
      departmentMep[curProSold.department] = 0;
    }
    //console.log(curProSold.department)
    departmentMep[curProSold.department] += curProSold.sales;
  }
  var  maxT = 0;
  var highestProfitDip = "";
  for(var departmentName in departmentMep ){
    var departmentTotal = departmentMep[departmentName];
    if(departmentTotal > maxT){
      maxT = departmentTotal;
      highestProfitDip = departmentName;
    }
    //console.log(departmentTotal)
  }
  return highestProfitDip;
}
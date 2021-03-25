function findItemsOver(name1,name2){
  var objectZ =[];
 
  for(const object of name1){
    if(object.qty > name2){
      objectZ.push(object)
  }
  }
  return objectZ;
}
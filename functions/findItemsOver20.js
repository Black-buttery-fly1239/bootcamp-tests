function findItemsOver20(name){
    var objectZ =[];
   
    for(const object of name){
      if(object.qty > 20){
        objectZ.push(object)
    }
    }
    return objectZ;
  }
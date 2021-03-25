function countAllFromTown(str, code){
    console.log(str);
    console.log(code);
    
   var listReg = str.split(',');
    var counter = 0;
    
     for(var i=0; i<listReg.length;i++){
        if(listReg[i].trim().startsWith(code)){
          counter +=1;
      }
    }
    
    return counter;
      
  }
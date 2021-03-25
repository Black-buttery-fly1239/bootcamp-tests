function countAllPaarl(str){
  console.log(str)
  var newlist = [];
  var allPaarl = str.split(',');
  
  for(var i=0; i<allPaarl.length;i++){
    if(allPaarl[i].trim().startsWith("CJ")){
      newlist.push(allPaarl[i]);
      console.log(newlist.length);
      console.log(newlist);
    }
  }
  return newlist.length;
}
  
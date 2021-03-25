function totalPhoneBill(str){
    // console.log(str);
     var total = 0;
    var list = str.split(', ');
      for(var i=0; i<list.length;i++){
       if( list[i] === 'call'){
        total += 2.75
      }
     else if( list[i] === 'sms'){
        total += 0.65
      }
        
     }
     return "R"+total.toFixed(2);
   }
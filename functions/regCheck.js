function regCheck(regNo, regEnd) {
    return regNo.endsWith(regEnd)
   
    var isGP = regCheck('DV 23 NB GP', 'GP'); 
     console.log(isGP);
   
    var isMP = regCheck('DV 23 LP GP', 'MP'); 
     console.log(isMP);
   
   var isBellville = isFrom('CY189-012', 'CY');
   console.log(isBellville);
   
   var isDurban = isFrom('CY189-012', 'ND');
   console.log(isDurban);
   }
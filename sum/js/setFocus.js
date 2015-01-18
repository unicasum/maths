function checkCalculation(){
  var errcnt = 0;
  var elem = document.getElementById('totalID').elements;
  var str = "";
  j = sum.toString().length - 1;

  for(var i = 0; i < elem.length; i++) {
    str += elem[i].value;

    var idx = Math.pow(10,(elem.length-1)-i);

    if ( chars[i] == elem[i].value ) {
      document.getElementById('outp_' + idx).innerHTML = '<i class="fa fa-smile-o" style="color:green"></i>';
    } else {
      document.getElementById('outp_' + idx).innerHTML = '<i class="fa fa-frown-o" style="color:red"></i>';
      errcnt ++;
      inpListIdx = Math.pow(10,j);
      myID = Math.pow(10,j);
      console.log ( 'myID: |' + myID + '|' );
      document.getElementById(myID).focus();
      document.getElementById(myID).select();
    }
    j --;
  } 

  return errcnt;
}

function setFocusNew(id){
  var newId = id || 0;

  // calculating new id for setting focus

  if (isDigit(document.getElementById(newId).value)) {
    newId += 0;
  } else {
    document.getElementById(newId).value = '';
  }

  if (sum.toString().length > id.length) {
    //setting focus
    document.getElementById(newId).focus();
  } else {
    doCheck = true;
  }

  if ((sum.toString().length <= id.length) || (doCheck)) {
    //check calculation

    if ( 0 == checkCalculation()) {
      document.getElementById('doReloadID').style.visibility="visible";
      document.getElementById('doReloadID').focus();
    }
  }
}

function checkCalculation(){
  console.log('result: |' + result + '|');
  console.log('result.length: |' + result.toString().length + '|');
  var errcnt = 0;
  var str = "";
  j = result.toString().length - 1;

  for(var i = 0; i < result.toString().length; i++) {
    inID = Math.pow(10,j);
    str += document.getElementById(inID).value;

    var idx = Math.pow(10,(result.toString().length-1)-i);

    console.log ( 'idx:  |' + idx + '|' );

    if ( chars[i] == document.getElementById(inID).value ) {
      document.getElementById('outp_' + idx).innerHTML = '<i class="smile icon" style="color:green"></i>';
      //document.getElementById('outp_' + idx).innerHTML = '<i style="color:green">+</i>';
    } else {
      document.getElementById('outp_' + idx).innerHTML = '<i class="frown icon" style="color:red"></i>';
      //document.getElementById('outp_' + idx).innerHTML = '<i style="color:red">-</i>';
      errcnt ++;
      inpListIdx = Math.pow(10,j);
      myID = Math.pow(10,j);
      inputId = myID;
      console.log ( 'myID: |' + myID + '|' );
      document.getElementById(myID).focus();
      document.getElementById(myID).select();
    }
    j --;
  }

  return errcnt;
}

function setFocus(id){
  var newId = id || 0;

  // calculating new id for setting focus

  if (isDigit(document.getElementById(newId).value)) {
    newId += 0;
  } else {
    document.getElementById(newId).value = '';
  }

  if (result.toString().length > id.length) {
    //setting focus
    document.getElementById(newId).focus();
  } else {
    doCheck = true;
  }

  if ((result.toString().length <= id.length) || (doCheck)) {
    //check calculation

    if ( 0 == checkCalculation()) {
      document.getElementById('doReloadID').style.visibility="visible";
      //document.getElementById('doReloadID').style.disabled="false";
      document.getElementById('doReloadID').disabled = "false";
      document.getElementById('doReloadID').focus();
    } else {
      newId=myID;
    }
  }
  inputId=newId;
}

function setInputValue(id) {
  document.getElementById(inputId).value = document.getElementById(id).value;
  setFocus(inputId);
}

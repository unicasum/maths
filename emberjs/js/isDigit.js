// Test for digits
function isDigit(aChar)
{
  var rc = false;
  myCharCode = aChar.charCodeAt(0);

  if((myCharCode > 47) && (myCharCode <  58)) {
    rc = true;
  }

   return rc;
}

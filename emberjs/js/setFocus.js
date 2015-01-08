function setFocus(a) {
  if (( a.toString().length < sum.toString().length ) && ( false == doCheck )) {
    console.log('this: |' + this.form + '|');
    switch ( a ) {
      case 1: {
        document.total.inp_10.focus();
        break;
      }

      case 10: {
        document.total.inp_100.focus();
        break;
      }

      case 100: {
        document.total.inp_1000.focus();
        break;
      }

      case 1000: {
        document.total.inp_10000.focus();
        break;
      }

      case 10000: {
        document.total.inp_100000.focus();
        break;
      }

      case 100000: {
        document.total.inp_1000000.focus();
        break;
      }

      case 1000000: {
        document.total.inp_10000000.focus();
        break;
      }

      case 10000000: {
        document.total.inp_100000000.focus();
        break;
      }

      case 100000000: {
        document.total.inp_1000000000.focus();
        break;
      }

      case 1000000000: {
        document.total.inp_100000000000.focus();
        break;
      }

      default: {
        document.total.inp_1.focus();
        break;
      }
    }
  } else {
     var elem = document.getElementById('totalID').elements;
     var str = "";
     var errcnt = 0;

     doCheck = true;

     for(var i = 0; i < elem.length; i++) {
       str += elem[i].value;

       var idx = Math.pow(10,(elem.length-1)-i);
       if ( chars[i] == elem[i].value ) {
         document.getElementById('outp_' + idx).innerHTML = '<i class="fa fa-smile-o" style="color:green"></i>';
       } else {
         document.getElementById('outp_' + idx).innerHTML = '<i class="fa fa-frown-o" style="color:red"></i>';
         errcnt ++;
       }
     } 

     if ( 0 == errcnt ) {
       document.getElementById('doReloadID').style.visibility="visible";
     }

     console.log('input: |' + str + '|');
     console.log('sum:   |' + sum + '|');
   }
 }

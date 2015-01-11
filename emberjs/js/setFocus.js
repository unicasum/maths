function setFocus(a) {
  switch ( a ) {
		case 1: {
			if ( isDigit(document.total.inp_1.value) ) {
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_10.focus();
				}
			} else {
				document.total.inp_1.value = null;
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_1.focus();
				}
			}
			break;
		}

		case 10: {
			if ( isDigit(document.total.inp_10.value) ) {
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_100.focus();
				}
			} else {
				document.total.inp_10.value = null;
				if ( a.toString().length < sum.toString().length ) {
						document.total.inp_10.focus();
				}
			}
			break;
		}

		case 100: {
			if ( isDigit(document.total.inp_100.value) ) {
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_1000.focus();
				}
			} else {
				document.total.inp_100.value = null;
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_100.focus();
				}
			}
			break;
		}

		case 1000: {
			if ( isDigit(document.total.inp_1000.value) ) {
				if ( a.toString().length < sum.toString().length ) {
				document.total.inp_10000.focus();
				}
			} else {
				document.total.inp_1000.value = null;
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_1000.focus();
				}
			}
			break;
		}

		case 10000: {
			if ( isDigit(document.total.inp_10000.value) ) {
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_100000.focus();
				}
			} else {
				document.total.inp_10000.value = null;
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_10000.focus();
				}
			}
			break;
		}

		case 100000: {
			if ( isDigit(document.total.inp_100000.value) ) {
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_1000000.focus();
				}
			} else {
				document.total.inp_100000.value = null;
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_100000.focus();
				}
			}
			break;
		}

		case 1000000: {
			if ( isDigit(document.total.inp_1000000.value) ) {
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_10000000.focus();
				}
			} else {
				document.total.inp_1000000.value = null;
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_1000000.focus();
				}
			}
			break;
		}

		case 10000000: {
			if ( isDigit(document.total.inp_10000000.value) ) {
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_100000000.focus();
				}
			} else {
				document.total.inp_10000000.value = null;
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_10000000.focus();
				}
			}
			break;
		}

		case 100000000: {
			if ( isDigit(document.total.inp_100000000.value) ) {
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_1000000000.focus();
				}
			} else {
				document.total.inp_100000000.value = null;
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_100000000.focus();
				}
			}
			break;
		}

		case 1000000000: {
			if ( isDigit(document.total.inp_1000000000.value) ) {
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_10000000000.focus();
				}
			} else {
				document.total.inp_1000000000.value = null;
				if ( a.toString().length < sum.toString().length ) {
					document.total.inp_1000000000.focus();
				}
			}
			break;
		}

		default: {
			document.total.inp_1.focus();
			break;
		}
	}

  if (( a.toString().length == sum.toString().length ) || ( errcnt != 0 )) {
    var elem = document.getElementById('totalID').elements;
    var str = "";
    errcnt = 0;

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
      document.getElementById('doReloadID').focus();
    }
  }
}

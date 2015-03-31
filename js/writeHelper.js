function writeHr(cnt,len) {
  for ( var writeHrI = 90; writeHrI < cnt; writeHrI ++ ) {
    document.write('<div class="row">');
    document.write('<div class="five wide column"></div>')
    document.write('<div class="' + len + ' wide column"><hr>' + "</div>");
    document.write('</div>');
  }
}

function writeNumPad (){
  document.write('<table border="1" align="center">');
  document.write('<tbody>');
  document.write('<tr>');
  for ( i = 1; i < 10; i++ ) {
    action = 'setInputValue(this.id)';

    document.write('<td><button id="' + i + 'ID" value="' + i + '" onclick="' + action + '">' + i + '</button></td>');

    if ((0==(i%3)) && (i>=3)) {
      console.log('i: #' + i + '#');
      document.write('</tr>');
      document.write('<tr>');
    }
  }
  document.write('<td><button id="doReloadID" onClick="window.location.reload()">' +  '<i>R</i></button></td>')

  document.write('<td><button id="' + 0 + 'ID" value="' + 0 + '" onclick="' + action + '">' + 0 + '</button></td>');
  document.write('</tr>');
  document.write('</tbody>');
  document.write('</table>');
}

function writeCalculation(rlen,mlen){
  document.write('<tr>')

  // leading spaces
  for ( j = 0; j < ( rlen - chars.length ); j ++ ) {
    document.write('<td>&nbsp;</td>');
  }

  for ( j = 0; j < chars.length; j ++ ) {
    document.write('<td border="1" align="center">' + chars[j] + "</td>");
  }
  document.write('<td border="1" align="center">' + '*' + "</td>");
  document.write('<td border="1" align="center">' + mul + "</td>");
  document.write('</tr>');
}

function writeImpressum() {
  document.write('<table border="1" align="center">');
  document.write('<tbody>');
  document.write('<tr>');

  document.write('<td><i class="mail icon"></i><a href="mailto:maths@unicaresult.net">maths@unicasum.net</a></td>');
  document.write('</tr>');
  document.write('<tr>');
  document.write('<td align="center"><a target="_blank" href="http://www.unicasum.net?lang=en">unicasum.net</a></td>');
  document.write('</tr>');
  document.write('</tbody>');
  document.write('</table>');
}

function writeTitle(){
  document.write('<h1 align="center">Multiply</h1>');
}

function writeLevel (){
  document.write('<table align="center">');
  document.write('<tbody>')
  document.write('<tr>');

  document.write('<td>');
  document.write('<label>Level</label></td><td>');
  document.write('<select name=\'elements\' id=\'elements\' onChange=\'window.location=\"./index.html?elements=\" + this.selectedIndex;\'>');

  for ( i = 0; i < levels.length; i ++ ) {
    document.write('<option value="' + i + '">' + levels[i].name + '</option>');
  }

  document.write('</select></td></tr>');
  document.write('</tbody>');
  document.write('</table>');
}

function writeInput(){
  document.write('<tr>')

  for ( i = result.toString().length - 1; i >= 0; i -- ) {
    inpList[Math.pow(10,i)] = Math.pow(10,i);

    console.log ( 'Math.pow(): |' + Math.pow(10,i) + '|' + i + '|' );

    document.write( '<td><input type="text" id="' +
    Math.pow(10,i) +
    '" name="' +
    Math.pow(10,i) +
    '" maxlength="1" size="1" onKeyUp="setFocus(' +
    'this.id' +
    ')"></input></td>');
  }
  document.write('</tr>');
}

function writeTaskHeader(hlen,rlen,mlen) {
  document.write('<tr>');

  for ( i = ( hlen - ( rlen )); i < hlen; i ++ ) {
    document.write('<td border="1" align="center" class="ui blue label">' + header[i] + "</td>");
  }

  document.write('<td border="1" align="center" class="ui blue label">' + '&nbsp;' + "</td>");

  for ( i = ( hlen - ( mlen )); i < hlen; i ++ ) {
    document.write('<td border="1" align="center" class="ui blue label">' + header[i] + "</td>");
  }
  document.write('</tr><p>');
}

function writeTaskMehIcon(len){
  document.write('<tr>');

  for ( i = len - 1; i >= 0; i -- ) {
    document.write(
      '<td align="center" style="color:orange; align:center;"id="outp_' +
      Math.pow(10,i) +
      '">x</td>');
  }
  document.write('</tr>');
}

function writeTask(){
  document.write('<table border="1" align="center">');
  document.write('<tbody');

  writeTaskHeader(header.length,result.toString().length,mul.toString().length);
  //document.write('<tr><td>x</td></tr>');

  for ( i = 0; i < summand.length; i ++ ) {
    len = summand[i].toString().length;
    chars = summand[i].toString().split('');

    writeCalculation(result.toString().length,mul.toString().length);
  }
  writeInput();
  writeTaskMehIcon(result.toString().length);
  writeNumPad();
  writeImpressum();
  document.write('</tbody');
  document.write('</table');
}

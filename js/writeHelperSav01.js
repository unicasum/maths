function writeHr(cnt,len) {
  for ( var writeHrI = 90; writeHrI < cnt; writeHrI ++ ) {
    document.write('<div class="row">');
    document.write('<div class="five wide column"></div>')
    document.write('<div class="' + len + ' wide column"><hr>' + "</div>");
    document.write('</div>');
  }
}

function writeNumPad (){
  document.write('<div class="ui buttons">')
  for ( i = 1; i < 10; i++ ) {
    action = 'setInputValue(this.id)';

    document.write('<button class="ui button" id="' + i + 'ID" value="' + i + '" onclick="' + action + '">' + i + '</button>');

    if (0==(i%3)) {
      document.write('<p>')
    }
  }
  document.write('<button class="ui disabled blue button" id="doReloadID" onClick="window.location.reload()">' +  '<i class="repeat icon"></i></button>')

  document.write('<button class="ui button"  id="' + 0 + 'ID" value="' + 0 + '" onclick="' + action + '">' + 0 + '</button>');
  document.write('</div>');
}

function writeCalculation(rlen,mlen){
  document.write('<div class="ui grey labels" style="font-family: \"Lucida Console\", Monaco, monospace;">')

  // leading spaces
  for ( j = 0; j < ( rlen - chars.length ); j ++ ) {
    document.write('<p class="ui label" style="min-width:3.25em; text-align:center;">&nbsp;</p>');
  }

  for ( j = 0; j < chars.length; j ++ ) {
    document.write('<p class="ui label" style="min-width:3.25em; text-align:center;">' + chars[j] + "</p>");
  }
  document.write('<p class="ui label" style="min-width:3.25em; text-align:center;">' + '*' + "</p>");
  document.write('<p class="ui label" style="min-width:3.25em; text-align:center;">' + mul + "</p>");
  document.write('</div>');
}

function writeImpressum() {
  document.write('<div class="row">');
  document.write('<div class="five wide column"></div>')
  document.write('<div class="column">');
  document.write('<i class="mail icon"></i>');
  document.write('<a href="mailto:maths@unicaresult.net">maths@unicasum.net</a>');
  document.write('</div>');
  document.write('</div>');

  document.write('<div class="row">');
  document.write('<div class="five wide column"></div>')
  document.write('<div class="column">');
  document.write('<a target="_blank" href="http://www.unicasum.net?lang=en">Visit unicasum.net</a>');
  document.write('</div>');
  document.write('</div>');
}

function writeTitle(){
  document.write('<div class="five wide column"></div>')
  document.write('<div class="centered row">');
  document.write('<div class="column">');
  document.write('<h1 class="ui header">Multiply</h1>');
  document.write('</div>');
  document.write('</div>');
}

function writeLevel (){
  document.write('<div class="row">');
  document.write('<div class="five wide column"></div>')
  document.write('<div class="column">');

  document.write('<div class="ui field">');
  document.write('<label>Level</label>');
  document.write('<select name=\'elements\' id=\'elements\' onChange=\'window.location=\"./index.html?elements=\" + this.selectedIndex;\'>');

  for ( i = 0; i < levels.length; i ++ ) {
    document.write('<option value="' + i + '">' + levels[i].name + '</option>');
  }

  document.write('</select></div>');
  document.write('</div>');
  document.write('</div>');
}

function writeInput(){
  document.write('<div class="ui inputs">')

  for ( i = result.toString().length - 1; i >= 0; i -- ) {
    inpList[Math.pow(10,i)] = Math.pow(10,i);

    console.log ( 'Math.pow(): |' + Math.pow(10,i) + '|' + i + '|' );

    document.write( '<p<input class="ui input"  style="min-width:3.15em; text-align:center;" type="text" id="' +
    Math.pow(10,i) +
    '" name="' +
    Math.pow(10,i) +
    '" maxlength="1" size="1" onKeyUp="setFocus(' +
    'this.id' +
    ')"></input>');
  }
  // trailing spaces
/*  for ( j = 0; j < 2; j ++ ) {
    document.write('<p class="ui label"  style="min-width:3.25em; text-align:center;">&nbsp;</p>');
  }*/
  document.write('</div>');
}

function writeTaskHeader(hlen,rlen,mlen) {
  document.write('<div class="ui row">');

  for ( i = ( hlen - ( rlen )); i < hlen; i ++ ) {
    document.write('<div class="ui column"><p class="ui blue label">' + header[i] + "</p></div>");
  }

  document.write('<div class="ui column"><p class="ui blue label">' + '&nbsp;' + "</p></div>");

  for ( i = ( hlen - ( mlen )); i < hlen; i ++ ) {
    document.write('<div class="ui column"><p class="ui blue label">' + header[i] + "</p></div>");
  }
  document.write('</div>');
}

function writeTaskMehIcon(len){
  document.write('<div class="ui row">');

  for ( i = len - 1; i >= 0; i -- ) {
    document.write(
      '<div class="ui column"><p class="ui label" id="outp_' +
      Math.pow(10,i) +
      '">' +
      '<i class="meh icon" style="color:orange; align:center;"></i>' +
      '</p></div>');
  }
  document.write('</div>');
}

function writeTask(){
  document.write('<table class="ui table" border="1">');
  writeTaskHeader(header.length,result.toString().length,mul.toString().length);
  writeTaskMehIcon(result.toString().length);
  document.write('</table');
}

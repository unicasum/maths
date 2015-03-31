function writeNumPad (){

  document.write('<div class="ui page centered grid">');
  for ( i = 0; i < 10; i++ ) {
    action = 'setInputValue(this.id)';

    document.write('<div class="one wide column"><button class="ui button" ' +
      'style="font: 24px \\"Helvetica Neue\\", Helvetica, Arial, sans-serif, bold;text-align:centered;" type="button" id="button_' +
      i + 'ID" value="' + i + '" onclick="' + action + '">' + i + '</button></div>');
    if (4==i) {
      document.write('</div><div class="ui page centered grid">');
    }
  }

  document.write('</div>');
}

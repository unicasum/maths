function randomBetween(a,b) {
  a = a || 0;
  b = b || 10000;

  if ( a > b ) {
    c = b;
    b = a;
    a = c;
  }

  r=Math.floor(Math.random()*Math.pow(10,b.toString().length));
  return ((r%((b+1)-a))+a);
}

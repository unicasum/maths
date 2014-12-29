function randomBetween(a,b) {
a = a || 0;
b = b || 10000;
r=Math.floor(Math.random()*Math.pow(10,b.toString().length));
//print("a/b/r" + a + " " + b + " " + r );
return ((r%((b+1)-a))+a);
}

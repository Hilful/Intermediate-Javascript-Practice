var x = prompt("What is your name ?");
var y = prompt("What is your lovers name ?");
var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;
if (n > 70) {
  alert(
    x +
      " and your lover " +
      y +
      " are in " +
      n +
      " percent love" +
      " You two love each other like crazy "
  );
}
if (n > 30 && n <= 70) {
  alert("Your love score is " + n + "% ");
}
if (n <= 30) {
  alert("Your love score is " + n + " % so please break up immediately");
} else {
  alert(x + " and your lover " + y + " are in " + n + " percent love");
}

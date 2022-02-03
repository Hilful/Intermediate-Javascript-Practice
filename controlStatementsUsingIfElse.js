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
} else {
  alert(x + " and your lover " + y + " are in " + n + " percent love");
}

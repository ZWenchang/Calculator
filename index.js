
var gui = document.getElementById("gui")
var add = document.getElementById("jia")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")
var zero = document.getElementById("zero")
var jia = document.getElementById('jia')
var jie = document.getElementById('jie')
var chen = document.getElementById('chen')
var equal = document.getElementById('equal')
var chu = document.getElementById('chu')

function addStr(e) {
    return function () {
    var input = document.getElementById('now');
        input.value = input.value + e;
    };
}   

function clear() {
    var input = document.getElementById("now");
    input.value = "";
};


equal.onclick = function() {
    var input = document.getElementById("now");
    var val = eval(input.value);
    input.value = val;

}
gui.onclick = clear;
one.onclick = addStr(1);
two.onclick = addStr(2);
three.onclick = addStr(3);
four.onclick = addStr(4);
five.onclick = addStr(5);
six.onclick = addStr(6);
seven.onclick = addStr(7);
eight.onclick = addStr(8);
nine.onclick = addStr(9);
zero.onclick = addStr(0);
jia.onclick = addStr('+');
jie.onclick = addStr('-');
chu.onclick = addStr('/');
chen.onclick = addStr('*');





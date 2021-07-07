// function getNum(num) {

//     var rsl = document.getElementById("rsl");
// rsl.value += num;
// }

// function clearRsl(){
//     var rsl = document.getElementById("rsl");
//     rsl.value = "";
// }

// function showresult(){
//     var rsl = document.getElementById("rsl");
//     rsl.value = eval(rsl.value);
// }

function calculator(){
    var screen = document.getElementById("screen");
    var resultValue = eval(screen.value);
    console.log(resultValue)
}
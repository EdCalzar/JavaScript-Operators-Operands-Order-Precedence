let grade1 = 90;
let grade2 = 85;
let grade3 = 78;
let grade4 = 99;
let grade5 = 89;

let grade6 = 95;
let grade7 = 75;
let grade8 = 88;
let grade9 = 91;
let grade10 = 89;

let grade11 = 99;
let grade12 = 97;
let grade13 = 93;
let grade14 = 95;
let grade15 = 90;

let average = 5;

let total1 = (grade1 + grade2 + grade3 + grade4 + grade5) / average;
let total2 = (grade6 + grade7 + grade8 + grade9 + grade10) / average;
let total3 = (grade11 + grade12 + grade13 + grade14 + grade15) / average;

document.getElementById("title").innerHTML = "GRADE AVERAGE";

document.getElementById("name1").innerHTML = "Emily Johnson";
document.getElementById("name2").innerHTML = "David Martinez";
document.getElementById("name3").innerHTML = "Sarah Thompson";

document.getElementById("subject1").innerHTML = "Science";
document.getElementById("subject2").innerHTML = "Mathematics";
document.getElementById("subject3").innerHTML = "Filipino";
document.getElementById("subject4").innerHTML = "Physical Education";
document.getElementById("subject5").innerHTML = "Computer";

document.getElementById("grade1").innerHTML = grade1;
document.getElementById("grade2").innerHTML = grade2;
document.getElementById("grade3").innerHTML = grade3;
document.getElementById("grade4").innerHTML = grade4;
document.getElementById("grade5").innerHTML = grade5;

document.getElementById("grade6").innerHTML = grade6;
document.getElementById("grade7").innerHTML = grade7;
document.getElementById("grade8").innerHTML = grade8;
document.getElementById("grade9").innerHTML = grade9;
document.getElementById("grade10").innerHTML = grade10;

document.getElementById("grade11").innerHTML = grade11;
document.getElementById("grade12").innerHTML = grade12;
document.getElementById("grade13").innerHTML = grade13;
document.getElementById("grade14").innerHTML = grade14;
document.getElementById("grade15").innerHTML = grade15;

function showAverages() {
    document.getElementById('average1').innerHTML = total1;
    document.getElementById('average2').innerHTML = total2;
    document.getElementById('average3').innerHTML = total3;
}
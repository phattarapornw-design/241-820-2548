///1
/*
array
*/
/*
let a =10;
let b =20;
let c =30;
console.log("a:",a,"b:",b,"c:",c);
let ages = [10,20,30]; //array 3 items
console.log("ages:",ages);
console.log("ages[1]:",ages[1]);
//แทนที่ข้อมูลใน array

ages = [15,25];
console.log("ages list:",ages);
//ต่อ array
ages.push(35);
console.log("ages after push:",ages);
//ลบข้อมูลใน array
ages.pop();
console.log("ages after pop:",ages);
*/
/*
let ages = [25,30,35,40,45];
 console.log("ages:",ages);

 let fruits = ["มะม่วง","ส้ม","กล้วย"];
    console.log("fruits:",fruits);
    fruits.push("แตงโม");
    console.log("fruits after push:",fruits);
    console.log("first fruit:",fruits.length);

    for(let i = 0; i <= fruits.length; i++){
        console.log("fruits["+i+"]:" , fruits[i]);
    }
*/

///////2
/*
object
*/
/*
let student = [{
    age:30,
    name:"SEE",
    grade:"A"
},{
    age:25,
    name:"JOE",
    grade:"B"

}]
for(let i = 0; i < student.length; i++){
    console.log("student["+i+"].name:",student[i].name);
    console.log("student["+i+"].age:",student[i].age);
    console.log("student["+i+"].grade:",student[i].grade);
}

student.push({
    age:28,
    name:"ANN",
    grade:"A"
})
console.log("Added new student:",student[student.length -1]);
student.pop();
console.log("removed last student.Current stidents:",student.length);
*/

//////3
/*
function 
*/
/*
let score1 = 10
let score2 = 80

function calculation_grade(score){
    if(score>=80){
    grade = "A"
}else if(score>=70){
    grade = "B"
}else if(score>=60){
    grade = "C"
}else if(score>=50){
    grade = "D"
}else{
    grade = "F"
}
return grade;
}
//เรียกใช้ฟังก์ชัน calculation_grade เพื่อหาเกรดจากคะแนนที่กำหนด
let grade1 = calculation_grade(score1);
let grade2 = calculation_grade(score2);
console.log("score1:"+ score1 + " grade:" + grade1);
console.log("score2:"+ score2 + " grade:" + grade2);
*/

////4
/*
array
*/
/*
let scores = [20, 40, 60, 80, 100];

for (let i = 0; i < scores.length; i++) {
    console.log("Score " + (i + 1) + ": " + scores[i]);
}

scores = scores.map((s)=> {
    return s - 10;
});

scores.forEach((s) => {
    console.log("score:",s);
})
//map, filter

let scores = [20, 40, 60, 80, 100];
let newScores = [];

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
    //if (scores[i] >= 60) {
       // newScores.push(scores[i]);
  //  }
}
let newScores = scores.filter(function(score) {
    return score >= 70;

});

newScores.forEach((ns) => {
    console.log("new score:",ns);
})
*/

////5
/*
object function
*/
let student = [
{name:"SEE",age:30,grade:"A"},
{name:"JOE",age:25,grade:"B"},
{name:"ANN",age:28,grade:"A"}
]
  console.log("student",student[0]);

  let foundStudent = student.find((s) => {
    return s.name === "JOE";
  })
  let duubbleacoreStudent = student.map((s) => {
    return s.grade === "A";
  })
  let highGradeStudents = student.filter((s) => {
    return s.grade === "A";
  })
  console.log("student:",student);
    console.log("Dubble Score Students",duubbleacoreStudent);
    console.log("High Grade Students",highGradeStudents);
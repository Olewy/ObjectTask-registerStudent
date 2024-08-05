let score = {};

let student = {
  firstName: "Max",
  lastName: "Mustermann",
  age: 18,
  class: 1,
  score: { english: 0, german: 0, math: 0 },
};

function registerStudent() {
  let firstName = document.getElementById("addFirstName").value;
  student.firstName = firstName;

  let lastName = document.getElementById("addLastName").value;
  student.lastName = lastName;

  let age = Number(document.getElementById("addAge").value);
  student.age = age;

  let schoolClass = document.getElementById("addClass").value;
  student.class = schoolClass;

  let englishGrade = document.getElementById("addEnglishGrade").value;
  student.score.english = englishGrade;

  let germanGrade = document.getElementById("addGermanGrade").value;
  student.score.german = germanGrade;

  let mathGrade = document.getElementById("addMathGrade").value;
  student.score.math = mathGrade;

  console.log(student);
  addMessage();
  resetStudentPicture();
}

function showStudentData() {
  console.log(student);
  document.getElementById(
    "studentData"
  ).innerHTML = `Name: ${student.firstName} <br><br>Nachname: ${student.lastName} <br><br>Age: ${student.age} <br><br>Schoolclass: ${student.class} <br><br>English grade: ${student.score.english}  <br><br>german grade: ${student.score.german} <br><br>Math grade: ${student.score.math}`;
  showStudentPicture();
}

function addMessage() {
  if (student.firstName == "") {
    document.getElementById("studentData").innerHTML = "";
    resetStudentPicture();
  } else {
    document.getElementById("studentData").innerHTML =
      "Congrats - New student has been added to the database!";
    resetStudentPicture();
  }
}

function showStudentPicture() {
  document.getElementById(
    "studentImage"
  ).innerHTML = `<img src="img/schüler.jpg" alt="">`;
}

function resetStudentPicture() {
  document.getElementById("studentImage").innerHTML = `<img src="" alt="">`;
}

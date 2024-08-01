import { isVariableDeclaration } from "typescript";

// Making class for School along with Constructer function:
class School {
  name: string;
  students: Student[] = [];
  teachers: Teacher[]=[];



// This code written down below will help us to push information of our students
// and teachers in to the arrays of above mentioned School Class :
  addStudent(stdObj: Student) {
    this.students.push(stdObj);
  }
  addTeacher(teObj: Teacher) {
    this.teachers.push(teObj);
  }
  constructor(name: string) {
    this.name = name;
  }
}


// Making class for School along with Constructer function:
class Student {
  name: string;
  age: number;
  schoolName: string;

  constructor(name: string, age: number, schoolName: string) {
    this.name = name;
    this.age = age;
    this.schoolName = schoolName;
  }
}

// U Guys might be wondering about that in this class there is not any code or program written 
// we are using extend property to copy all the attributes defined in class of Student.

class Teacher extends Student {}


// This is VariableDeclaration for Schools:

let school1 = new School("Happy Palace");
let school2 = new School("Beconhouse");
let school3 = new School("Credo");

// This is VariableDeclaration for Students:

let s1 = new Student("Ashir", 14, school1.name);
let s2 = new Student("Sara", 11, school2.name);
let s3 = new Student("kashaf", 12, school3.name);

// This  is VariableDeclaration for Teachers:

let t1 = new Teacher("Adil aziz", 34, school1.name);
let t2 = new Teacher("Muneer niazi", 31, school2.name);
let t3 = new Teacher("Eaun elia", 42, school3.name);

// Addding Students inforamtion to School they are From:
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);

// Addding Teachers inforamtion to School they are From:
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);



// Using console to print All the information we have collected above:


console.log(school1);
console.log(school2);
console.log(school3);

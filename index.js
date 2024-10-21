"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var part1_1 = require("./part1");
var part2_1 = require("./part2");
var studentUtils_1 = require("./studentUtils");
var students = [
    new part1_1.Student("Alice", 20),
    new part1_1.Student("Bob", 22),
    new part2_1.GraduateStudent("Charlie", 25, "Artificial Intelligence")
];
students[0].addGrade(85);
students[0].addGrade(90);
students[1].addGrade(65);
students[1].addGrade(70);
students[2].addGrade(75);
students[2].addGrade(80);
var studentsAbove70 = students.filter(function (student) { return student.getAverageGrade() > 70; }); //part7
console.log("Students with average grade above 70:", studentsAbove70);
var studentNames = students.map(function (student) { return student.name; }); //part7
console.log("Student Names:", studentNames);
var totalGradesCount = students.reduce(function (total, student) { return total + student.grades.length; }, 0); //part7
console.log("Total number of grades across all students:", totalGradesCount);
var medianGrade = (0, studentUtils_1.calculateMedianGrade)(students[0].grades);
console.log("Median Grade for ".concat(students[0].name, ":"), medianGrade);
console.log("Total Students:", part1_1.Student.totalStudents()); //bonus

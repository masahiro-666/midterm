import { Student } from './part1';
import { GraduateStudent } from './part2';
import { calculateMedianGrade } from './studentUtils';

const students = [
    new Student("Alice", 20),
    new Student("Bob", 22),
    new GraduateStudent("Charlie", 25, "Artificial Intelligence")
];

students[0].addGrade(85);
students[0].addGrade(90);
students[1].addGrade(65);
students[1].addGrade(70);
students[2].addGrade(75);
students[2].addGrade(80);

const studentsAbove70 = students.filter(student => student.getAverageGrade() > 70); //part7
console.log("Students with average grade above 70:", studentsAbove70);

const studentNames = students.map(student => student.name); //part7
console.log("Student Names:", studentNames);

const totalGradesCount = students.reduce((total, student) => total + student.grades.length, 0); //part7
console.log("Total number of grades across all students:", totalGradesCount);

const medianGrade = calculateMedianGrade(students[0].grades);
console.log(`Median Grade for ${students[0].name}:`, medianGrade);

console.log("Total Students:", Student.totalStudents()); //bonus

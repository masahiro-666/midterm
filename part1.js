"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
        this.grades = [];
        Student.studentCount++;
    }
    Student.prototype.addGrade = function (grade) {
        this.grades.push(grade);
    };
    Student.prototype.getAverageGrade = function () {
        var total = this.grades.reduce(function (acc, grade) { return acc + grade; }, 0);
        return this.grades.length ? total / this.grades.length : 0;
    };
    Student.totalStudents = function () {
        return Student.studentCount;
    };
    Student.studentCount = 0;
    return Student;
}());
exports.Student = Student;

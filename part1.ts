export class Student {
    private static studentCount: number = 0;

    name: string;
    age: number;
    grades: number[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.grades = [];
        Student.studentCount++;
    }

    addGrade(grade: number): void {
        this.grades.push(grade);
    }

    getAverageGrade(): number {
        const total = this.grades.reduce((acc, grade) => acc + grade, 0);
        return this.grades.length ? total / this.grades.length : 0;
    }

    static totalStudents(): number {
        return Student.studentCount;
    }
}

function createGradeMultiplier(multiplier: number) {
    return (grade: number) => grade * multiplier;
}

const doubleGrade = createGradeMultiplier(2);

function applyGradeMultiplierToStudent(student: Student, multiplierFunction: (grade: number) => number): void {
    student.grades = student.grades.map(multiplierFunction);
}

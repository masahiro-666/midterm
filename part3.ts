interface Teacher {
    name: string;
    subject: string;
    students: Student[];
}

function getTeacherInfo(teacher: Teacher): void {
    console.log(`Teacher: ${teacher.name}`);
    console.log(`Subject: ${teacher.subject}`);
    console.log(`Number of students: ${teacher.students.length}`);
}

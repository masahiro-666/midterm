function parseStudentData(jsonData: string): { name: string; age: number; grades: number[] } | string {
    try {
        const studentData = JSON.parse(jsonData);
        if (studentData.name && studentData.age && studentData.grades) {
            return studentData;
        } else {
            throw new Error("Incomplete student data.");
        }
    } catch (error) {
        return `Error parsing student data: ${error.message}`;
    }
}

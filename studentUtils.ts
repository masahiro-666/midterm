export function calculateMedianGrade(grades: number[]): number {
    if (grades.length === 0) return 0;

    const sortedGrades = [...grades].sort((a, b) => a - b);
    const mid = Math.floor(sortedGrades.length / 2);

    if (sortedGrades.length % 2 === 0) {
        return (sortedGrades[mid - 1] + sortedGrades[mid]) / 2;
    } else {
        return sortedGrades[mid];
    }
}

import { Student } from './part1';

export class GraduateStudent extends Student {
    thesisTopic: string;

    constructor(name: string, age: number, thesisTopic: string) {
        super(name, age);
        this.thesisTopic = thesisTopic;
    }

    getAverageGrade(): number {
        let averageGrade = super.getAverageGrade();
        if (this.thesisTopic === "Artificial Intelligence") {
            averageGrade += 5;
        }
        return averageGrade;
    }
}

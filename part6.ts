async function fetchStudentData(): Promise<{ name: string; grades: number[] }> {
    try {
        const response = await new Promise<{ name: string; grades: number[] }>((resolve, reject) => {
            setTimeout(() => {
                const success = Math.random() > 0.5;
                if (success) {
                    resolve({ name: "Alice", grades: [85, 90, 78] });
                } else {
                    reject("Failed to fetch student data.");
                }
            }, 1000);
        });

        console.log("Student data fetched successfully:", response);
        return response;

    } catch (error) {
        console.error("Error fetching student data:", error);
        throw error;
    }
}

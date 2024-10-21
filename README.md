# Techniques Used

1. Object-Oriented Programming (OOP)
Classes & Inheritance:
I’ve got a Student class that holds things like name, age, and grades. Plus, there’s a GraduateStudent class that extends it and adds a thesisTopic property. If the thesis topic is about AI, they get a cool bonus on their grades!

2. Interfaces
Teacher Interface:
There’s a Teacher interface that lays down the rules for what a teacher should have, like their name, subject, and a list of students. This keeps things organized.

3. Generics
Generic Database Class:
The Database<T> class is super flexible! It can handle any type of data (like Student or Teacher), thanks to generics.

4. Asynchronous Programming
Fetching Data:
I have an async function called fetchStudentData that simulates getting student info from an external API. It uses async/await to handle all the waiting around.

5. Error Handling
Parsing JSON:
The parseStudentData function handles any JSON parsing errors with try/catch blocks. No more worrying about bad data crashing the app!

6. Array Methods
Data Magic:
I use some neat array methods like filter, map, and reduce to process student data. It’s efficient and keeps the code clean!

7. Modules and Imports/Exports
Organized Code:
The project is split into separate files, making it easier to read and maintain. Plus, it helps keep everything modular!


# How I Solved Problems

1. Understanding Requirements:
I kicked things off by figuring out what the Student Management System needed to do and what data I’d be working with.

2. Designing the System:
The system was built using OOP principles to keep everything neat and tidy. Classes hold data and behavior, while interfaces make sure everything is on point.

3. Implementing Features:
I tackled features one by one, starting with basic stuff like adding grades and calculating averages. Then I added more complex stuff like fetching data and error handling.

4. Testing Everything:
Each part was tested on its own to make sure it worked right, and then I checked to see how everything worked together. No broken pieces allowed!

# Kittikan Khonaban 1650704271 CS319 Sec 427A No.40
P.S. JS files are used for run test.

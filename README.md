# School Management System

This TypeScript project demonstrates a simple school management system, where we manage information about schools, students, and teachers. The system allows you to add students and teachers to different schools and print out the details.

## Features

- Create schools and manage their information.
- Add students and teachers to schools.
- Print the details of all schools, students, and teachers.

## Code Explanation

### Classes

- **School**
  - Manages a list of students and teachers.
  - Methods:
    - `addStudent(stdObj: Student)`: Adds a student to the school.
    - `addTeacher(teObj: Teacher)`: Adds a teacher to the school.
  - Constructor:
    - `constructor(name: string)`: Initializes the school with a name.

- **Student**
  - Represents a student with a name, age, and school name.
  - Constructor:
    - `constructor(name: string, age: number, schoolName: string)`: Initializes the student with a name, age, and school name.

- **Teacher** (Extends Student)
  - Represents a teacher with the same properties as a student.

### Usage

1. **Create Schools**

   ```typescript
   let school1 = new School("Happy Palace");
   let school2 = new School("Beconhouse");
   let school3 = new School("Credo");
   ```

2. **Create Students**

   ```typescript
   let s1 = new Student("Ashir", 14, school1.name);
   let s2 = new Student("Sara", 11, school2.name);
   let s3 = new Student("Kashaf", 12, school3.name);
   ```

3. **Create Teachers**

   ```typescript
   let t1 = new Teacher("Adil Aziz", 34, school1.name);
   let t2 = new Teacher("Muneer Niazi", 31, school2.name);
   let t3 = new Teacher("Eaun Elia", 42, school3.name);
   ```

4. **Add Students and Teachers to Schools**

   ```typescript
   school1.addStudent(s1);
   school2.addStudent(s2);
   school3.addStudent(s3);

   school1.addTeacher(t1);
   school2.addTeacher(t2);
   school3.addTeacher(t3);
   ```

5. **Print School Details**

   ```typescript
   console.log(school1);
   console.log(school2);
   console.log(school3);
   ```

## Example Output

```plaintext
School {
  name: 'Happy Palace',
  students: [ Student { name: 'Ashir', age: 14, schoolName: 'Happy Palace' } ],
  teachers: [ Teacher { name: 'Adil Aziz', age: 34, schoolName: 'Happy Palace' } ]
}
School {
  name: 'Beconhouse',
  students: [ Student { name: 'Sara', age: 11, schoolName: 'Beconhouse' } ],
  teachers: [ Teacher { name: 'Muneer Niazi', age: 31, schoolName: 'Beconhouse' } ]
}
School {
  name: 'Credo',
  students: [ Student { name: 'Kashaf', age: 12, schoolName: 'Credo' } ],
  teachers: [ Teacher { name: 'Eaun Elia', age: 42, schoolName: 'Credo' } ]
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---




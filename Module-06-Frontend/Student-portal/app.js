// ============================================
// Cognizant Digital Nurture 5.0
// Hands-On 4
// app.js
// ============================================

import { courses } from "./data.js";

// ------------------------------
// Destructuring
// ------------------------------

console.log("Course Details");

courses.forEach(course => {

    const { name, credits } = course;

    console.log(`${name} - ${credits} Credits`);

});

// ------------------------------
// Array.map()
// ------------------------------

const formattedCourses = courses.map(course =>
    `${course.code} - ${course.name} (${course.credits} Credits)`
);

console.log("Formatted Courses");

console.log(formattedCourses);

// ------------------------------
// Array.filter()
// ------------------------------

const highCreditCourses = courses.filter(course => course.credits >= 4);

console.log("Courses with Credits >= 4");

console.log(highCreditCourses);

console.log(`Count : ${highCreditCourses.length}`);

// ------------------------------
// Array.reduce()
// ------------------------------

const totalCredits = courses.reduce(

    (total, course) => total + course.credits,

    0

);

console.log(`Total Credits : ${totalCredits}`);
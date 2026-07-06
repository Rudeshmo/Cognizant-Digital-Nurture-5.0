// ============================================
// Cognizant Digital Nurture 5.0
// Hands-On 3
// app.js
// ============================================

import { courses } from "./data.js";

// ------------------------------
// ES6 Practice
// ------------------------------

courses.forEach(course => {
    const { name, credits } = course;
    console.log(`${name} - ${credits} Credits`);
});

const formattedCourses = courses.map(
    course => `${course.code} - ${course.name} (${course.credits} Credits)`
);

console.log(formattedCourses);

const highCreditCourses = courses.filter(
    course => course.credits >= 4
);

console.log(highCreditCourses);

const totalCredits = courses.reduce(
    (total, course) => total + course.credits,
    0
);

console.log(`Total Credits : ${totalCredits}`);

// ============================================
// DOM Manipulation
// ============================================

const courseGrid = document.querySelector(".course-grid");

function renderCourses(courseList) {

    courseGrid.innerHTML = "";

    courseList.forEach(course => {

        const article = document.createElement("article");

        article.className = "course-card";

        article.innerHTML = `
            <h3>${course.name}</h3>
            <p><strong>Code:</strong> ${course.code}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Grade:</strong> ${course.grade}</p>
        `;

        courseGrid.appendChild(article);

    });

}

renderCourses(courses);

// ============================================
// Total Credits
// ============================================

document.querySelector("#total-credits").textContent =
`Total Credits Enrolled : ${totalCredits}`;
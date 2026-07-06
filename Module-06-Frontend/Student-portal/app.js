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
// DOM Elements
// ============================================

const courseGrid = document.querySelector(".course-grid");
const totalCreditsText = document.querySelector("#total-credits");
const searchInput = document.querySelector("#search-courses");
const sortButton = document.querySelector("#sort-btn");
const courseInfo = document.querySelector("#course-info");

// ============================================
// Render Function
// ============================================

function renderCourses(courseList){

    courseGrid.innerHTML = "";

    courseList.forEach(course=>{

        const article=document.createElement("article");

        article.className="course-card";

        article.dataset.id=course.id;

        article.innerHTML=`

            <h3>${course.name}</h3>

            <p><strong>Course Code :</strong> ${course.code}</p>

            <p><strong>Credits :</strong> ${course.credits}</p>

            <span>Grade : ${course.grade}</span>

        `;

        courseGrid.appendChild(article);

    });

}

renderCourses(courses);

// ============================================
// Total Credits
// ============================================

totalCreditsText.textContent=
`Total Credits Enrolled : ${totalCredits}`;

// ============================================
// Search
// ============================================

searchInput.addEventListener("input",()=>{

    const keyword=searchInput.value.toLowerCase();

    const filteredCourses=courses.filter(course=>

        course.name.toLowerCase().includes(keyword)

    );

    renderCourses(filteredCourses);

});

// ============================================
// Sort
// ============================================

sortButton.addEventListener("click",()=>{

    const sortedCourses=[...courses];

    sortedCourses.sort(

        (a,b)=>b.credits-a.credits

    );

    renderCourses(sortedCourses);

});

// ============================================
// Event Delegation
// ============================================

courseGrid.addEventListener("click",(event)=>{

    const card=event.target.closest(".course-card");

    if(!card){

        return;

    }

    const id=Number(card.dataset.id);

    const selectedCourse=courses.find(

        course=>course.id===id

    );

    courseInfo.innerHTML=`

        <h3>${selectedCourse.name}</h3>

        <p>Course Code : ${selectedCourse.code}</p>

        <p>Credits : ${selectedCourse.credits}</p>

        <p>Current Grade : ${selectedCourse.grade}</p>

    `;

});
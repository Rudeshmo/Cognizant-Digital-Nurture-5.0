// ============================================
// Cognizant Digital Nurture 5.0
// Hands-On 3
// app.js
// ============================================

import { courses } from "./data.js"
import {
    fetchUser,
    fetchUserAsync,
    fetchAllCourses,
    apiFetch,
    axiosFetch
} from "./api.js";
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
// =====================================
// Hands-On 4
// Promise
// =====================================

fetchUser(1);

// =====================================
// Async Await
// =====================================

fetchUserAsync(2);
// =====================================
// Loading Courses
// =====================================

const loading = document.querySelector("#loading");

loading.textContent = "Loading courses...";

fetchAllCourses().then((data) => {

    renderCourses(data);

    loading.style.display = "none";

});
// =====================================
// Promise.all()
// =====================================

Promise.all([
    fetchUserAsync(1),
    fetchUserAsync(2)
]).then((users) => {

    console.log("Both Users Loaded");

    console.log(users[0].name);

    console.log(users[1].name);

});
// =====================================
// Notifications
// =====================================

const notificationList =
document.querySelector("#notification-list");



// =====================================
// Load Notifications using Axios
// =====================================

async function loadNotifications() {

    const loading = document.querySelector("#loading");
    const error = document.querySelector("#error-message");
    const retry = document.querySelector("#retry-btn");

    loading.classList.add("show");
    error.textContent = "";
    retry.style.display = "none";

    try {

        const posts = await axiosFetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                userId: 1
            }
        );

        notificationList.innerHTML = "";

        posts.forEach(post => {

            const card = document.createElement("article");

            card.className = "course-card";

            card.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            notificationList.appendChild(card);

        });

    }
    catch (err) {

        notificationList.innerHTML = "";

        error.textContent = "Unable to load notifications.";

        retry.style.display = "inline-block";

    }
    finally {

        loading.classList.remove("show");

    }

}
// =====================================
// Axios Example
// =====================================

axiosFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
        userId: 1
    }
)
.then(posts => {

    console.log("Axios Posts");

    console.log(posts);

});
loadNotifications();
/*
========================================

Fetch vs Axios

1. Fetch requires response.json()
   Axios automatically parses JSON.

2. Fetch requires checking response.ok.
   Axios throws an error automatically for HTTP errors.

3. Axios supports interceptors.
   Fetch does not support interceptors directly.

========================================
*/
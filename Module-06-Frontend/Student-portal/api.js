// =====================================
// api.js
// =====================================

const BASE_URL = "https://jsonplaceholder.typicode.com";

// ----------------------------
// Promise Version
// ----------------------------

export function fetchUser(id){

    return fetch(`${BASE_URL}/users/${id}`)

    .then(response=>response.json())

    .then(user=>{

        console.log(user.name);

        return user;

    });

}

// ----------------------------
// Async Await Version
// ----------------------------

export async function fetchUserAsync(id){

    try{

        const response=await fetch(

            `${BASE_URL}/users/${id}`

        );

        const user=await response.json();

        console.log(user.name);

        return user;

    }

    catch(error){

        console.log(error);

    }

}
// =====================================
// Local Course Data
// =====================================

import { courses } from "./data.js";

export function fetchAllCourses() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(courses);

        }, 1000);

    });

}

// =====================================
// Reusable Fetch Function
// =====================================

export async function apiFetch(url) {

    const response = await fetch(url);

    if (!response.ok) {

        throw new Error("Unable to fetch data.");

    }

    return await response.json();

}
// =====================================
// Axios Request Interceptor
// =====================================

axios.interceptors.request.use((config) => {

    console.log(`API call started: ${config.url}`);

    return config;

});
// =====================================
// Axios Fetch Function
// =====================================

export async function axiosFetch(url, params = {}) {

    const response = await axios.get(url, {
        params: params
    });

    return response.data;

}

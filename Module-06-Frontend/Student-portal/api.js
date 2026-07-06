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
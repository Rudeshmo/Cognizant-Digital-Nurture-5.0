import { useState } from "react";

function StudentProfile() {

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        semester: ""
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setProfile({
            ...profile,
            [name]: value
        });

    }

    return (

        <section>

            <h2>Student Profile</h2>

            <input
                type="text"
                name="name"
                placeholder="Student Name"
                value={profile.name}
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={profile.email}
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="text"
                name="semester"
                placeholder="Semester"
                value={profile.semester}
                onChange={handleChange}
            />

            <br /><br />

            <h3>Preview</h3>

            <p>Name : {profile.name}</p>
            <p>Email : {profile.email}</p>
            <p>Semester : {profile.semester}</p>

        </section>

    );

}

export default StudentProfile;
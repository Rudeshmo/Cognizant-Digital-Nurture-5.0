import "./App.css";

import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";

import coursesData from "./data/courses";

function App() {

    const [courses] = useState(coursesData);

    const [searchTerm, setSearchTerm] = useState("");

    const [enrolledCourses, setEnrolledCourses] = useState([]);

    function handleEnroll(id) {

        if (!enrolledCourses.includes(id)) {

            setEnrolledCourses([
                ...enrolledCourses,
                id
            ]);

        }

    }

    const filteredCourses = courses.filter(course =>

        course.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())

    );

    return (

        <>

            <Header
                siteName="Student Portal"
                enrolledCount={enrolledCourses.length}
            />

            <main>

                <input

                    type="text"

                    placeholder="Search Courses..."

                    value={searchTerm}

                    onChange={(e) =>

                        setSearchTerm(e.target.value)

                    }

                />

                <br /><br />

                {filteredCourses.map(course => (

                    <CourseCard

                        key={course.id}

                        {...course}

                        onEnroll={handleEnroll}

                    />

                ))}

            </main>

            <Footer />

        </>

    );

}

export default App;
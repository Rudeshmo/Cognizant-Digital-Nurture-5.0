import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

function CoursesPage() {

    return (

        <main>

            <h2>All Courses</h2>

            <div className="course-grid">

                {courses.map((course) => (

                    <CourseCard
                        key={course.id}
                        {...course}
                        onEnroll={() => {}}
                    />

                ))}

            </div>

        </main>

    );

}

export default CoursesPage;
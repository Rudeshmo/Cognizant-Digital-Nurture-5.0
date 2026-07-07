import CourseCard from "../components/CourseCard";
import courses from "../data/courses";

function HomePage() {
    return (
        <main>

            <h2>Welcome to the Student Portal</h2>

            <p>
                Explore our featured courses and manage your academic journey.
            </p>

            <div className="course-grid">

                {courses.slice(0, 3).map((course) => (

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

export default HomePage;
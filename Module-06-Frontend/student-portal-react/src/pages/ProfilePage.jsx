import { useSelector, useDispatch } from "react-redux";
import { unenroll } from "../redux/enrollmentSlice";

function ProfilePage() {

    const dispatch = useDispatch();

    const enrolledCourses = useSelector(
        (state) => state.enrollment.enrolledCourses
    );

    return (

        <main>

            <h2>My Enrolled Courses</h2>

            {
                enrolledCourses.length === 0 ? (

                    <p>No enrolled courses.</p>

                ) : (

                    enrolledCourses.map((course) => (

                        <div key={course.id}>

                            <h3>{course.name}</h3>

                            <button
                                onClick={() =>
                                    dispatch(unenroll(course.id))
                                }
                            >
                                Remove
                            </button>

                            <hr />

                        </div>

                    ))

                )
            }

        </main>

    );

}

export default ProfilePage;
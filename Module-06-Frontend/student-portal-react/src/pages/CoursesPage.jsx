import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { enroll } from "../redux/enrollmentSlice";

function CourseCard({
    id,
    name,
    code,
    credits,
    grade
}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleEnroll() {

        dispatch(
            enroll({
                id,
                name,
                code,
                credits,
                grade
            })
        );

        navigate("/profile");
    }

    return (

        <article className="course-card">

            <h3>{name}</h3>

            <p><strong>Code:</strong> {code}</p>

            <p><strong>Credits:</strong> {credits}</p>

            <p><strong>Grade:</strong> {grade}</p>

            <Link to={`/courses/${id}`}>
                View Details
            </Link>

            <br /><br />

            <button onClick={handleEnroll}>
                Enroll
            </button>

        </article>

    );

}

export default CourseCard;
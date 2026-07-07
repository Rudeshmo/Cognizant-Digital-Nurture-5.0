import PropTypes from "prop-types";

import { Link, useNavigate } from "react-router-dom";

function CourseCard({
    id,
    name,
    code,
    credits,
    grade
}) {

    const navigate = useNavigate();

    function handleEnroll() {

        alert(`${name} Enrolled Successfully`);

        navigate("/profile");

    }

    return (

        <article className="course-card">

            <h3>{name}</h3>

            <p>
                <strong>Code:</strong> {code}
            </p>

            <p>
                <strong>Credits:</strong> {credits}
            </p>

            <p>
                <strong>Grade:</strong> {grade}
            </p>

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

CourseCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
    grade: PropTypes.string.isRequired,
};

export default CourseCard;
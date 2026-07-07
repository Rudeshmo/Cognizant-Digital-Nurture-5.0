import PropTypes from "prop-types";

function CourseCard({
    id,
    name,
    code,
    credits,
    grade,
    onEnroll
}) {

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

            <button
                onClick={() => onEnroll(id)}
            >
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
    onEnroll: PropTypes.func.isRequired,
};

export default CourseCard;
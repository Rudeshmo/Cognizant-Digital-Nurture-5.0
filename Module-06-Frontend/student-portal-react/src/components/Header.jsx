import PropTypes from "prop-types";

function Header({ siteName, enrolledCount }) {
    return (
        <header className="header">

            <h1>{siteName}</h1>

            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </nav>

            <div>
                <strong>Enrolled: {enrolledCount}</strong>
            </div>

        </header>
    );
}

Header.propTypes = {
    siteName: PropTypes.string.isRequired,
    enrolledCount: PropTypes.number.isRequired,
};

export default Header;
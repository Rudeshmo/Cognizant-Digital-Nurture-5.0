import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header({ siteName }) {

    const enrolledCourses = useSelector(
        (state) => state.enrollment.enrolledCourses
    );

    return (

        <header className="header">

            <h1>{siteName}</h1>

            <nav>

                <ul>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/profile">Profile</Link></li>

                </ul>

            </nav>

            <h3>
                Enrolled: {enrolledCourses.length}
            </h3>

        </header>

    );

}

export default Header;
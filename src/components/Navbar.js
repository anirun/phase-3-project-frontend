import {NavLink} from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "white",
    backgroundColor: "rgb(165, 116, 196)",
    fontWeight: "bold",
    textAlign: "center",
}

const Navbar = () => {
    return (
        <div>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "rgb(121,237,167)"
            }}
                exact
                style={style}
                to="/"
            >Home</NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "rgb(121,237,167)"
            }}
                exact
                style={style}
                to="/students"
            >Students</NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "rgb(121,237,167)"
            }}
                exact
                style={style}
                to="/assignments"
            >All Assignments</NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "rgb(121,237,167)"
            }}
                exact
                style={style}
                to="/student/new"
            >New Student</NavLink>
        </div>
    )
}

export default Navbar;
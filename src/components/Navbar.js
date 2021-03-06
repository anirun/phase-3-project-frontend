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
    horizontalAlign: "center",
    transform: 'translate(-50%, -50%)'
}

const activeStyle={
    fontWeight: "bolder",
    color: "rgb(121,237,167)"
}

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink
                activeStyle={activeStyle}
                exact
                style={style}
                to="/students"
                >Students</NavLink>
            <NavLink
                activeStyle={activeStyle}
                exact
                style={style}
                to="/assignments"
                >All Assignments</NavLink>
        </div>
    )
}

export default Navbar;
import styled from "styled-components"
import {Link} from "react-router-dom"

export default function Navbar(){
    return (
        <Nav>
            <Link className="site-title" to="/">NightSky</Link>
            <ul>
                <li>
                    <Link to="/addStar">Add Star</Link>
                </li>
                <li>
                    <Link to="/addConstellation">Add Constellation</Link>
                </li>
                <li>
                    <Link to="/listOfStars">List of Stars</Link>
                </li>
                <li>
                    <Link to="/listOfConstellations">List of Constellations</Link>
                </li>
            </ul>
        </Nav>
        )
}

const Nav = styled.nav`
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 2rem;
    padding: 0 1rem;

    .site-title{
        font-size: 3rem;
    }

    ul{
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        gap: 1rem;
    }

    a{
       color: inherit; 
       text-decoration: none;
       height: 100%;
       display: flex;
       align-items: center;
       padding: .25rem;
    }
    li.active{
        background-color: #555;
    }
    li:hover{
        background-color: #777;
    }
`
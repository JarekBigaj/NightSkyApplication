import styled from "styled-components"
import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar(){
    return (
        <Nav>
            <Link className="site-title" to="/">NightSky</Link>
            <ul>
                <CustomLink to={"/"}>Home</CustomLink>
                <CustomLink to={"/listOfStars"}>Stars</CustomLink>
                <CustomLink to={"/listOfConstellations"}>Constellation</CustomLink>
            </ul>        
        </Nav>
        )
}

const CustomLink = ({to,children,...props}) =>{
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true})

    return (
        <li className={isActive? "active": ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
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
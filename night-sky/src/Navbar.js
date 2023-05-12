import styled from "styled-components"

export default function Navbar(){
    return (
        <Nav>
            <a className="site-title" href="/">NightSky</a>
            <ul>
                <li>
                    <a href="/addStar">Add Star</a>
                </li>
                <li>
                    <a href="/addConstellation">Add Constellation</a>
                </li>
                <li>
                    <a href="/listOfStars">List of Stars</a>
                </li>
                <li>
                    <a href="/listOfConstellations">List of Constellations</a>
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
import styled from "styled-components"

export default function Navbar(){
    return (
        <Nav>
            <a className="site-title" href="/">NightSky</a>
            <ul>
                <li>
                    <a href="/addStar">Add Star</a>
                </li>
            </ul>
        </Nav>
        )
}

const Nav = styled.nav`
    background-color: #333;
    color:#fff;
    display:flex;
    justify-content: space-between;
    align-items:center;
    gap:2rem;
    padding: 0 1rem;

    .site-title{
        font-size: 2rem;
    }

    ul{
        padding: 0;
        margin: 0;
        list-style:none;
        display:flex;
        gap:1rem;
    }

    a{
       color:inherit; 
       text-decoration: none;
    }
    li:hover{
        color:#aaa;
    }
`
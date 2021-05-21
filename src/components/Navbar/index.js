import React from 'react'
import { Nav, NavIcon, NavLink, Bars} from './NavBarElements'

const Navbar = () => {
    return (  
        <>

            <Nav>
                <NavLink to='/'>Pizza Home</NavLink>
                <NavLink to='/Form'>Order Now</NavLink>
                <NavIcon>
                    <p>Best Pizza in Town</p>
                    <Bars />
                </NavIcon>
            </Nav>
            
        </>
    )
}

export default Navbar
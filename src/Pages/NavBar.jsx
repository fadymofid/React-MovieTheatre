import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div style={{backgroundColor:"rgba(0,0,0,0.5)" ,display:"flex",justifyContent:"space-around" ,padding:"15px"}}>
            <Link to='/' style={{textDecoration: 'none',color:"powderblue"}}>Home</Link>
            <Link to='/details/:id'style={{textDecoration: 'none',color:"powderblue"}}>Details</Link>
            <Link to='./about'style={{textDecoration: 'none',color:"powderblue"}}>About</Link>



        </div>
    );
}

export default NavBar;

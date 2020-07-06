import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const Navigation: React.FC = () => {
    return(
        <>
            <Navbar bg="dark">
                <Link to="/">Home</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/pokemon'>Pokemon</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/about'>About</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/recipe'>Recipe</Link>
                
            </Navbar>
        </>
    );
};

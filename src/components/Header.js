import React from 'react';

const Header = ({titulo}) => (  
    <header>
        <h1 className="text-center mt-5 text-white">
            {titulo}
        </h1>
    </header>
);

 
export default Header;
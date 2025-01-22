import React, { useEffect, useState } from 'react';
import Route from './Route';

function RouterDom({ children }) {
    const [ pathname, setPathname ] = useState(window.location.pathname);  

    console.log(pathname)

    useEffect(() => {
        setPathname(window.location.pathname);
    }, [window.location.pathname])
    
    return (
        <div>
            {children}
        </div>
    );
}

export default RouterDom;
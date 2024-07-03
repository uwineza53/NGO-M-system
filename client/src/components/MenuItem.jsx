import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const MenuItem = ({name, nav, children}) => {
    const navigate = useNavigate();
    const { state } = useLocation();

    return(
        <nav className={`${state?.submenu === name ? 'text-neutral-200' : 'text-gray-400'} cursor-pointer mx-[5%] flex gap-5 py-0.5 items-center peer-focus:hidden`} onClick={() => navigate(nav, { state: { ...state, submenu: name } })}>
            {children}
        </nav>
    );
}

export default MenuItem
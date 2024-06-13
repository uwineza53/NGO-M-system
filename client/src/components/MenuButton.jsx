import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const MenuButton = ({ icon, title, route, name, menuSetter }) => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleNavigation = () => {
      menuSetter != null && menuSetter(prev => (state?.menu === name && prev) ? false : true);
      navigate(route, { state: {...state, menu: name} })
    }

    return (
        <label className={`${(state?.menu && state?.menu === name) ? 'text-neutral-100 border-l-2 border-neutral-200' : 'text-gray-400'} hover:text-neutral-100 w-full p-1 cursor-pointer relative group`} onClick={handleNavigation}>
            {icon}
            {title?.length && <div className="absolute top-0 left-[100%] px-2">
              <span className="bg-neutral-100 text-neutral-700 rounded-md relative top-0 px-2 py-1 tooltip-left min-w-[150px] group-hover:block hidden">{title}</span>
            </div>}
        </label>
    );
}

export default MenuButton
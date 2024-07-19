import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const MenuButton = ({ icon, title, route, name, menuSetter }) => {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
  // console.log(useLocation());

    const handleNavigation = () => {
      menuSetter != null && menuSetter(prev => (state?.menu === name && prev) ? false : true);
      navigate(pathname, { state: {...state, menu: name} })
    }

    return (
        <label className={`${(state?.menu && state?.menu === name) ? 'text-neutral-100 border-l-2 border-neutral-200' : 'text-gray-400'} hover:text-neutral-100 w-full p-1 cursor-pointer relative group/tooltip`} onClick={handleNavigation}>
            {icon}
            {title?.length && <div className="absolute top-0 left-[100%] px-2">
              <span className="tooltip caret-left top-0 px-2 p-1 font-semibold text-md">{title}</span>
            </div>}
        </label>
    );
}

export default MenuButton
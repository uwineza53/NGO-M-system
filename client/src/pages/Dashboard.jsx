import React, { useState } from 'react'
import MenuBox from '../components/MenuBox';
import Menus from '../components/Menus';
import HistoryMinified from '../components/HistoryMinified';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='flex h-screen min-h-[700px] relative'>
            {/* <input id="menu-opener" className='peer hidden' type="checkbox" /> */}
            <aside className='w-[40px] h-full bg-neutral-950 flex flex-col justify-between items-center px-0 py-3 z-20'>
                <Menus setMenuOpen={setMenuOpen} />
            </aside>

            <nav className={`w-[200px] sm:w-[250px] md:w-[300px] lg:w-[27%] absolute lg:static left-[40px] h-full bg-neutral-900 ${menuOpen ? 'block' : 'hidden'} transition-all duration-100 flex p-1 flex-col justify-between z-10 opacity-95`}>
            {/* p-3 md:p-4 */}
                <MenuBox />
                <HistoryMinified />
            </nav>
            
            <section className='w-[95%] sm:w-[95%] md:w-[97%] lg:peer-[:not(:checked)]:w-[110%] h-full bg-neutral-800 z-0 pb-1 overflow-auto'>
                <Outlet />
            </section>
        </div>
    );
}

export default Dashboard
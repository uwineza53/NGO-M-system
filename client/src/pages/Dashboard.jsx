import React, { useState } from 'react'
import MenuBox from '../components/MenuBox';
import Menus from '../components/Menus';
import HistoryMinified from '../components/HistoryMinified';


const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='flex h-screen min-h-[700px] relative'>
            <input id="menu-opener" className='peer hidden' type="checkbox" />
            <aside className='w-[40px] h-full bg-neutral-950 flex flex-col justify-between items-center px-0 py-3'>
                <Menus setMenuOpen={setMenuOpen} />
            </aside>

            <nav className={`w-[200px] sm:w-[250px] md:w-[300px] lg:w-[27%] absolute lg:static left-[40px] h-full bg-neutral-900 ${menuOpen ? 'block' : 'hidden'} transition-all duration-100 p-3 md:p-4 flex flex-col justify-between`}>
                <MenuBox />
                <HistoryMinified />
            </nav>
            
            <section className='w-[90%] sm:w-[93%] md:w-[95%] lg: peer-[:not(:checked)]:w-[97%] h-full bg-neutral-800'>
                ldjkshfjsd
            </section>
        </div>
    );
}

export default Dashboard
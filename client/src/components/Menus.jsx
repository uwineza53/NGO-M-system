import React from 'react'
import { RiAccountCircleLine } from "react-icons/ri";
import { PiPowerFill } from "react-icons/pi";
import { FaArrowsDownToPeople, FaPeopleGroup } from "react-icons/fa6";
import { GiLoveInjection } from "react-icons/gi";
import MenuButton from '../components/MenuButton';

const Menus = ({ setMenuOpen }) => {
    return (
        <>
            <div className='flex flex-col gap-5'>
                <MenuButton name='members' icon={<FaArrowsDownToPeople size={30} />} menuSetter={setMenuOpen} title="Members" route='/dashboard' />
                <MenuButton name='methods' icon={<GiLoveInjection size={30} />} menuSetter={setMenuOpen} title="Methods" />
                <MenuButton name='groups' icon={<FaPeopleGroup size={30} />} menuSetter={setMenuOpen} title="Groups" />
            </div>
            <div className='flex flex-col gap-10 text-gray-400'>
                <MenuButton icon={<RiAccountCircleLine size={25} />} title="username" />
                <MenuButton icon={<PiPowerFill size={25} color="red" />} title="Gusuhoka" />
            </div>
        </>
    );
}

export default Menus
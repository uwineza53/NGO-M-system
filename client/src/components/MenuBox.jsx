import React from 'react';
import { useLocation } from 'react-router-dom';
import { GiPillDrop } from 'react-icons/gi';
import { TbListTree } from 'react-icons/tb';
import { HiUserAdd } from "react-icons/hi";
import MenuItem from './MenuItem';
import MenuWrapper from './MenuWrapper';

const MenuBox = () => {
    const { state } = useLocation();

    if (state?.menu === 'members')
        return (
            <MenuWrapper title='MEMBERS'>
                <MenuItem name='adding-member'>
                    <HiUserAdd /> adding member
                </MenuItem>
            </MenuWrapper>
        );
    else
        return (
            <MenuWrapper title='METHODS'>
                <MenuItem name='adding-method'>
                    <GiPillDrop /> adding method
                </MenuItem>
                <MenuItem name='listing-method'>
                    <TbListTree /> available methods
                </MenuItem>
            </MenuWrapper>
        );
}

export default MenuBox
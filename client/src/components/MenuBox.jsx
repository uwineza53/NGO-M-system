import React from 'react';
import { useLocation } from 'react-router-dom';
import { GiPillDrop } from 'react-icons/gi';
import { TbListTree } from 'react-icons/tb';
import { HiUserAdd } from "react-icons/hi";
import { PiUserListFill } from 'react-icons/pi';
import { LiaLayerGroupSolid } from "react-icons/lia";
import { MdGroupAdd } from "react-icons/md";
import MenuItem from './MenuItem';
import MenuWrapper from './MenuWrapper';

const MenuBox = () => {
    const { state } = useLocation();

    if (state?.menu === 'members')
        return (
            <MenuWrapper title='MEMBERS'>
                <MenuItem name='adding-member' nav='member-register'>
                    <HiUserAdd /> Adding member
                </MenuItem>
                <MenuItem name='view-members' nav='view-members'>
                    <PiUserListFill /> All Members
                </MenuItem>
            </MenuWrapper>
        );
    else if (state?.menu === 'methods')
        return (
            <MenuWrapper title='METHODS'>
                <MenuItem name='adding-method' nav='method-register'>
                    <GiPillDrop /> adding method
                </MenuItem>
                <MenuItem name='listing-method'>
                    <TbListTree /> available methods
                </MenuItem>
            </MenuWrapper>
        );
    else
        return (
            <MenuWrapper title='GROUPS'>
                <MenuItem name='adding-group' nav='group-register'>
                    <MdGroupAdd /> adding a group
                </MenuItem>
                <MenuItem name='listing-group'>
                    <LiaLayerGroupSolid /> available groups
                </MenuItem>
            </MenuWrapper>
        );
}

export default MenuBox
import React, { useState } from 'react';
import { PiCaretDownBold, PiCaretRightBold } from 'react-icons/pi';

const MenuWrapper = ({ title, children }) => {
    const [listing, setListing] = useState(true);

    return (
        <section className='min-h-[50%]'>
            <label className="menu-title" onClick={() => setListing(!listing)}>
                {listing ? <PiCaretDownBold className='text-lg' /> : <PiCaretRightBold className='text-lg' />}  {title}
            </label>
            {listing && children}
        </section>
    );
}

export default MenuWrapper
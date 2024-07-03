# NGO-M-system

## Usage of Menus
Our menus technically are organized in serveral component pre-equiped with styles and requires you to follow the configuration pattern.

1. Add menu on dashboard
    On Dashboard.jsx you will find a component named <Menus />, open it and add in a menu button with name, icon, title and menuSetter function.

    Example:
    ```jsx
        <MenuButton name='groups' icon={<FaPeopleGroup size={30} />} menuSetter={setMenuOpen} title="Groups" />
    ```

2. Create a menus box for the created button
    Every MenuButton must have a box of menus to open when clicked reason why we give it a setter in its definition.
    so, to create a box we have to check for react router state therefore we can define them as the code below shows.

    Example: 
    ```jsx
        /**
         * Note:
         * Menus are conditionally displayed! 
        **/

        if (state?.menu === 'groups')
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
    ```

## Usage of tooltip
Tooltip are structure pre-formatted componet, so we did structure them to have same feature in whole project here in the code bellow is the way to trigger them.

Example:
```jsx
    /**
     * Note: caret css propert in className attribute is variable
     * this @param can be caret-left, caret-right, caret-top, caret-bottom, caret-top-right or caret-bottom-right
     * 
     * */
    <section className = 'relative group/tooltip w-fit'>
        <FaTimesCircle />
        <nav className="absolute top-0 left-[100%] px-2">
            <span className='tooltip caret-left w-15 px-2 py-0.5 text-sm'> close </span>
        </nav>
    </section>
```

## Usage of modal box
Model box are pre-configured component that can be initialized and used following this recipe below.

```js
    import React, {useState} from 'react';
    const PageUsesModal = () => {
        const [isModalOpen, setIsModalOpen] = useState(false);
        
        return (

            /**
             *  TODO: Your Page development and conent
             * */

            {isModalOpen && <ModalBox toggler={setIsModalOpen}>
                /**
                 *  TODO: Your Modal conent design and action as children of modal component.
                 * */
            </ModalBox>}
        );

    }
```

## Usage of table list
Table list are pre-defined with initial design you can augment later on, follow this recipe to enjoy such good-looking and functioning table list.

```jsx
    import React from 'react';
    import {TableListRow} from 'TableListRow';

    const Report = () => {
        const [data, setData] = useState([]);

        /** 
         * TODO: Do you fetching to feed on data
         * **/
        
        return (
            /**
             * Note: Best to have
             * All these class naming are good start with them then add your styling later on
             * however you want, but mandatory className is 'report-page' others are optional. 
             * **/
            <section className='report-page'>
                <article className='header'>
                    <p className='title'>Members</p>
                    <small className='subtitle'>List of registered members.</small>
                </article>
                {data.map((item) => (
                    <TableListRow key={item.id} details={() => RowDetails(item.id)} className='gap-3 grid-cols-2 md:grid-cols-5'>
                        <span>
                            <header>ID Number</header>
                            <sub-header>11113343 45334534 5435</sub-header>
                        </span>
                        <span>
                            <header>Names</header>
                            <sub-header>KALISA James</sub-header>
                        </span>
                        <span>
                            <header>Telephone No.</header>
                            <sub-header>+255 77 4534 543</sub-header>
                        </span>
                        <span>
                            <header>Profession</header>
                            <sub-header>IT Officer</sub-header>
                        </span>
                        <span className='flex justify-evenly'>
                            <IoEye onClick={handleEdit} />
                            <PiPencil onClick={handleEdit} />
                            <IoTrashBin onClick={handleEdit} />
                        </span>
                    </TableListRow>
                ))}
            </section>
        );
    }

    /**
     * Note: Row Details is optional.
     * This in-bound component is optional, you can implement it when you want to provide more
     * details when a row is selected
     * **/
    const RowDetails = (refId) => {
        /**
         * TODO: Fetch more detail of selected row.
         * **/

        return (
            /**
             * TODO: Design your more detail view.
             * **/
        );
    }
```




import React, { useState } from 'react';
import images from '../../../assets/images/images'
import Button from '../Button';
const Navbar = () => {

    //mobile menu
    const [mobileMenu, setMobileMenu] = useState(false);

    const NavItems = () => {
        //return the nav links
        return (
            <React.Fragment>
                <p className='hover:underline cursor-pointer'>Home</p>
                <p className='hover:underline cursor-pointer'>Contact</p>
                <p className='hover:underline cursor-pointer'>About</p>
                <p className='hover:underline cursor-pointer'>Gallery</p>
            </React.Fragment>
        )
    }

    //show menu
    const showMenu = () => {
        setMobileMenu(true)
    }
    // hide menu 
    const hideMenu = () => {
        setMobileMenu(false)
    }
    return (
        <header className='sticky top-0 z-50 flex justify-between text-textPrimaryColor font-medium items-center h-[4.5rem]  w-full px-6 shadow-md shadow-platniumColor bg-primaryColor'>
            <div className='flex gap-1 items-center'>
                <img src={images.logo} alt='logo' className='object-cover h-7 w-7 md:h-8 md:w-8' />
                <p className='text-lg md:text-xl font-bold bg-gradient-to-r from-blueColor to-purpleColor bg-clip-text text-transparent'>RE DECOR</p>
            </div>
            <div className='hidden md:flex gap-4 text-md'>
                <NavItems />
            </div>
            <div className='hidden md:flex'>
                <Button
                    name="Sign In"
                    variant="filled"
                    gradiant={true}
                />

            </div>

            <div className='flex flex-col md:hidden'>
                {
                    mobileMenu ?
                        <div className='flex rounded-full hover:border hover:border-blueColor'>
                            <img src={images.cross} alt='cross' className='hover:p-0.5 w-5 h-5 cursor-pointer' onClick={hideMenu} />
                        </div>
                        :
                        <div className='flex hover:border hover:border-blueColor hover:py-0.5 hover:px-1 rounded-sm'>
                            <img src={images.menu} alt='menu' className=' w-4 h-4 cursor-pointer' onClick={showMenu} />
                        </div>
                }
            </div>
            {
                mobileMenu &&
                <div className='z-30 absolute top-16 left-0 flex flex-col justify-center items-center gap-4 md:hidden h-[90vh] w-full rounded-b-3xl bg-primaryColor'>
                    <NavItems />
                    <Button
                        name="Sign In"
                        variant="filled"
                        gradiant={true}
                    />
                </div>
            }
        </header>
    )
}

export default Navbar;
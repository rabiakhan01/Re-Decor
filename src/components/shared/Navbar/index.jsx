import { Link } from 'react-router-dom';
import images from '../../../assets/images/images'
import Button from '../Button';
const Navbar = () => {
    return (
        <nav className='flex justify-between text-whiteColor items-center h-[4.5rem] bg-gradient-to-r from-pinkColor via-pinkColor to-skyColor w-full px-6'>
            <div className='flex gap-1 items-center'>
                <img src={images.logo} alt='logo' className='object-cover h-10 w-10' />
                <p className='text-2xl font-bold'>RE DECOR</p>
            </div>
            <div className='flex gap-4 text-md'>
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>
                <p>Gallery</p>
            </div>
            <div>
                <Button
                    name="Sign In"
                />
            </div>
        </nav>
    )
}

export default Navbar;
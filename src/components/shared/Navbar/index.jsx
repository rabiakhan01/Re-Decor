import { Link } from 'react-router-dom';
import images from '../../../assets/images/images'
import Button from '../Button';
const Navbar = () => {
    return (
        <nav className='flex justify-between text-whiteColor items-center h-[4.5rem] bg-gradient-to-r from-pinkColor via-pinkColor to-skyColor w-full'>
            <div className='flex items-center'>
                <img src={images.logo} alt='logo' className='object-cover h-36 w-36' />
                <p className='text-xl font-bold'>RE DECOR</p>
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
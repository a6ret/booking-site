import { FaBed, FaCar, FaPlane, FaSnowboarding, FaTaxi } from 'react-icons/fa';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='headerList'>
                <div className='headerListItem'>
                    <FaBed />
                    <span>Stays</span>
                </div>
                <div className='headerListItem'>
                    <FaPlane />
                    <span>Flights</span>
                </div>
                <div className='headerListItem'>
                    <FaCar />
                    <span>Car Rentals</span>
                </div>
                <div className='headerListItem'>
                    <FaSnowboarding />
                    <span>Attractions</span>
                </div>
                <div className='headerListItem'>
                    <FaTaxi />
                    <span>Airport Taxis</span>
                </div>
            </div>
        </div>
    );
};

export default Header;

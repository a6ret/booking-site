import { useState } from 'react';
import {
    FaBed,
    FaCalendarDay,
    FaCar,
    FaPlane,
    FaSnowboarding,
    FaTaxi,
} from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import './header.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Header = () => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        },
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    return (
        <header className='header'>
            <div className='headerContainer'>
                <div className='headerList'>
                    <NavLink to='stays' className='headerListItem'>
                        <FaBed />
                        <span>Stays</span>
                    </NavLink>
                    <NavLink to='flights' className='headerListItem'>
                        <FaPlane />
                        <span>Flights</span>
                    </NavLink>
                    <NavLink to='car-rentals' className='headerListItem'>
                        <FaCar />
                        <span>Car Rentals</span>
                    </NavLink>
                    <NavLink to='attractions' className='headerListItem'>
                        <FaSnowboarding />
                        <span>Attractions</span>
                    </NavLink>
                    <NavLink to='taxis' className='headerListItem'>
                        <FaTaxi />
                        <span>Airport Taxis</span>
                    </NavLink>
                </div>

                <h1 className='headerTitle'>
                    A lifetime of discounts? It's a Genius.
                </h1>
                <p className='headerDesc'>
                    Get reward for your travels - unlock instant savings of 100%
                    or more with a free Dewabooking account.
                </p>
                <button className='headerBtn'>Sign in / Register</button>

                <div className='headerSearch'>
                    <div className='headerSearchItem'>
                        <FaBed className='headerIcon' />
                        <input
                            type='text'
                            placeholder='Where are you going?'
                            className='headerSearchInput'
                        />
                    </div>
                    <div className='headerSearchItem'>
                        <FaCalendarDay className='headerIcon' />
                        <span
                            className='headerSearchText'
                            onClick={() => setOpenDate(!openDate)}>
                            {`${format(
                                date[0].startDate,
                                'dd/MM/yyyy'
                            )} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
                        </span>
                        {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                            />
                        )}
                    </div>
                    <div className='headerSearchItem'>
                        <MdPeople className='headerIcon' />
                        <span className='headerSearchText'>
                            {options.adult} adults • {options.children} children
                            • {options.room} room
                        </span>

                        <div className='options'>
                            <div className='optionItem'>
                                <span className='optionText'>Adult</span>
                                <div className='optionCounter'>
                                    <button className='optionCounterButton'>
                                        -
                                    </button>
                                    <span className='optionCounterNumber'>
                                        1
                                    </span>
                                    <button className='optionCounterButton'>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span className='optionText'>Children</span>
                                <div className='optionCounter'>
                                    <button className='optionCounterButton'>
                                        -
                                    </button>
                                    <span className='optionCounterNumber'>
                                        0
                                    </span>
                                    <button className='optionCounterButton'>
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className='optionItem'>
                                <span className='optionText'>Room</span>
                                <div className='optionCounter'>
                                    <button className='optionCounterButton'>
                                        -
                                    </button>
                                    <span className='optionCounterNumber'>
                                        1
                                    </span>
                                    <button className='optionCounterButton'>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='headerSearchItem'>
                        <button className='headerBtn'>Search</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

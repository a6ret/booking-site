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
import { NavLink, useNavigate } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import './header.css';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Header = ({ type }) => {
    const [destination, setDestination] = useState('');
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

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]:
                    operation === 'i' ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        navigate('/hotels', { state: { destination, date, options } });
    };

    return (
        <header className='header'>
            <div
                className={
                    type === 'list'
                        ? 'headerContainer listMode'
                        : 'headerContainer'
                }>
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

                {type !== 'list' && (
                    <>
                        <h1 className='headerTitle'>
                            A lifetime of discounts? It's a Genius.
                        </h1>
                        <p className='headerDesc'>
                            Get reward for your travels - unlock instant savings
                            of 100% or more with a free Dewabooking account.
                        </p>
                        <button className='headerBtn'>
                            Sign in / Register
                        </button>

                        <div className='headerSearch'>
                            <div className='headerSearchItem bdr'>
                                <FaBed className='headerIcon' />
                                <input
                                    type='text'
                                    placeholder='Where are you going?'
                                    className='headerSearchInput'
                                    onChange={(e) =>
                                        setDestination(e.target.value)
                                    }
                                />
                            </div>
                            <div className='headerSearchItem bdr'>
                                <FaCalendarDay className='headerIcon' />
                                <span
                                    className='headerSearchText'
                                    onClick={() => setOpenDate(!openDate)}>
                                    {`${format(
                                        date[0].startDate,
                                        'dd/MM/yyyy'
                                    )} to ${format(
                                        date[0].endDate,
                                        'dd/MM/yyyy'
                                    )}`}
                                </span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) =>
                                            setDate([item.selection])
                                        }
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className='date'
                                        minDate={new Date()}
                                    />
                                )}
                            </div>
                            <div className='headerSearchItem bdr'>
                                <MdPeople className='headerIcon' />
                                <span
                                    onClick={() => setOpenOptions(!openOptions)}
                                    className='headerSearchText'>
                                    {options.adult} adults • {options.children}{' '}
                                    children • {options.room} room
                                </span>

                                {openOptions && (
                                    <div className='options'>
                                        <div className='optionItem'>
                                            <span className='optionText'>
                                                Adult
                                            </span>
                                            <div className='optionCounter'>
                                                <button
                                                    disabled={
                                                        options.adult <= 1
                                                    }
                                                    className='optionCounterButton'
                                                    onClick={() =>
                                                        handleOption(
                                                            'adult',
                                                            'd'
                                                        )
                                                    }>
                                                    -
                                                </button>
                                                <span className='optionCounterNumber'>
                                                    {options.adult}
                                                </span>
                                                <button
                                                    className='optionCounterButton'
                                                    onClick={() =>
                                                        handleOption(
                                                            'adult',
                                                            'i'
                                                        )
                                                    }>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className='optionItem'>
                                            <span className='optionText'>
                                                Children
                                            </span>
                                            <div className='optionCounter'>
                                                <button
                                                    disabled={
                                                        options.children <= 0
                                                    }
                                                    className='optionCounterButton'
                                                    onClick={() =>
                                                        handleOption(
                                                            'children',
                                                            'd'
                                                        )
                                                    }>
                                                    -
                                                </button>
                                                <span className='optionCounterNumber'>
                                                    {options.children}
                                                </span>
                                                <button
                                                    className='optionCounterButton'
                                                    onClick={() =>
                                                        handleOption(
                                                            'children',
                                                            'i'
                                                        )
                                                    }>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className='optionItem'>
                                            <span className='optionText'>
                                                Room
                                            </span>
                                            <div className='optionCounter'>
                                                <button
                                                    disabled={options.room <= 1}
                                                    className='optionCounterButton'
                                                    onClick={() =>
                                                        handleOption(
                                                            'room',
                                                            'd'
                                                        )
                                                    }>
                                                    -
                                                </button>
                                                <span className='optionCounterNumber'>
                                                    {options.room}
                                                </span>
                                                <button
                                                    className='optionCounterButton'
                                                    onClick={() =>
                                                        handleOption(
                                                            'room',
                                                            'i'
                                                        )
                                                    }>
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='headerSearchItem'>
                                <button
                                    className='headerBtn'
                                    onClick={handleSearch}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;

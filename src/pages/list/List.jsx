import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './list.css';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);

    console.log(location.state.date);
    return (
        <div>
            <Navbar />
            <Header type='list' />

            <div className='listContainer'>
                <div className='listWrapper'>
                    <div className='listSearch'>
                        <h1 className='lsTitle'>Search</h1>
                        <div className='lsItem'>
                            <label htmlFor=''>Destination</label>
                            <input type='text' placeholder={destination} />
                        </div>
                        <div className='lsItem'>
                            <label htmlFor=''>Check-in Date</label>
                            <span>
                                {' '}
                                {`${format(
                                    date[0].startDate,
                                    'dd/MM/yyyy'
                                )} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
                            </span>
                        </div>
                    </div>
                    <div className='listResult'></div>
                </div>
            </div>
        </div>
    );
};

export default List;

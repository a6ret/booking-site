import './searchItem.css';

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img
                src='https://cf.bstatic.com/xdata/images/city/square250/691530.webp?k=d7c3bf00b1194d220f2bb995f4888d6062e93d3b366b6df8633484d2eac7df03&o='
                alt='img'
                className='siImg'
            />
            <div className='siDesc'>
                <h1 className='siTitle'>Tower Street Apartments</h1>
                <span className='siDistance'>500m from center</span>
                <span className='siTaxiOp'>Free airport taxi</span>
                <span className='siSubtitle'>
                    Studio Apartment with Air conditioning
                </span>
                <span className='siFeatures'>
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className='siCancelOp'>Free cancellation </span>
                <span className='siCancelOpSubtitle'>
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className='siDetails'>
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.5</button>
                </div>
                <div className="siDetailText">
                    <span className="siPrice">$142</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className='siCheckButton'>See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;

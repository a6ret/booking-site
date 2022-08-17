import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import './home.css';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';

const Home = () => {
    return (
        <main>
            <Navbar />
            <Header />
            <div className='homeContainer'>
                <Featured />
                <h1 className='homeTitle'>Browse by property type</h1>
                <PropertyList />
                <h1 className='homeTitle'>Home guests love</h1>
                <FeaturedProperties />
            </div>
        </main>
    );
};

export default Home;

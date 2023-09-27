import { useState } from "react";
import Donations from "../../Components/Donations/Donations";
import Banner from "../../Components/Header/Banner/Banner";
import { useLoaderData } from "react-router-dom"


const Home = () => {

    const [filteredDonations, setFilteredDonation] = useState([]);

    const donations = useLoaderData();

    const handleSearch = inputVal => {

        console.log(donations);
        console.log(inputVal)
        const filteredData = donations.filter(donation => donation.category.toLowerCase() === inputVal.toLowerCase())
        console.log(filteredData);

        if (filteredData) {
            setFilteredDonation(filteredData);
        }
    }

    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <Donations donations={filteredDonations.length > 0 ? filteredDonations : donations}></Donations>
        </div>
    );
};

export default Home;
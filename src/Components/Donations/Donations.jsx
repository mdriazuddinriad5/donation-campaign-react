import DonationCard from "./DonationCard";


const Donations = ({donations}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-5/6 mx-auto mt-4 mb-4 md:mt-6 lg:mt-24 md:mb-6 lg:mb-32">
            {
                donations.map((card,idx)=> <DonationCard card={card} key={idx}></DonationCard>)
            }
        </div>
    );
};

export default Donations;
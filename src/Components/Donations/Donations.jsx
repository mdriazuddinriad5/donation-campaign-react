import DonationCard from "./DonationCard";


const Donations = ({donations}) => {
    return (
        <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto mt-24 mb-32">
            {
                donations.map((card,idx)=> <DonationCard card={card} key={idx}></DonationCard>)
            }
        </div>
    );
};

export default Donations;
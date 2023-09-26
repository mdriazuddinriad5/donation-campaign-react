import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";

const Donation = () => {
    const [donatedCards, setDonatedCards] = useState([]);
    const [noFound, setNoFound] = useState('');
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        const addedCards = JSON.parse(localStorage.getItem('donatedList'));
        if (addedCards) {
            setDonatedCards(addedCards)
        } else {
            setNoFound('No Data Found')
        }
    }, [])


    return (
        <div>

            {/*    {
                noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> :
                    <div>
                        <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto py-12">
                            {
                                isShown ? donatedCards.map(card => <DonatedCard card={card} key={card.id}></DonatedCard>) :
                                    donatedCards.slice(0, 4).map(card => <DonatedCard card={card} key={card.id}></DonatedCard>)
                            }
                        </div>

                        {
                            donatedCards.length > 4 ? <div className="flex items-center justify-center mb-24">
                                <button onClick={() => setIsShown(!isShown)} className="py-3 px-7 bg-[#009444] text-[#FFF] rounded-lg">
                                    {isShown ? 'See Less' : 'See All'}
                                </button>
                            </div> : ''
                        }


                    </div>
            }
 */}

            {
                noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> :
                    <div>
                        <div className="grid grid-cols-2 gap-6 max-w-7xl mx-auto py-12">
                            {
                                isShown ? donatedCards.map(card => <DonatedCard card={card} key={card.id}></DonatedCard>) :
                                    donatedCards.slice(0, 4).map(card => <DonatedCard card={card} key={card.id}></DonatedCard>)
                            }
                        </div>

                        {
                            donatedCards.length > 4 ? (
                                <div className="flex items-center justify-center mb-24">
                                    <button
                                        onClick={() => setIsShown(!isShown)}
                                        className={`py-3 px-7 bg-[#009444] text-[#FFF] rounded-lg ${isShown ? 'hidden' : ''}`}
                                    >
                                        See All
                                    </button>
                                </div>
                            ) : null
                        }
                    </div>
            }


        </div>

    );
};

export default Donation;
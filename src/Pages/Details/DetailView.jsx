import Swal from "sweetalert2";


const DetailView = ({ card }) => {
    const { id, title, picture_lg, category, category_bg, text_color, button_bg, description, price } = card;

    const bgStyle = {
        backgroundColor: text_color,
    }

    const handleAddDonationList = () => {
        const addedDonationList = [];
        const donatedCards = JSON.parse(localStorage.getItem('donatedList'));
        if (!donatedCards) {
            addedDonationList.push(card);
            localStorage.setItem('donatedList', JSON.stringify(addedDonationList));
            Swal.fire(
                'Good job!',
                'You have donated successfully!',
                'success'
              )
        } else {
            const isExist = donatedCards.find(card => card.id === id);
            if (!isExist) {
                addedDonationList.push(...donatedCards, card);
                localStorage.setItem('donatedList', JSON.stringify(addedDonationList));
                Swal.fire(
                    'Good job!',
                    'You have donated successfully!',
                    'success'
                  )
            } else {
                Swal.fire(
                    'Sorry!',
                    'Already added!',
                    'error'
                  )
            }
        }
    }



    return (
        <div className="w-5/6 mx-auto">
            <div className="relative">
                <div>
                    <img className="w-full lg:h-[60vh]" src={picture_lg} alt="" />
                </div>
                <div className="absolute h-24 bottom-0 left-0 right-0 bg-[#0B0B0B80]">
                    <button onClick={handleAddDonationList} className="absolute left-8 top-1/2 transform -translate-y-1/2 py-2 md:py-4 md:px-7 px-4 rounded text-[#FFF] md:text-xl text-base font-semibold" style={bgStyle}>Donate ${price}</button>
                </div>
            </div>

            <h2 className="mt-4 md:mt-8 lg:mt-12 text-[#0B0B0B] text-xl md:text-4xl font-bold mb-2 md:mb-4 lg:mb-6">{title}</h2>
            <p className="text-[#0B0B0BB2] text-base font-normal text-justify mb-6">{description}</p>
        </div>
    );
};

export default DetailView;
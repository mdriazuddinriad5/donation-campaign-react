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
        <div className="max-w-7xl mx-auto">
            <div className="relative">
                <div>
                    <img className="w-full h-[60vh]" src={picture_lg} alt="" />
                </div>
                <div className="absolute h-24 bottom-0 left-0 right-0 bg-[#0B0B0B80]">
                    <button onClick={handleAddDonationList} className="absolute left-8 top-1/2 transform -translate-y-1/2 py-4 px-7 rounded text-[#FFF] text-xl font-semibold" style={bgStyle}>Donate ${price}</button>
                </div>
            </div>

            <h2 className="mt-12 text-[#0B0B0B] text-4xl font-bold mb-6">{title}</h2>
            <p className="text-[#0B0B0BB2] text-base font-normal text-justify">{description}</p>
        </div>
    );
};

export default DetailView;
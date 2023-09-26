import { Link } from "react-router-dom"

const DonatedCard = ({ card }) => {

    const { id, title, picture, category, category_bg, text_color, button_bg, description, price } = card;

    const divStyle = {
        backgroundColor: category_bg,
        color: text_color,
    }

    const btnStyle = {
        backgroundColor: button_bg,
    }

    const detailsBtnBg = {
        backgroundColor: text_color,
    }


    return (
        <div className="flex items-center rounded-lg" style={divStyle}>
            <div>
                <img src={picture} alt="" />
            </div>
            <div className="pl-6">
                <button style={btnStyle} className="py-1 px-3 rounded text-sm font-medium">{category}</button>
                <h2 className="mt-2 text-[#0B0B0B] text-2xl font-semibold mb-2">{title}</h2>
                <p className="mb-5 text-base font-semibold">${price}</p>
                <button className="text-[#FFF] font-semibold px-4 py-2 rounded" style={detailsBtnBg}>View Details</button>


            </div>



        </div>
    );
};

export default DonatedCard;
import { Link } from "react-router-dom";

const DonationCard = ({ card }) => {
    const { id, title, picture, category, category_bg, text_color, button_bg, description, price } = card;

    const divStyle = {
        backgroundColor: category_bg,
        color: text_color,
    }

    const btnStyle = {
        backgroundColor: button_bg,
    }



    return (
        <div>
            <Link to={`/details/${id}`}>
                <div className=' w-full rounded-lg' style={divStyle}>
                    <img className="w-full" src={picture} alt="" />
                    <button className="mt-4 ml-4 py-1 px-3 rounded text-sm font-medium" style={btnStyle}>{category}</button>
                    <h2 className="my-2 ml-4 pb-4 text-xl font-semibold">{title}</h2>
                </div>
            </Link>

        </div>
    );
};

export default DonationCard;
import { useEffect, useState } from "react";
import {useLoaderData, useParams} from "react-router-dom"
import DetailView from "./DetailView";

const Details = () => {

    const [card, setCard]= useState([]);
    
    const cards= useLoaderData();
    const {id}= useParams();
    const idInt= parseInt(id);

    useEffect(()=>{
        const getCard= cards.find(card=> card.id=== idInt);
        setCard(getCard);
    },[cards,idInt])

    
    return (
        <div>
            <DetailView card={card}></DetailView>
            
        </div>
    );
};

export default Details;
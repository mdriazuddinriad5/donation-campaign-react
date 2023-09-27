import { useEffect, useState } from "react";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

const Statistics = () => {
    const [totalItem, setTotalItem] = useState(0);
    const [donatedItems, setDonatedItems] = useState(0);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => {
                setTotalItem(data.length);

                const donatedList = [];
                const donatedCards = JSON.parse(localStorage.getItem('donatedList'));
                if (donatedCards) {
                    donatedList.push(...donatedCards);
                }
                const donatedCount = donatedList.length;
                setDonatedItems(donatedCount);
            });
    }, []);

    const donatedPercentage = (donatedItems / totalItem) * 100;
    const notDonatedPercentage = ((totalItem - donatedItems) / totalItem) * 100;

    const data = [
        { name: "Your Donation", value: donatedPercentage },
        { name: "Total Donation", value: notDonatedPercentage },
    ];

    const COLORS = ["#00C49F", "#FF444A"];


    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };


    const divStyle = {
        width: '100px',
        height: '12px',
    };

    return (
        <div>
            <ResponsiveContainer width="100%" height={500}>
                <PieChart width={700} height={700}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        dataKey="value"
                        label={renderCustomizedLabel}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>


            <div className="flex flex-col md:flex-row justify-center md:gap-14 -mt-28">
                <div className="flex justify-center items-center gap-4">
                    <p>Your Donation</p>
                    <div className="bg-[#00C49F]" style={divStyle}></div>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <p>Total Donation</p>
                    <div className="bg-[#FF444A]" style={divStyle}></div>
                </div>
            </div>

        </div>
    );
};

export default Statistics;

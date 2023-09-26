

const Banner = () => {

    return (
        <div>
            <div className="hero h-[50vh] relative">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'url(https://i.ibb.co/8mgYCY3/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></div>
                <div className="bg-white bg-opacity-95 absolute inset-0"></div>
                <div className="hero-content text-center text-neutral-content relative z-10">
                    <div>
                        <h1 className="mb-10 text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <input type="text" placeholder="Search here" className="input input-bordered border-[#DEDEDE] input-primary w-full max-w-xs focus:border-none" />
                        <button className="py-3 px-6 rounded-lg bg-[#FF444A] border-none text-[#FFFFFFF2]">Search</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;
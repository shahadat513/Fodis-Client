const Special = () => {
    return (
        <div>
            <div className="bg-gray-50 py-12">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Chef`s Special</h2>
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <img
                            src="https://i.ibb.co.com/bvqssBV/pexels-farhad-5713767.jpg"
                            alt="Chef's Special"
                            className="rounded-lg shadow-lg w-full lg:w-1/2"
                        />
                        <div className="lg:w-1/2">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Grilled Salmon with Lemon Butter</h3>
                            <p className="text-gray-600 mb-4">
                                A delicately grilled salmon fillet, paired with our house-made lemon butter sauce, served with seasonal
                                vegetables and wild rice.
                            </p>
                            <p className="text-gray-800 font-bold text-lg">Price: $24.99</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Special;

import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FoodDetails = () => {
    const { id } = useParams();
    console.log(id);

    const [food, setFood] = useState(null);
    const [loading, setLoading] = useState(true);
    const [purchaseCount, setPurchaseCount] = useState(0);

    useEffect(() => {
        // Fetch food details
        fetch(`https://fodis-server.vercel.app/allFood/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setFood(data);
                setLoading(false);
            })
            .catch((err) => console.error("Failed to fetch food:", err));

        // Fetch purchase count
        fetch(`https://fodis-server.vercel.app/purchaseCount/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPurchaseCount(data.purchaseCount || 0);
            })
            .catch((err) => console.error("Failed to fetch purchase count:", err));
    }, [id]);

    if (loading) {
        return <p className="text-center text-xl font-bold">Loading...</p>;
    }

    if (!food) {
        return <p className="text-center text-xl font-bold">Food not found.</p>;
    }

    const { name, category, price, image, description, rating, quantity, origin } = food;

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
            <div className="w-9/12 p-10 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 justify-center">
                        <img src={image} alt={name} className="md:h-96 md:w-96 object-cover rounded-2xl" />
                    </div>
                    <div className="lg:w-1/2 p-6">
                        <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">{name}</h2>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Category:</span> {category}
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Price:</span> ${price}
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Quantity:</span> <span className="text-red-600">{quantity}</span>
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Origin:</span> <span className="text-red-600">{origin}</span>
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Rating:</span> {rating} <span className="text-yellow-500">★★★★★</span>
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Purchase Count:</span> {purchaseCount}
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Description:</span> {description}
                        </p>
                        <NavLink to={`/foodPurchase/${id}`}>
                            <h1 className="btn btn-error mt-5 text-right justify-end">Purchase</h1>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;

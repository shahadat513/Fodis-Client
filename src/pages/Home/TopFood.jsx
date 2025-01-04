import { useEffect, useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const TopFood = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate(); // For navigation
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fodis-server.vercel.app/allFood")
            .then((res) => res.json())
            .then((data) => {
                setFoods(data);
                setLoading(false);
            })
            .catch((err) => console.error("Failed to fetch food items:", err));
    }, []);

    const handlePurchaseClick = (foodId) => {
        if (!user) {
            navigate("/login"); // Redirect to login page if no user is logged in
        } else {
            navigate(`/details/${foodId}`); // Navigate to food details if user is logged in
        }
    };

    if (loading) {
        return <p className="text-center text-xl font-bold">Loading...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8 text-black">
            <h1 className="text-6xl font-bold text-center mb-8">Top Foods</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {foods.slice(0, 6).map((food) => {
                    const isOwner = user?.email === food.emailUser; // Check if the user owns the food item
                    const isOutOfStock = food.stock === 0; // Check if the item is out of stock

                    return (
                        <div
                            key={food._id}
                            className="p-6 bg-white shadow-lg rounded-lg flex flex-col justify-between"
                        >
                            <img
                                src={food.image}
                                alt={food.name}
                                className="h-40 w-full object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-bold">{food.name}</h2>
                            <p>Category: {food.category}</p>
                            <p>Price: ${food.price}</p>
                            <p>Available Stock: {food.stock}</p>
                            <p>Rating: {food.rating} ★</p>

                            {isOutOfStock && (
                                <p className="text-red-500 font-bold mt-4">
                                    This item is out of stock.
                                </p>
                            )}

                            {user && isOwner && (
                                <p className="text-yellow-500 font-bold mt-4">
                                    You cannot purchase your own food item.
                                </p>
                            )}

                            <div className="mt-4">
                                <button
                                    onClick={() => handlePurchaseClick(food._id)}
                                    className={`btn ${
                                        isOutOfStock || (user && isOwner)
                                            ? "btn-disabled"
                                            : "btn-primary"
                                    }`}
                                    disabled={isOutOfStock || (user && isOwner)}
                                >
                                    {isOutOfStock
                                        ? "Out of Stock"
                                        : user && isOwner
                                        ? "Your Item"
                                        : "Purchase"}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="text-center mt-8">
                <NavLink to="/allFoods">
                    <button className="btn bg-gradient-to-r from-teal-400 via-green-400 to-lime-500 text-white px-4 py-2 rounded-lg">
                        See All
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default TopFood;

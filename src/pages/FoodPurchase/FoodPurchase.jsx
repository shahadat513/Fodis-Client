import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FoodPurchase = () => {
    const { user } = useContext(AuthContext);
    const food = useLoaderData();
    const navigate = useNavigate();

    const { _id, name, price, stock, emailUser: ownerEmail } = food;
    const [quantity, setQuantity] = useState(1); // Default quantity is 1
    const [error, setError] = useState(""); // Validation error message

    // Handle undefined or null stock
    const isOutOfStock = stock === undefined || stock <= 0;
    const isOwner = user?.email === ownerEmail;

    const handleQuantityChange = (event) => {
        const enteredQuantity = parseInt(event.target.value, 10);
        if (enteredQuantity > 0) {
            setQuantity(enteredQuantity);
            if (enteredQuantity > stock) {
                setError(`You cannot purchase more than ${stock} items.`);
            } else {
                setError(""); // Clear error if quantity is valid
            }
        } else {
            setQuantity(1); // Reset to 1 for invalid input
            setError("Quantity must be at least 1.");
        }
    };

    const handlePurchase = (event) => {
        event.preventDefault();
    
        if (quantity > stock) {
            Swal.fire({
                title: "Warning!",
                text: `You cannot purchase more than ${stock} items.`,
                icon: "warning",
            });
            return;
        }
    
        const form = event.target;
        const nameUser = form.nameUser.value;
        const emailUser = form.emailUser.value;
        const buyingDate = form.buyingDate.value;
    
        const purchaseProducts = {
            purchase_id: _id,
            nameUser,
            emailUser,
            name,
            price,
            quantity, // Use user-specified quantity
            buyingDate,
        };
    
        // Send request to the backend
        fetch(`https://fodis-server.vercel.app/food-Purchase`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(purchaseProducts),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Product Purchased Successfully",
                        icon: "success",
                    });
                    form.reset();
                    navigate("/MyOrders");
                }
            })
            .catch((error) => {
                console.error("Error adding product:", error);
            });
    };

    return (
        <div className="bg-base-300">
            <div className="w-11/12 mx-auto py-24">
                <h1 className="text-3xl font-bold text-center pb-5">Purchase Product</h1>
                <form onSubmit={handlePurchase}>
                    {/* User Details */}
                    <div className="md:flex gap-8">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Buyer Name</span>
                            </div>
                            <input
                                type="text"
                                name="nameUser"
                                value={user?.displayName || ""}
                                className="input input-bordered w-full"
                                readOnly
                            />
                        </label>
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Buyer Email</span>
                            </div>
                            <input
                                type="email"
                                name="emailUser"
                                value={user?.email || ""}
                                className="input input-bordered w-full"
                                readOnly
                            />
                        </label>
                    </div>

                    {/* Food Details */}
                    <div className="md:flex gap-8 pb-3">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Food Name</span>
                            </div>
                            <input
                                value={name}
                                type="text"
                                name="itemName"
                                className="input input-bordered w-full"
                                readOnly
                            />
                        </label>
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Price</span>
                            </div>
                            <input
                                value={price}
                                type="number"
                                name="price"
                                className="input input-bordered w-full"
                                readOnly
                            />
                        </label>
                    </div>

                    {/* Quantity */}
                    <div className="md:flex gap-8 pb-3">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Quantity</span>
                            </div>
                            <input
                                type="number"
                                name="quantity"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="input input-bordered w-full"
                                disabled={isOutOfStock || isOwner}
                            />
                        </label>
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-red-500 font-bold mt-2">{error}</p>}

                    {/* Hidden Date */}
                    <input
                        type="hidden"
                        name="buyingDate"
                        value={new Date().toLocaleString()} // Current date and time
                    />

                    {/* Warnings */}
                    {isOutOfStock && (
                        <p className="text-red-500 font-bold mt-4">
                            This item is out of stock.
                        </p>
                    )}
                    {isOwner && (
                        <p className="text-yellow-500 font-bold mt-4">
                            You cannot purchase your own food item.
                        </p>
                    )}

                    {/* Submit Button */}
                    <input
                        className={`w-full p-2 ${isOutOfStock || isOwner ? "bg-gray-400 cursor-not-allowed" : "bg-gray-600 text-white cursor-pointer"} mt-4`}
                        type="submit"
                        value="Purchase"
                        disabled={isOutOfStock || isOwner}
                    />
                </form>
            </div>
        </div>
    );
};

export default FoodPurchase;

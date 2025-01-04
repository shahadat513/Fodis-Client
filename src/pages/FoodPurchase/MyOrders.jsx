import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const MyFoods = () => {
    const { user } = useContext(AuthContext);
    const [food, setFood] = useState([]);

    const axiosSecure = useAxiosSecure()

    // Fetch the food items associated with the logged-in user
    useEffect(() => {
        if (user?.email) {
            // fetch(`https://fodis-server.vercel.app/food-purchase?email=${user.email}`)
            //     .then((res) => res.json())
            //     .then((data) => setFood(data))
            //     .catch((error) => console.error("Error fetching food items:", error));

            axiosSecure.get(`/food-purchase?email=${user.email}`)
            .then(res=>setFood(res.data))
        }
    }, [axiosSecure, user.email]);

    // Handle delete operation for a specific food item
    const handleDelete = (foodId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fodis-server.vercel.app/food-purchase/${foodId}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your food item has been deleted.",
                                icon: "success",
                            });

                            // Remove the deleted item from the state
                            setFood((prevFood) =>
                                prevFood.filter((item) => item._id !== foodId)
                            );
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "Failed to delete the product.",
                                icon: "error",
                            });
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting product:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the product.",
                            icon: "error",
                        });
                    });
            }
        });
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center py-10">
                My Orders: {food.length}
            </h1>
            <div className="w-11/12 mx-auto my-4">
                <table className="table w-full text-left">
                    <thead>
                        <tr className="bg-gray-500 text-white">
                            <th>Image</th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th>Buying Time</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {food.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    <div className="flex items-center">
                                        <div className="mask mask-squircle h-16 w-16">
                                            <img
                                                src={item.image}
                                                alt={item.name || "Product Image"}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="text-left">{item.name}</td>
                                <td className="text-left">{item.price}$</td>
                                <td className="text-left">{item.buyingDate}</td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn text-blue-500 btn-link"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoods;

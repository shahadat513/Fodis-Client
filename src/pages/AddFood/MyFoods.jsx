import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const MyFoods = () => {
    const { user } = useContext(AuthContext);
    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(true);

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/allFoodShow?email=${user.email}`)
                .then(res => {
                    setFood(res.data);
                    setLoading(false);
                });
        }
    }, [axiosSecure, user.email]);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center py-10">My Foods : {food.length}</h1>
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="w-11/12 mx-auto my-4">
                    {/* Product Table */}
                    <table className="table w-full text-left">
                        <thead>
                            <tr className="bg-gray-500 text-white">
                                <th>Image</th>
                                <th>Food Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                food.map(food => <tr key={food._id}>
                                    <td>
                                        <div className="flex items-center">
                                            <div className="mask mask-squircle h-16 w-16">
                                                <img
                                                    src={food.image}
                                                    alt={food.name || "Product Image"}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-left">{food.name}</td>
                                    <td className="text-left">{food.price}$</td>
                                    <td className="text-left"><NavLink to={`/updateFood/${food._id}`}><div className="btn text-blue-500 btn-link">Update</div></NavLink></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default MyFoods;

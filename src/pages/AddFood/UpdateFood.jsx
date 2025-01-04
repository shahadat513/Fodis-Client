import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
    const { user } = useContext(AuthContext);
    const food = useLoaderData();
    const navigate = useNavigate();

    const { _id, name, price, category, description, origin, stock, rating, image } = food;

    const handleUpdate = (event) => {
        event.preventDefault();

        const form = event.target;

        const nameUser = form.nameUser.value;
        const emailUser = form.emailUser.value;
        const name = form.itemName.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = parseFloat(form.price.value); // Ensure correct data type
        const stock = parseInt(form.stock.value);   // Ensure correct data type
        const rating = parseFloat(form.rating.value); // Ensure correct data type
        const image = form.image.value;
        const origin = form.origin.value;

        const updatePurchase = {
            nameUser,
            emailUser,
            name,
            category,
            description,
            price,
            stock,
            rating,
            image,
            origin,
        };

        console.log("Update Data to Send:", updatePurchase);

        fetch(`https://fodis-server.vercel.app/allFood/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatePurchase),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Response from server:", data);

                if (data.matchedCount > 0 || data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Food updated successfully",
                        icon: "success",
                    });
                    form.reset();
                    navigate("/myFood");
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "No matching record found to update.",
                        icon: "error",
                    });
                }
            })
            .catch((error) => {
                console.error("Error updating product:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to update the food item.",
                    icon: "error",
                });
            });
    };

    return (
        <div className="bg-base-300">
            <div className="w-11/12 mx-auto py-24">
                <h1 className="text-3xl font-bold text-center pb-5">Update Food</h1>
                <form onSubmit={handleUpdate}>
                    {/* User Details Row */}
                    <div className="md:flex gap-8">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">User Name</span>
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
                                <span className="label-text text-xl font-semibold">User Email</span>
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

                    {/* Form Inputs */}
                    <div className="md:flex gap-8 pb-3">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Food Name</span>
                            </div>
                            <input
                                defaultValue={name}
                                type="text"
                                name="itemName"
                                placeholder="Enter Food Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Food Category</span>
                            </div>
                            <input
                                defaultValue={category}
                                type="text"
                                name="category"
                                placeholder="Enter Food Category"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="md:flex gap-8 pb-3">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Description</span>
                            </div>
                            <input
                                defaultValue={description}
                                type="text"
                                name="description"
                                placeholder="Enter Food Description"
                                className="input input-bordered w-full"
                            />
                        </label>
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Price</span>
                            </div>
                            <input
                                defaultValue={price}
                                type="number"
                                name="price"
                                placeholder="Enter Food Price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="md:flex gap-8 pb-3">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Food Origin</span>
                            </div>
                            <input
                                defaultValue={origin}
                                type="text"
                                name="origin"
                                placeholder="Enter Country Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Stock Status</span>
                            </div>
                            <input
                                defaultValue={stock}
                                type="number"
                                name="stock"
                                placeholder="Enter Food Quantity"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="md:flex gap-8 pb-3">
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Rating</span>
                            </div>
                            <input
                                defaultValue={rating}
                                type="number"
                                name="rating"
                                placeholder="Enter Food Rating"
                                className="input input-bordered w-full"
                            />
                        </label>
                        <label className="form-control md:w-1/2">
                            <div className="label">
                                <span className="label-text text-xl font-semibold">Image URL</span>
                            </div>
                            <input
                                defaultValue={image}
                                type="text"
                                name="image"
                                placeholder="Enter Food Image URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <input
                        className="w-full p-2 bg-gray-600 text-white mt-4 cursor-pointer"
                        type="submit"
                        value="Update Food"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddFood = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const nameUser = form.nameUser.value;
        const emailUser = form.emailUser.value;
        const name = form.itemName.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const stock = form.stock.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const origin = form.origin.value;

        const allFoods = {
            nameUser, // User name
            emailUser, // User email
            name,
            category,
            description,
            price,
            stock,
            rating,
            image,
            origin
        };
        console.log(allFoods);

        // Send data to the server
        fetch('https://fodis-server.vercel.app/allFood', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allFoods),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Good job!',
                        text: 'Food Added Successfully',
                        icon: 'success',
                    });
                    form.reset(); // Reset the form after submission
                }
            })
            .catch((error) => {
                console.error('Error adding Food:', error);
            });
    };

    return (
        <>
            <div className="bg-base-300">
                <div className="w-11/12 mx-auto py-24">
                    <h1 className="text-3xl font-bold text-center pb-5">Add Food</h1>
                    <form onSubmit={handleSubmit}>
                        {/* User Details Row */}
                        <div className="md:flex gap-8">
                            <label className="form-control md:w-1/2">
                                <div className="label">
                                    <span className="label-text text-xl font-semibold">User Name</span>
                                </div>
                                <input
                                    type="text"
                                    name="nameUser"
                                    value={user?.displayName || ''}
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
                                    value={user?.email || ''}
                                    className="input input-bordered w-full"
                                    readOnly
                                />
                            </label>
                        </div>

                        {/* Rest of the Form */}
                        <div className="md:flex gap-8 pb-3">
                            <label className="form-control md:w-1/2">
                                <div className="label">
                                    <span className="label-text text-xl font-semibold">Food Name</span>
                                </div>
                                <input
                                    type="text"
                                    name="itemName"
                                    placeholder="Enter Food Name"
                                    className="input input-bordered w-full"
                                />
                            </label>
                            <label className="form-control md:w-1/2">
                                <div className="label">
                                    <span className="label-text text-xl font-semibold"> Food Category</span>
                                </div>
                                <input
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
                            value="Add Food"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddFood;
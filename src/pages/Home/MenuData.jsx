
const MenuData = ({ food }) => {

    const { _id, name, price, image, description } = food

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name}
                    className="w-28 h-28 rounded-full" />
            </figure>
            <div className="card-body flex flex-row justify-center items-center">
                <div>
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                </div>
                <div>
                    <p className="text-xl font-semibold">${price}</p>
                </div>
            </div>
        </div>
    );
}

export default MenuData;

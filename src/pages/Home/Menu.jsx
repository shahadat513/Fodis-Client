import { useEffect, useState } from "react";
import MenuData from "./MenuData";

const Menu = () => {
    const [food, setFood] = useState([])

    useEffect(() => {
        fetch('https://fodis-server.vercel.app/allFood')
            .then(res => res.json())
            .then(data => {
                setFood(data);
            })
    }, [])

    return (
        <>
            <div className="mt-28">
                <h1 className="text-6xl font-bold text-center mb-2">Fodis Foods Menu</h1>
                <hr className="w-9/12 mx-auto text-black font-bold p-4" />
            </div>
            {
                <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-8 my-8">
                    {
                        food?.map((food) => (<MenuData key={food._id} food={food}></MenuData>))
                    }
                </div>
            }
        </>
    );
}

export default Menu;

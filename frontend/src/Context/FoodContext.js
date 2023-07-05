import { createContext, useState } from "react";

export const FoodContext = createContext();
export const FoodProvider = ({ children }) => {
    const [food, setFood] = useState(null);

    const foodSetter = (food) => {
        setFood(food)
    }
    return <FoodContext.Provider value={{ food, foodSetter }}>{children}</FoodContext.Provider>
}


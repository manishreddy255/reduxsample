import { ADD_CAKE, BUY_CAKE } from "./cakeType"

export const BuyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
        
    }
}

export const AddCake = () => {
    return {
        type: ADD_CAKE
    }
}
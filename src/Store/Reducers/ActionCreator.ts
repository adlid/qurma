import axios from "axios";
import { AppDispatch } from "../store";


export const fetchUsers = () => async(dispatch:AppDispatch) =>{
    try{
        const responce = await axios.get('url')
    }catch(e){

    }
}
import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin= ()=>{
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login = async (username,password)=>{
        const success = handleInputErrors({username,password})
        if(!success){
            return;
        }
        try {
            const res = await fetch("/api/auth/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password})
            })
            const data = await res.json();
            if(data.error){
                toast.error(data.error);
                return;
            }
            localStorage.setItem("chat-user",JSON.stringify(data));
            console.log(data._id);
            setAuthUser(data)
            
        } catch (error) {
            toast.error(error)
        }
        finally{
            setLoading(false)
        }
    }
    return {loading,login};
}

export default useLogin;

function handleInputErrors({username,password}){

    console.log(username,password)
    if(!username || !password){
        
        toast.error("please fill all the fields")
        return false;
    }

    return true;

}
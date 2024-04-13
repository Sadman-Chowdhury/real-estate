import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext)

    return (
        <div className="mt-16 space-y-10">
            <h1 className="text-6xl text-center">Welcome <span className="text-green-700 font-extrabold">{user.displayName}</span> !</h1>
            <div className="flex justify-center items-center">
            <div className="w-fit space-y-7 p-10 rounded-xl shadow-2xl">
                <img className="rounded-2xl w-[400px] h-full" src={user.photoURL} alt="" />
                <h1 className="text-3xl text-center">Name: <span className="text-green-700 font-extrabold">{user.displayName}</span></h1>
                <h1 className="text-2xl text-center">Email: <span className="font-bold">{user.email}</span></h1>
            </div>
            </div>
        </div>
    ); 
};

export default UserProfile;
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
    const {user, setUser} = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const [photoURL, setPhotoURL] = useState(user.photoURL);

    const handleUpdateProfile = async(e)=>{
        e.preventDefault();

        try {
            await updateProfile(user, { displayName: name, photoURL });
            setUser({ ...user, displayName: name, photoURL });
            // setUpdateSuccess(toast.success('User profile updated successfully'));
            toast.success('User profile updated successfully')
        } catch(error){
            console.error(error);
            // setUpdateError(toast.error('Update was unsuccessful'));
            toast.error('Update was unsuccessful')
        }
    };

    return (
        <div className="mt-16">
            <Helmet>
            <title>Update Profile | Dream Land</title>
            </Helmet>
            <ToastContainer></ToastContainer>
            <h2 className="text-4xl text-green-700 font-bold underline text-center">Update Profile</h2>
            <form onSubmit={handleUpdateProfile} className="card-body p-20 shadow-2xl rounded-2xl mt-5 w-3/5 mx-auto">
                <div className="form-control">
                    <label className="text-xl font-bold">Name:</label>
                    <input className="input input-bordered bg-gray-100" type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                </div>
                <div className="form-control">
                    <label className="text-xl font-bold">Photo URL:</label>
                    <input className="input input-bordered bg-gray-100" type="text" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} /> <br />
                </div>
                <div className="form-control">
                    <label className="text-xl font-bold">Email:</label>
                    <input className="input input-bordered bg-gray-100" type="text" value={user.email} /> <br />
                </div>
                <button className="btn border-green-300 bg-white text-green-600">Update</button>
            </form>
            {/* {updateSuccess && <p>{updateSuccess}</p>}
            {updateError && <p>{updateError}</p>} */}
        </div>
    );
};

export default UpdateProfile;

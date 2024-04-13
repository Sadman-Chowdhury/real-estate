import { useParams } from "react-router-dom";


const LandDetails = () => {
    const {estate_title, image, description, detail_description, status, facilities, price, area, location, id} = useParams()

    return (
        <div>
            <h2>{id}</h2>
        </div>
    );
};

export default LandDetails;
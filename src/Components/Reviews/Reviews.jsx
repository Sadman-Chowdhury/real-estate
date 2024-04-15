import { useLoaderData } from "react-router-dom";
import Review from "../Review/Review";

const Reviews = () => {
    const review = useLoaderData()

    return (
        <div className='mt-10'>
            <div className="text-center">
            <h2 className='text-5xl font-bold text-green-600 text-center mt-14 mb-6 underline'>Client's Review</h2>
            <p className="text-xl font-bold mb-10">These are the reviews of our previously sold properties from our beloved buyers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    review.map(review=><Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
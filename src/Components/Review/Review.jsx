
const Review = ({review}) => {

    const {estate_title, userName, userReview, rating, img} = review

    return (
        <div>
            <div className="work-sans border rounded-2xl p-10 shadow-2xl">
                        <div className="space-y-3">
                            <img className="h-[300px] rounded-xl w-full" src={img} alt="" />
                            <h1 className="text-[24px] font-bold playfair">{estate_title}</h1>
                            <p className="text-[16px] font-medium text-[#131313B3]">Comment: {userReview}</p>
                            <p className="text-[16px] font-medium">Reader: {userName}</p>
                            <hr className="border-dashed"/>
                            <div className="flex gap-6">
                                <span className="px-5 py-2 bg-green-100 rounded-[30px] text-green-600 font-bold">Rating: {rating}</span>
                            </div>
                        </div>
            </div>
        </div>
    );
};

export default Review;
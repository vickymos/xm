import { Link } from "react-router-dom";
import SplashImage from "../images/burger-1920-min.jpeg";

const Homepage = () => {
    return (
        <>

            <div className="mb-48 promo">

                <div className="bg-white p-24 rounded-lg flex flex-col justify-center items-center">

                    <div className="promo__text mb-16 font-bold text-center p-24">
                        <p>
                            Every day, more than 11 million guests order online from Burger Inc. restaurants around the world.
                        </p>
                        <p>
                            And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food.
                        </p>
                        <p>
                            You now have the great opportunity to create your custom burger!
                        </p>
                    </div>

                    <Link to={'/make-a-burger'} className="button button--ghost mb-48">
                        Create your burger
                    </Link>
                </div>

                <div className="flex flex-col items-center bg-white rounded-lg relative shadow relative">

                    <picture className="">
                        <source media="(min-width: 766px)" srcSet={`${SplashImage}, ${SplashImage} 2x`} />
                        <img src={`${SplashImage}`} alt="Burger Inc. Logo" width="1920" height="1278" className="rounded-lg shadow promo__image" />
                    </picture>

                </div>

            </div>

        </>
    );
};
export default Homepage  

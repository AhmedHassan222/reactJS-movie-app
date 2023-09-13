import { Link } from "react-router-dom";
import style from "./Notfound.module.css";
import { Helmet } from "react-helmet";
export default function Notfound() {
    return <>
        <Helmet>
            <title>Not Found Page</title>
        </Helmet>
        <div className="d-flex justify-content-center align-items-center w-100 vh-100 text-center text-white">
            <div>
                <h2 className={`h1 ${style.h2Style}`}>ERORR 404 </h2>
                <h2 className={`h1 mt-3 mb-5  ${style.h2Style}`}>This Page is Not Found</h2>
                <p className="fs-4">Return to <Link className={`${style.link}`} to=" ">Home Page</Link></p>
            </div>
        </div>


    </>
}
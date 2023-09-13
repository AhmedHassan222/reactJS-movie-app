import { Helmet } from "react-helmet"

export default function Noconnected() {

    return <>
        <Helmet>
            <title>No internet connection</title>
        </Helmet>
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center text-white text-center " >
            <div>
                <i class="fa-solid fa-wifi mb-5 fs-1"></i>
                <h3 className="fs-1">No internet</h3>
                <h3 className="fs-4">Reconnecting to Wi-Fi</h3>
            </div>
        </div>
    </>
}
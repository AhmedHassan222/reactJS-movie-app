
import { useContext, useEffect } from "react"
import style from "./Favarite.module.css"
import { favariteContext } from "../../Context/Favaritestore"
import { Helmet } from "react-helmet"
export default function Favarite() {
    let { favariteArr, clearAll, clearItem } = useContext(favariteContext)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return <>

        <Helmet>
            <title>Favarites Page </title>
        </Helmet>
        <div className={`container  ${style.favarite} `}>
            <div className="row g-2">
                <div className="d-flex ">
                    <p className={`my-3 text-white h6 ${style.title}`}>The Items that you added in Favorites</p>
                    {localStorage.getItem('favariteArr') !==null ? <button  onClick={clearAll} className={`${style.btnStyle} ms-5 py-0 px-5`}>Clear All</button> : ''}
                </div>
                {localStorage.getItem('favariteArr') === null ? <p className="text-danger">*No Item added yet</p> : '  '}


                {Array.from(new Set(favariteArr)).map((movie, index) => (
                    <div key={index} className="col-6 col-sm-6 col-md-4 col-lg-3 py-4">
                        <div className="position-relative">
                            <img className="w-100 " src={'https://image.tmdb.org/t/p/w500/' + movie} alt="" />

                            <div onClick={() => { clearItem(movie) }} className={`position-absolute m-2 fs-2 ${style.xStyle} rounded-circle top-0 end-0 text-white `}>
                                <i class="fa-solid fa-x" ></i>                </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>




    </>
}


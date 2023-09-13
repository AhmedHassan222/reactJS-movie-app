
import { Link, useParams } from "react-router-dom"
import style from "./Peopledetails.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { Helmet } from "react-helmet"
import { useContext } from "react"
import { favariteContext } from "../../Context/Favaritestore"
export default function Peopledetails() {
    let { addToFavarite  , warning , signInNow} = useContext(favariteContext)

    let params = useParams()

    const [itemdetails, setItemdetails] = useState({})
    async function getItem(id) {
        let { data } = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US`)
        setItemdetails(data)
    }
    useEffect(() => {
        window.scrollTo(0,0)
        getItem(params.id)
    }, [])
    return <>
        <Helmet>
            <title>{itemdetails.name}</title>
        </Helmet>

        <div className="container ">
            {itemdetails.profile_path !== undefined ?             <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-5 ">
                    <div>
                        <img className="w-100 " src={'https://image.tmdb.org/t/p/w500/' + itemdetails.profile_path} alt="" />

                    </div>
                </div>
                <div className={` col-sm-12 col-md-7 col-lg-7 ${style.right}`}>
                    <div className="text-white ">
                        <h1 className="fs-4 mb-4"><span className="fw-bold fs-4 ">Satar Name :</span>  <span className={`${style.special}`}>{itemdetails.name}</span></h1>
                        <p className="mb-4"> <span className="fw-bold fs-4 ">Over view :</span> <span className={`${style.special} `}>{itemdetails.biography}</span></p>
                        <p className="mb-4">  <span className="fw-bold fs-4 ">Date Of birthday: </span><span className={`${style.special}`}>{itemdetails.birthday}</span></p>
                        <p className="mb-4"> <span className="fw-bold fs-4 ">place of birth :</span>  <span className={`${style.special}`}>{itemdetails.place_of_birth}</span></p>
                        <p className="mb-4"> <span className="fw-bold fs-4 ">known for department :</span>  <span className={`${style.special}`}>{itemdetails.known_for_department}</span></p>
                        <button onClick={()=>addToFavarite(itemdetails.profile_path)} className={`mb-4 btn ${style.btnStyle} px-3 py-2  fw-bold`}>
                            Add To Favarite
                        </button>
                        {localStorage.getItem('user') === null ?
                            <div className="mb-5">
                                <p className="text-danger">{warning}</p>
                                <Link className={`text-white ${style.buttonStyleLogin} mt-3`} to='/login'>{signInNow} </Link>
                            </div> : ''}

                    </div>
                </div>
            </div> : <div className="row">
                <div className="col-sm-12 col-md-5 col-lg-5">
                    <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpPUeTvF_pPqrSmkYd3cJlM32f6Axh0tCwg&usqp=CAU" class="card-img-top" alt="..." />

                </div>
                <div className={` col-sm-12 col-md-7 col-lg-7 ${style.right}`}>
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>
                    </div>
                </div>
            </div>}
        </div>


    </>
}
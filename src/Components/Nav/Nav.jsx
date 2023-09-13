import { Link, useNavigate } from "react-router-dom"
import style from "./Nav.module.css"
import Search from './../Search/Search';
import { useContext , useEffect } from "react";
import { favariteContext } from "../../Context/Favaritestore";

export default function Nav({ decodeToken }) {
    let { count, setCount, setFavariteArr } = useContext(favariteContext)

    let navigate = useNavigate()
    function logout() {
        localStorage.removeItem('user')
        setCount(0)
        setFavariteArr([])
        navigate('/login')
    }

    useEffect(() => {
        console.log('hello')
    }, [])
    return <>
        <nav className={` navbar bg navbar-expand-lg   ${style.bg}   pt-2 pb-3`}>
            <div className="container  ">
                <h5 className={`   align-self-end  fw-bold text-white ${style.textStyle}`} >NOXE</h5>
                <button id="small" className={`${style.menu}`} type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-label="Toggle navigation">
                    <i class="fa-solid  fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse layerr " id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto fs-6  align-items-center">
                        <Link  className={` nav-link text-white text-center fw-bold  ${style.decorationNone} ${style.link} mx-1`} to="">Home</Link>
                        <Link  className={`nav-link text-white text-center fw-bold  ${style.decorationNone} ${style.link} mx-1`} to="movies">Movies</Link>
                        <Link  className={`nav-link text-white text-center fw-bold  ${style.decorationNone} ${style.link} mx-1`} to="tv">Tv Shows</Link>
                        <Link  className={`nav-link text-white text-center fw-bold  ${style.decorationNone} ${style.link} mx-1`} to="people">Stars</Link>
                        <Link  className={`nav-link text-white text-center fw-bold  ${style.decorationNone} ${style.link} ms-1`} to="favarite"><i class="fa-solid fa-star"></i> Favarite {count !== 0 ? <span className="bg-danger py-1 px-2 ms-1 rounded-circle text-white">{count}</span> : ''} </Link>
                        <div className={`nav-link text-white text-center fw-bold  ${style.positionStyle} ${style.decorationNone} ${style.link} mx-1`} >
                            <Search />
                        </div>




                    </div>


                    <div >

                        {localStorage.getItem('user') !== null ? <div className="navbar-nav ms-auto  fs-6">
                            <span className={`nav-link text-white text-center fw-bold   ${style.decorationNone} ${style.link} mx-1`} >Hi {decodeToken}</span>
                            <span onClick={logout} className={`nav-link text-white text-center fw-bold  ${style.decorationNone} ${style.link} mx-1`} >Log Out <i class="fa-solid fa-right-from-bracket"></i></span>

                        </div>
                            : <div className="navbar-nav ms-auto fs-6">
                                <Link  className={`nav-link text-white text-center fw-bold  ${style.decorationNone} ${style.link} mx-1`} to="login"> <i class="fa-solid fa-user"></i> Sign In</Link>
                                <Link  className={`nav-link text-white text-center fw-bold  ${style.decorationNone}   ${style.special} mx-1`} to="register"> Sign Up</Link>

                            </div>


                        }

                    </div>
                </div>
            </div>

        </nav>

    </>
}



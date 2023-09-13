import { Link } from 'react-router-dom'
import style from './Slider.module.css'
import { favariteContext } from '../../Context/Favaritestore'
import { useContext, useEffect } from 'react'

export default function Slider() {
    let { trendingMovies, trendingTv, trendingPeople } = useContext(favariteContext)
    

    return <>
        <div className="container py-5">
            <h3 className={`  ${style.title} text-white `}>
                Trending Movies...
            </h3>
            <div className="row my-5 g-2">
                {trendingMovies.slice(0,6).map((movie, index) => <div key={index} className={`col-6 col-md-4 col-lg-2 ${style.box}`}>
                    <Link to={'/moviedetails/' + movie.id} >
                        <img className={`w-100 ${style.imgHover}`} src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt="" />
                    </Link>
                </div>)}
            </div>
            <Link className={`${style.moreBtnStyle}`} to='/movies'>More</Link>
        </div>
        <div className="container py-5">
            <h3 className={`  ${style.title} text-white `}>
                Trending Tv Shows...
            </h3>
            <div className="row my-5 g-2">
            {trendingTv.slice(0,6).map((movie, index) => <div key={index} className={`col-6 col-md-4 col-lg-2 ${style.box}`}>
                    <Link to={'/tvdetails/' + movie.id} >
                        <img className={`w-100 ${style.imgHover}`} src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt="" />
                    </Link>
                </div>)}
            </div>
            <Link className={`${style.moreBtnStyle}`} to='/tv'>More</Link>
        </div>

        <div className="container py-5">
            <h3 className={`  ${style.title} text-white `}>
                Trending Stars...
            </h3>
            <div className="row my-5 g-2">
            {trendingPeople.slice(0,6).map((movie, index) => <div key={index} className={`col-6 col-md-4 col-lg-2 ${style.box}`}>
                    <Link to={'/peopledetails/' + movie.id} >
                        <img className={`w-100 ${style.imgHover}`} src={'https://image.tmdb.org/t/p/w500/' + movie.profile_path} alt="" />
                    </Link>
                </div>)}
            </div>
            <Link className={`${style.moreBtnStyle}`} to='/people'>More</Link>
        </div>

    </>
}
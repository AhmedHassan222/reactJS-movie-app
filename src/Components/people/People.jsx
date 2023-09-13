
import style from "./People.module.css"
import { Link } from "react-router-dom"
import { favariteContext } from "../../Context/Favaritestore"
import { useContext, useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { wordContext } from "../../Context/Searchstore"
export default function People() {
    let { trendingPeople } = useContext(favariteContext)
    let { wordSearch } = useContext(wordContext)
    let items = []
    const [itemsArray, setItemsArray] = useState([])
    let arr = [0, 1, 2, 3, 4, 5, 6, 7]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        console.log(wordSearch)
        for (let i = 0; i < trendingPeople.length; i++) {
            if (trendingPeople[i].original_name.toLowerCase().includes(wordSearch.toLowerCase())) {
                items.push(trendingPeople[i])
                setItemsArray(items)
            }

        }
        console.log(itemsArray)
    }, [wordSearch])


    return <>
        <Helmet>
            <title>People Page</title>
        </Helmet>


        {itemsArray.length == 0 ? <div className="container ">
            {trendingPeople.length >= 20 ? (<div className="row">
                {Array.from(new Set (trendingPeople)).map((movie, index) => <div key={index} className="  col-6 col-sm-6 col-md-4 col-lg-3">
                    <Link to={'/peopledetails/' + movie.id} className={`${style.movie}`}>
                        <img style={{ width: "100%" }} src={'https://image.tmdb.org/t/p/w500/' + movie.profile_path} alt="" />
                        <p className="text-center text-white py-3">{movie.name}</p>
                    </Link>
                </div>
                )}
            </div>) : <div className="row g-3">
                {arr.map((loop, index) => <div key={index} className="col-sm-12 col-md-4 col-lg-3">
                    <div class="card" aria-hidden="true">
                        <img className="w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpPUeTvF_pPqrSmkYd3cJlM32f6Axh0tCwg&usqp=CAU" class="card-img-top" alt="..." />
                        <div class="card-body">

                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                            </p>
                        </div>
                    </div>
                </div>)}
            </div>}
        </div> : <div className="container ">
            <div className="row">
                {Array.from(new Set(itemsArray)).map((movie, index) => <div key={index} className="  col-6 col-sm-6 col-md-4 col-lg-3">
                    <Link to={'/peopledetails/' + movie.id} className={`${style.movie}`}>
                        <img style={{ width: "100%" }} src={'https://image.tmdb.org/t/p/w500/' + movie.profile_path} alt="" />
                        <p className="text-center text-white py-3">{movie.name}</p>
                    </Link>
                </div>)}
            </div></div>}

    </>
}

//trendingMovies
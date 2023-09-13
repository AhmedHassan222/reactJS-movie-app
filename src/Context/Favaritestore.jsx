import { createContext, useState, useEffect } from "react"
import axios from "axios"
export let favariteContext = createContext(0)
function FavariteContextProvide(props) {
    // function add to favarite >>>>>>>>>>>>>>>>>>>>>>>>>>

    const [favariteArr, setFavariteArr] = useState([])
    const [warning, setwarning] = useState('')
    const [signInNow, setSignInNow] = useState('')
    const [count, setCount] = useState(0)

    function addToFavarite(movie) {

        if (localStorage.getItem('user') !== null) {
            if (favariteArr == []) {
                setFavariteArr(movie)
                setCount(1)
                localStorage.setItem('count', 1)
            } else {
                favariteArr.push(movie)
                localStorage.setItem('count', Array.from(new Set(favariteArr)).length)
                setCount(Array.from(new Set(favariteArr)).length)

            }
            localStorage.setItem('favariteArr', JSON.stringify(favariteArr))



        } else {

            setwarning('You must Sign In before you can add item to favarite')
            setSignInNow(' Sign In Now')


        }
    }
    //function clear all
    function clearAll() {
        localStorage.removeItem('favariteArr')
        setFavariteArr([])
        setCount(0)
    }
    function clearItem(movie) {

        if (favariteArr.length == 1) {
            clearAll()
        } else {
            setFavariteArr(favariteArr.filter(function (item) {
                return item !== movie;
            }))
            localStorage.setItem('favariteArr', JSON.stringify(favariteArr.filter(function (item) {
                return item !== movie;
            })))
            setCount(count - 1)
        }


    }
    // functions get from Api .>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingTv, setTrendingTv] = useState([])
    const [trendingPeople, setTrendingPeople] = useState([])
    async function getTrendingMovies() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
        setTrendingMovies(data.results)
        
    }
    async function getTrendingTv() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
        setTrendingTv(data.results)
    }
    async function getTrendingPeople() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/person/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
        setTrendingPeople(data.results)
    }
useEffect(() => {
    getTrendingMovies();
    getTrendingTv();
    getTrendingPeople();
    if (localStorage.getItem('favariteArr')) {
        setFavariteArr(JSON.parse(localStorage.getItem('favariteArr')))
        setCount(localStorage.getItem('count'))
    } else {
        setFavariteArr([])
    }
}, [])
    return <favariteContext.Provider value={{  setCount, setFavariteArr, signInNow, trendingMovies, trendingTv, trendingPeople, count, addToFavarite, warning, favariteArr, clearAll, clearItem }}>
        {props.children}
    </favariteContext.Provider>
}
export default FavariteContextProvide;
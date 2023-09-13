import { useContext } from 'react'
import style from './Search.module.css'
import { wordContext } from './../../Context/Searchstore';
import { Link } from 'react-router-dom';
export default function Search() {
    let { search } = useContext(wordContext)




    return <>


        <div className="input-group">
            <button className={`btn text-white dropdown-toggle ${style.dropStyle}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">Type</button>
            <ul className="dropdown-menu">
                <li><Link to='/movies' className={`dropdown-item ${style.item}`}>Movies</Link></li>
                <li><Link to='/tv' className={`dropdown-item ${style.item}`}>Tv Shows</Link></li>
                <li><Link to='/people' className={`dropdown-item ${style.item}`}>Stars</Link></li>

            </ul>
            <input onChange={search} placeholder='Search' type="text" className={`form-control ${style.searchBar}`}  aria-label="Text input with 2 dropdown buttons"/>
                
        </div>



    </>
}
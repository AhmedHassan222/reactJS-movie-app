import { Helmet } from 'react-helmet';
import Slider from '../Slider/Slider';
import { Link } from 'react-router-dom';
import style from './Home.module.css'
import { useEffect, useState } from 'react';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <>


        <header className=" w-100 vh-100 d-flex align-items-center">
            <div className=" text-white shadow-0 container ">
                <h2 className={`${style.headTitle}`}> Free Movies to Watch, </h2>
                <h2 className={`${style.headTitle}`}> Anytime Anywhere.</h2>
                <p className={`${style.smallTitle} mt-4`}>The search is over! Let Noxe help you find the perfect</p>
                <p className={`${style.smallTitle} mb-5`}>movie to watch tonight for free.</p>
                {localStorage.getItem('user') == null ? <Link className={`${style.btnStyle} fw-bold `} to='/register'>Get Started</Link> : ''}
                {localStorage.getItem('user') != null ? <div className='d-flex flex-wrap justify-content-start'>
                    <Link className={`${style.btnStyle} fw-bold m-1 `} to='/movies'>Movies</Link>
                    <Link className={`${style.btnStyle} fw-bold m-1 `} to='/tv'>Tv Shows</Link>
                    <Link className={`${style.btnStyle} fw-bold m-1`} to='/People'>Stars</Link></div> : ''}
            </div>
        </header>
        <Slider />

        <Helmet>
            <title>Home Page </title>
        </Helmet>




    </>
}



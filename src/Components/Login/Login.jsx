import style from "./Login.module.css"
import LoginImage from "../../assets/loginimage.jpg"
import { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Joi from "joi";
import axios from 'axios';
import { Helmet } from 'react-helmet';
export default function Login() {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    let navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState('')
    const [errorList, setErrorList] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function getUser(e) {
        let _user = { ...user }
        _user[e.target.name] = e.target.value;
        setUser(_user)
        
    }
    function LoginValidator() {
        let schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string().pattern(/([a-zA-Z0-9]){8,}/).required(),

        })
        return schema.validate(user, { abortEarly: false })
    }
    async function sendData() {
        await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, user).then((response) => {
            localStorage.setItem('user', response.data.token);
            navigate("/");
        }).catch((error) => {
            setError(error.response.data.message);
            setIsLoading(false);


        })
    }
    function submitForm(e) {
        e.preventDefault()
        setIsLoading(true)
        let validation = LoginValidator()
        if (validation.error) {
            setIsLoading(false)
            setErrorList(validation.error.details)
        }else {
            sendData()

        }


    }
    return <>
        <Helmet>
            <title>Sign In Page</title>
        </Helmet>

        <div className={`w-100 `}>
            <div className={`row g-0 ${style.content}`}>
                <div className={`col-sm-12 col-md-6 col-lg-6 ${style.display}`}>
                    <div className='w-100'>
                        <img className={`${style.imgStyle} w-100`} src={LoginImage} alt="dsfdsfds" />

                    </div>
                </div>
                <div className={`col-sm-12 col-md-6 col-lg-6  ${style.box}`}>
                    <form onSubmit={submitForm} action="" className='w-75 mx-auto'>
                        <h3 className=' text-start text-white mb-5'>Sign In |</h3>
                        {errorList.length > 0 ? <div>
                            <ul className='p-1 text-danger'>
                                {errorList.map((error, index) => error.context.label == "password" ? <li key={index} className='p-1 '>password must more than 8 letter</li> : <li className='p-1' key={index} >{error.message}</li>)}

                            </ul>
                        </div> : ""}
                        <div className={`${style.group}`}>
                            <input onChange={getUser} className={`${style.special}  text-white bg-transparent`} placeholder="Email Addriss" type="email" name="email" id="email" />
                        </div>
                        <div className={`${style.group}`}>
                            <input onChange={getUser} className={`${style.special}  text-white bg-transparent`} placeholder="Password" type="password" name="password" id="password" />
                        </div>
                        {error !== '' ? <p className='text-danger fs-6 '>*{error}</p> : ''}
                        <button   type="submit" className={`${style.button} border-0 bg-transparent mt-5`}>
                            <div className={`${style.button__line}`}></div>
                            <div className={`${style.button__line}`}></div>
                            <span className={`${style.button__text} text-white`}>Sign In
                                {isLoading == true ? <div class="spinner-border " role="status">
                                    <span class="visually-hidden  ">Loading...</span>
                                </div> : ''}
                            </span>
                            <div className={`${style.button__drow1}`}></div>
                            <div className={`${style.button__drow2}`}></div>
                        </button>

                        <p className="text-start text-white fs-6 mt-5">I do not have an account! <Link className={`${style.text}`} to="/register">Sign Up</Link></p>

                    </form>
                </div>

            </div>
        </div>
    </>
}
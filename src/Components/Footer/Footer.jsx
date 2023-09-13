

import style from './Footer.module.css'
export default function Footer() {
    return <>
        <footer className={` text-center text-white  py-4`}>
            

            <div className={`text-center p-3 ${style.bg} ` }>
                © 2023 Copyright:
                <span className="text-white" >Ahmed Hassan</span>
            </div>
        </footer>
    </>
}
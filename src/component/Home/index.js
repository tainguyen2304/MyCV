import './index.scss'
import avatar from '../../assets/image/avatar.jpg'
import CV from '../../assets/file/tainguyen_resume.pdf'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
const Home = (props) => { 
    const [isACtive, setActive] = useState();
    const [isDown, setDown] = useState();
    const active = 'ms-auto download p-3  text-start active';
    const unActive = 'ms-auto download p-3  text-start';
    
    useEffect(()=>{
        document.title = 'Home | Nguyên Thành Tài'
    },[])

    const handleClick = () => {
        setActive(false);
        setDown(false);
    }

    return (
    <div className='pt-4  Home '>
        <div className='row '>
            <div className=' col-12 col-md-8'>
                <h1 className='welcome'>WELCOME!</h1>
                <div className='row pt-3 px-3 '>
                    <div className='col-12 col px-0 pb-2 col-md-3 box__question '>
                        <b >Who am I?</b>
                    </div>
                    <div className='col-12 col-md-9 box__answer'>
                        <p className='mb-4'>- A <b className="fw-bolder fs-5">Frontend Trainee</b> with skills: <b className="fw-bolder fs-5">Git   -   Scss   -   Bootstrap   -   ES6  -   React  -   Redux  Toolkit   -  Rest API calls. </b>
                        </p>
                        {/* <p className='mb-4'>- A student majoring in information technology at Cao Thang Technical College.</p>
                        <p className='mb-4'>- A student has a certificate of graduation from Frontend course at Kmin Academy.</p> */}
                    </div>
                </div>
                <div className='row px-3'>
                    <div className='col-12  px-0 pb-2 col-md-3 question-2 box__question pt-5'>
                        <b className="fw-bolder fs-5">What do I do?</b>
                    </div>
                    <div className='col-12 col-md-9 box__answer answer-2 pt-5'>
                        <p>- Design web interface using HTML, CSS, ReactJs,Bootstrap.</p>
                        <p>- Use ReactJs,Redux, to create web page functions.</p>
                    </div>
                </div>
            </div>
            <div className=' col-12 col-md-4'>
                <div className='p-2 avatar '>
                    <img src={avatar} alt='avatar' className='w-100' />
                </div>
            </div>
        </div>
        <div className='d-flex pt-5 wrapper-down'>
            <Link to="/about_me" className='btn me-3 d-block '>
                Read more about my story
            </Link>
            <div className='btn' onClick={() => setActive(true)}>
                Contact me
            </div>
            <div className={isACtive ? active : unActive}>
                <div className='d-flex justify-content-end pb-3'>
                    <span className=' rounded-circle bg-down text-center' onClick={() => handleClick()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                        </svg>
                    </span>
                </div>
                <h5>Hey there!</h5>
                
                <p>You can  download my CV by clicking the button below.</p>
                <a href={CV} target="_blank" rel="noreferrer"  className='mt-3 d-block px-2 py-1 mt-3 text-center bg-down rounded-pill down-CV' onClick={() => setDown(true)}>DOWNLOAD</a>
                {isDown ? <p className='text-center downed pt-4'>Thank you and wish to hear from you soon!</p> :<div></div>}
            </div>
        </div>
    </div>
)};

export default Home;
import { useEffect } from 'react';
import './index.scss';

function About(props) {
    useEffect(()=>{
        document.title = 'About | Nguyên Thành Tài'
    },[])

    return (
        <div className='pt-4 About'>
            <div className='title'>Hello, I'm Tai!</div>
            <div className='px-2'>
                <div className='head'>I</div>
                <p className='paragrap'> started as a freshman in information technology at  Cao Thang Technical College.
                    After 4 months of exposure to programming, I fell in <b>love</b>  with it. I just want to do one thing is programming, but I really don't like C++ so I decided to choose for myself another language, which is <b>Javascript</b>.
                </p>
                <div className='head'>A</div>
                <p className='paragrap'>
                    fter 2 months of learning, I chose Frontend Developer as my career because it is related to JS
                    and I <b> love</b> working with layout, colors, logic as well as how to create <b>a beautiful, functional and attractive website</b>.
                    I chose <b> <a 
                                    href="https://kmin.edu.vn/" target="_blank"
                                    rel="noreferrer"
                                    style={{textDecorationLine:'none'}}>
                                            KMIN ACADEMY
                                </a></b> as the place to start. After 8 months, I have learned many things from basic to advanced.
                    From <b>HTML5, CSS, JS Basic, Github, Sass, Bootstrap, Jquery, ES6, Ant Design, React, Hooks, React-Redux, Redux Toolkit, RESTful API,  Deploy a Web ... </b>
                </p>
                <div className='head'>C</div>
                <p className='paragrap'>
                    urrently, I have graduated from Frontend course in July 2021. I am looking for <b>Front-end Developer</b> jobs to learn more knowledge and skills about Frontend. Since I have only been working on small projects, I do not have any practical work experience, but I will try my best to complete the assigned tasks.
                </p>
                <div className='head'>F</div>
                <p className='paragrap'>uture me will continue to pursue this path of acquiring knowledge, supporting others and looking for opportunities to change the world through my craft.</p>
            </div>
            <div className='pt-5'>
                <h4>Questions and answers</h4>
                <div className='p-3'>
                    <h5>1. How can I be contacted?</h5>
                        <p className='answer'>- I usually reply to emails pretty quickly.</p>
                    <h5>2. Which technology am I most confident in?</h5>
                        <p className='answer'>- ReactJS.</p>
                    <h5>3. How to contact Kmin Academy?</h5>
                        <p className='answer'>- Please contact by email:
                            <b>
                            <a  href="mailto:academy@kmin.edu.vn"
                                target="_blank"
                                rel="noreferrer"
                                style={{textDecorationLine:'none', paddingLeft:6}}
                            >
                        academy@kmin.edu.vn</a> </b>.
                        </p>
                </div>
            </div>

        </div>
    );
}

export default About;
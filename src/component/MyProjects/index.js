import './index.scss';
import { Carousel } from 'react-bootstrap';
import img_1 from '../../assets/image/chillbeat_home.png'
import img_2 from '../../assets/image/chillbeat_dashboard.png'
import img_3 from '../../assets/image/chillbeat_myfavorite.png'
import img_4 from '../../assets/image/chillbeat_messenger.png'
import img_5 from '../../assets/image/chillbeat_musicPlayer_home.png'
import img_6 from '../../assets/image/chillbeat_musicPlayer_album.png'
import img_7 from '../../assets/image/chillbeat_musicPlayer_listSong.png'
import img_8 from '../../assets/image/chillbeat_musicPlayer_login.png'
import img_9 from '../../assets/image/anh1.png'
import img_10 from '../../assets/image/anh2.png'
import img_11 from '../../assets/image/anh3.png'
import { useEffect } from 'react';
function Myprojects(props) {
    useEffect(()=>{
        document.title = 'Projects | Nguyên Thành Tài'
    },[])

    return (
        <div className='myproject__bg mt-4 opacity'>
            <div className='layer_1 rounded'>
                <div className='layer_2  row rounded'>
                    <div className='col-12 col-md-8 '>
                        <Carousel className='content '>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={img_9}
                                    alt="home"
                                />
                                <Carousel.Caption>
                                    <h5>Home Page</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={img_10}
                                    alt="About Page"
                                />

                                <Carousel.Caption>
                                    <h5>About Page</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={img_11}
                                    alt="Contact Page"
                                />

                                <Carousel.Caption>
                                    <h5>Contact Page</h5>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='col-12 col-md-4 description'>
                        <p>This is my first project, made simple with pure JS. Although simple, it marked the turning point that opened my web programming path.</p>
                        <p className='pt-4'>Link Project: <a href='https://music-app-7a1b5.web.app/'>Clothes Shop</a></p>
                    </div>
                </div>
                <div className='layer_2 pt-5 row rounded'>
                    <div className='col-12 col-md-8 '>
                        <Carousel className='content '>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={img_5}
                                    alt="home"
                                />
                                <Carousel.Caption>
                                    <h5>Home Page</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={img_6}
                                    alt="dashboard"
                                />

                                <Carousel.Caption>
                                    <h5>Search Page</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={img_7}
                                    alt="myfavorite"
                                />

                                <Carousel.Caption>
                                    <h5>ListSong Page</h5>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={img_8}
                                    alt="messenger"
                                />

                                <Carousel.Caption>
                                    <h5>Login Page</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='col-12 col-md-4 description'>
                        <p>This website is developed in part by Spotify. It has the function of listening to music, searching for music albums, logging in and registering. I use LocalStorage to store user information.</p>
                        <p className='pt-4'>Link Project: <a href='https://music-app-7a1b5.web.app/'>Music Player</a></p>
                    </div>
                </div>
                <div className='layer_2 pt-5 row rounded'>
                    <div className='col-12 col-md-8 '>
                        <Carousel className='content '>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={img_1}
                                    alt="home"
                                />
                                <Carousel.Caption>
                                    <h5>Home Page</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={img_2}
                                    alt="dashboard"
                                />

                                <Carousel.Caption>
                                    <h5>Dashboard Page</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={img_3}
                                    alt="myfavorite"
                                />

                                <Carousel.Caption>
                                    <h5>Myfavorite Page</h5>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded"
                                    src={img_4}
                                    alt="messenger"
                                />

                                <Carousel.Caption>
                                    <h5>Chat Page</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className='col-12 col-md-4 description phancach'>
                        <p>This is ChillBeat, coded from React, Bootstrap, i18next, Firebase,... Its main functions are login, music, and online chat.</p>
                        <p className='pt-2'>This website is very convenient for listening to music and chatting with friends on the same platform.</p>
                        <p className='pt-4'>Link Project: <a href='https://beat-app-afb80.web.app/'>ChillBeat</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Myprojects;
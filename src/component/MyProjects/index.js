import './index.scss';
import { Carousel } from 'react-bootstrap';
import img_1 from '../../assets/image/chillbeat_home.png'
import img_2 from '../../assets/image/chillbeat_dashboard.png'
import img_3 from '../../assets/image/chillbeat_myfavorite.png'
import img_4 from '../../assets/image/chillbeat_messenger.png'
function Myprojects(props) {
    return (
        <div className='myproject__bg mt-4 opacity'>
            <div className='layer_1 rounded'>
                <div className='layer_2 row rounded'>
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
                    <div className='col-12 col-md-4 description'>
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
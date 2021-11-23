import './index.scss';
import { Link, useLocation } from 'react-router-dom'
function Header(props) {
    const active = 'nav-bar__item active';
    const unActive = ' nav-bar__item ';
    const { pathname } = useLocation();
    return (
        <div>
            <div className='box-gioi-thieu bg-white p-2 ' >
                <div className='p-3 box-gioi-thieu__bg'>
                    <div className='content p-2 '>
                        <div className='row justify-content-center'>
                            <div className='my-name col-12 col-md-6 text-center'>NGUYEN THANH TAI</div>
                            <div className='col-12 col-md-6 '>
                                <div className='my-level text-center'>FRONTEND INTERN</div>
                                {/* <div className='row align-items-center pt-2 text-center'>
                                    <div className='contact col-12 col-md-4'>*Contact*</div>
                                    <a href="mailto:thtai2304@gmail.com" className="col-12 col-md-4 contact-link  py-2 py-md-0">Kmin Academy</a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-bar py-2 bg-white mt-3'>
                <div className='py-1 px-3 box-gioi-thieu__bg d-flex align-items-center '>
                    <Link className={pathname === '/' ? active : unActive} to="/">HOME</Link>
                    <Link className={pathname === '/my_project' ? active : unActive} to='/my_project'>MY PROJECTS</Link>
                    <Link className={pathname === '/about_me' ? active : unActive} to='/about_me'>ABOUT ME</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
import React from 'react'
import LogoImage from "../../images/Logo/logo.png";
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='bg-main-bg py-10 px-10'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center text-white'>
                    {/* Left Section */}
                    <div>
                        <div className='flex items-center gap-3 pb-5'>
                            <img src={LogoImage} alt='' />
                            <h1 className='text-3xl'>ThinkFrim</h1>
                        </div>
                        <p>&copy; {currentYear} ThinkFrim. All rights reserved.</p>
                    </div>

                    {/* Right Section */}
                    <div className='flex gap-32'>
                        <div>
                            <h1 className='text-xl pb-5'>Contact</h1>
                            <a href='mailto:thinkfrim@gmail.com' className='text-white'>
                                thinkfrim@gmail.com
                            </a>
                        </div>
                        <div className=''>
                            <h1 className='text-xl pb-5'>Socials</h1>
                            <h3>Discord</h3>
                            <h3>Instagram</h3>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
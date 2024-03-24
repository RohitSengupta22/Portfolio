import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import Dev from '../assets/Dev.json'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Hero = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [text, setText] = useState('');
    const texts = ['Rohit Sengupta', 'An IT Engineer', 'A MERN Developer'];

    useEffect(() => {
        let interval;

        const typeText = () => {
            if (text.length < texts[textIndex].length) {
                setText(texts[textIndex].substring(0, text.length + 1));
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    const nextIndex = (textIndex + 1) % texts.length;
                    setTextIndex(nextIndex);
                    setText('');
                    interval = setInterval(typeText, 100);
                }, 500); // Wait for 1.5 seconds before starting next text
            }
        };

        interval = setInterval(typeText, 100);

        return () => clearInterval(interval);
    }, [text, textIndex, texts]);

    return (
        <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white' id='about'>
            <div className='lg:w-1/2 ssm:w-fit'>
                <p className='text-white text-3xl'>I' AM</p>
                <h1 className='text-white text-5xl mt-5'>{text}</h1>
                <hr></hr>
                <p className='text-white text-2xl mt-10'>As a MERN stack developer,
                    I specialize in crafting dynamic and
                    efficient web applications. Leveraging
                    the power of MongoDB, Express.js, React.js, and Node.js,
                    I create seamless user experiences with robust backend functionality.

                </p>
                <div className='flex mt-3'>
                    <div className='mr-2 text-slate-950 cursor-pointer'> <a href='https://github.com/RohitSengupta22' target='_blank'><FaGithub size={20} /></a> </div>
                    <div className='mr-2 text-slate-950 cursor-pointer'> <a href='https://www.linkedin.com/in/rohit-sengupta-695441165?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'><FaLinkedin size={20} /></a></div>
                    <div className='mr-2 text-slate-950 cursor-pointer'> <a href='https://www.instagram.com/rsg.qx_22?igsh=eGgwYmJrem1zM3d6&utm_source=qr' target='_blank'><FaInstagramSquare size={20} /></a></div>



                </div>
            </div>
            <div className='lg:w-1/2 ssm:w-fit'>
                <Lottie
                    animationData={Dev}
                    loop={true}
                    autoplay={true}
                />
            </div>

            <hr className=''></hr>

           

        </section>
    );
};

export default Hero;

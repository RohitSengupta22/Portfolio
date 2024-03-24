import React from 'react';
import Lottie from 'lottie-react';
import Skill from '../assets/Skills.json';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiSocketdotio } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

const Skills = () => {
    return (
        <section className="flex justify-center items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white ssm:justify-center ssm:items-center" id='skills'>
            
            <div className="lg:w-1/2 ssm:w-full flex justify-center items-center">
                <Lottie animationData={Skill} loop={true} autoplay={true} />
            </div>



            <div className="lg:w-1/2 ssm:w-fit flex flex-col p-10 cursor-pointer ssm:justify-center">
                <div className="text-center my-5"> {/* Center the text */}
                    <h2 className="text-white text-6xl">Skills</h2>
                </div>
                <div className="flex justify-center space-x-4 items-center my-3"> {/* Center the icons */}
                    <div className='text-center hover:text-indigo-900 hover:skew-y-12'>
                        <FaHtml5 size={80} />
                        <h6>HTML</h6>
                    </div>

                    <div className='text-center  hover:text-indigo-900 hover:skew-y-12'>
                        <IoLogoCss3 size={80} />
                        <h6>CSS</h6>
                    </div>

                    <div className='text-center  hover:text-indigo-900 hover:skew-y-12'>
                        <TbBrandJavascript size={80} />
                        <h6>JAVASCRIPT</h6>
                    </div>

                    <div className='text-center  hover:text-indigo-900 hover:skew-y-12'>
                        <SiTailwindcss size={80} />
                        <h6>TAILWIND</h6>
                    </div>


                </div>
                <div className="flex justify-center space-x-4 items-center my-3">
                    <div className='text-center  hover:text-indigo-900 hover:skew-y-12'>
                        <FaReact size={80} />
                        <h6>REACT JS</h6>
                    </div>
                    <div className='text-center  hover:text-indigo-900 hover:skew-y-12'>
                        <FaNodeJs size={80} />
                        <h6>NODE JS</h6>
                    </div>

                    <div className='text-center  hover:text-indigo-900 hover:skew-y-12'>
                        <SiExpress size={80} />
                        <h6>EXPRESS JS</h6>
                    </div>

                    <div className='text-center  hover:text-indigo-900 hover:skew-y-12'>
                        <SiMongodb size={80} />
                        <h6>MONGO DB</h6>

                    </div>

                </div>
                <div className="flex justify-center space-x-4 items-center my-3">
                    <div className='text-center  hover:text-indigo-900 hover:skew-y-12'>
                        <SiRedux size={80} />
                        <h6>REDUX</h6>
                    </div>
                    <div className='text-center  hover:text-indigo-900 hover:skew-y-12'>
                        <FaAws size={80} />
                        <h6>AWS</h6>
                    </div>

                    <div className='text-center  hover:text-indigo-900 hover:skew-y-12'>
                        <SiSocketdotio size={80} />
                        <h6>SOCKET.IO</h6>
                    </div>

                    <div className='text-center  hover:text-indigo-900 hover:skew-y-12'>
                        <FaGithub size={80} />
                        <h6>GIT</h6>
                    </div>
                </div>
                </div>



            
        </section>
    );
};

export default Skills;

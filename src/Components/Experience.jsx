import React from 'react';
import Racetrack from '../assets/Racetrack.png';
import Datafoundry from '../assets/Datafoundry.png';
import deloitte from '../assets/deloitte.png';
import dell from '../assets/dell.png';
import Workex from '../assets/Workex.json';
import Lottie from 'lottie-react';

const Experience = () => {
    return (
        <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white' id='experience'>
            <div className='lg:w-1/2 ssm:w-fit'>
                <Lottie
                    animationData={Workex}
                    loop={true}
                    autoplay={true}
                />
            </div>
            <div className='lg:w-1/2 ssm:w-fit flex flex-col p-10 cursor-pointer ssm:justify-center'>
                <div className="text-center my-5">
                    <h2 className="text-white text-6xl">Experience</h2>
                </div>
                <div className='flex justify-center space-x-4 items-center my-3'>
                    <div className='text-center hover:text-indigo-900 hover:scale-105'>
                        <img src={Racetrack} className="w-32 h-32 sm:w-40 sm:h-40" alt="Racetrack" />
                        <h6 className='text-2xl'>Racetrack.ai</h6>
                        <h6 className='text-white'>Product Intern</h6>
                        <h6 className='text-white'>2019-2020</h6>
                    </div>
                    <div className='text-center hover:text-indigo-900 hover:scale-105'>
                        <img src={Datafoundry} className="w-32 h-32 sm:w-40 sm:h-40" alt="Datafoundry" />
                        <h6 className='text-2xl'>Datafoundry.ai</h6>
                        <h6 className='text-white'>Product Analyst</h6>
                        <h6 className='text-white'>2020-2021</h6>
                    </div>
                </div>
                <div className='flex justify-center space-x-4 items-center my-3'>
                    <div className='text-center hover:text-indigo-900 hover:scale-105 mx-2'>
                        <img src={deloitte} className="w-32 h-32 sm:w-40 sm:h-40" alt="Deloitte" />
                        <h6 className='text-2xl'>Deloitte</h6>
                        <h6 className='text-white'>Tech Consultant</h6>
                        <h6 className='text-white'>2021-2022</h6>
                    </div>
                    <div className='text-center hover:text-indigo-900 hover:scale-105 mx-2 ssm:py-2'>
                        <img src={dell} className="w-32 h-32 sm:w-40 sm:h-40 mx-2" alt="Dell Technologies" />
                        <h6 className='text-2xl'>Dell Technologies</h6>
                        <h6 className='text-white'>Technical Content Developer</h6>
                        <h6 className='text-white'>2022-Present</h6>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;

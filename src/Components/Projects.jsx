import React from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaRegFileCode } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";


const Projects = () => {
    return (
        <section className='flex justify-center items-center' id='projects'>
            <div className='flex-col justify-between ssm:w-full lg:w-1/2'>
                <div>
                    <h2 className='text-white text-6xl text-center my-5'>Projects</h2>
                </div>
                <div className='flex ssm:flex-col lg:flex-col md:flex-col'>
                    <Card>
                        <div className='flex flex-col'>
                        <h6 className='text-indigo-900 text-center text-4xl mb-3'>Social Connect</h6>
                            <p className='text-2xl text-balance'>A simple social media application where user can post, comment, like 
                            and view comments & likes.
                             Made using MERN stack, Bootstrap, Material-UI, and JWT for authentication</p>
                             <div className='flex justify-center mt-3 text-indigo-900'>
                             <a href='https://joyful-swan-fe7100.netlify.app/' target='_blank'><FaCircleArrowRight size={50}/></a>
                             <a href='https://github.com/RohitSengupta22/Capstone_Guvi_Social_Connect_Frontend' target='_blank'><FaRegFileCode size={50} className='ml-3'/></a>
                             <a href='https://github.com/RohitSengupta22/Capstone_Guvi_Social_Connect_Backend' target='_blank'><TbApi size={50} className='ml-3'/></a>
                             </div>
                        </div>
                    </Card>
                    <Card>
                    <div className='flex flex-col'>
                            <h6 className='text-indigo-900 text-center text-4xl mb-3'>Projecto</h6>
                            <p className='text-2xl text-balance'>A project management tool, where users can create projects, 
                            add contributors, create stories , and complete crud operations.
                             Made using MERN stack, Bootstrap, Material-UI, and JWT for authentication</p>
                             <div className='flex justify-center mt-3 text-indigo-900'>
                             <a href='https://projectoapp.netlify.app/' target='_blank'><FaCircleArrowRight size={50}/></a>
                             <a href='https://github.com/RohitSengupta22/Projecto_frontend' target='_blank'><FaRegFileCode size={50} className='ml-3'/></a>
                             <a href='https://github.com/RohitSengupta22/Projecto_Backend' target='_blank'><TbApi size={50} className='ml-3'/></a>
                             </div>
                        </div>
                    </Card>
                   
                    <Card>
                    <div className='flex flex-col'>
                            <h6 className='text-indigo-900 text-center text-4xl mb-3'>Chat App</h6>
                            <p className='text-2xl text-balance'>A real time chatting app where users can search an user, add him/her & chat with them simulaneously
                             Made using MERN stack,Socket.io, Bootstrap, Material-UI, and JWT for authentication</p>

                             <div className='flex justify-center mt-3 text-indigo-900'>
                             <a href='https://chatappmain.netlify.app/' target='_blank'><FaCircleArrowRight size={50}/></a>
                             <a href='https://github.com/RohitSengupta22/Chat_App' target='_blank'><FaRegFileCode size={50} className='ml-3'/></a>
                             <a href='https://github.com/RohitSengupta22/Chat_App_Backedn' target='_blank'><TbApi size={50} className='ml-3'/></a>
                             </div>
                        </div>
                    </Card>
                    <Card>
                    <div className='flex flex-col'>
                            <h6 className='text-indigo-900 text-center text-4xl mb-3'>Food App Customer</h6>
                            <p className='text-2xl text-balance'>A food app for customers where they can search food acoording to categories, order food & keep track of past orders.
                            Made using MERN stack, Bootstrap, Material-UI, and JWT for authentication</p>

                             <div className='flex justify-center mt-3 text-indigo-900'>
                             <a href='https://foodappdeployed.netlify.app/' target='_blank'><FaCircleArrowRight size={50}/></a>
                             <a href='https://github.com/RohitSengupta22/FoodApp_Customer_Frontend' target='_blank'><FaRegFileCode size={50} className='ml-3'/></a>
                             <a href='https://github.com/RohitSengupta22/FoodApp_Customer_Backend' target='_blank'><TbApi size={50} className='ml-3'/></a>
                             </div>
                        </div>
                    </Card>
                    <Card>
                    <div className='flex flex-col'>
                            <h6 className='text-indigo-900 text-center text-4xl mb-3'>Food App Admin</h6>
                            <p className='text-2xl text-balance'>An admin food app where they can create categories, add items and images, create discounted prices, and view orders.
                            Made using MERN stack, AWS, Bootstrap, Material-UI, and JWT for authentication.<br></br> <span>(credentials: Email- rohitsengupta1997@gmail.com Password-Bealive@5794)</span>
                          </p>

                             <div className='flex justify-center mt-3 text-indigo-900'>
                             <a href='https://foodappdeployedadmin.netlify.app/' target='_blank'><FaCircleArrowRight size={50}/></a>
                             <a href='https://github.com/RohitSengupta22/FoodApp_Admin_frontend' target='_blank'><FaRegFileCode size={50} className='ml-3'/></a>
                             <a href='https://github.com/RohitSengupta22/Food_App_Admin_Backend' target='_blank'><TbApi size={50} className='ml-3'/></a>
                             </div>
                        </div>
                    </Card>

                   
                    
                </div>
            </div>

            
        </section>
    );
};

const Card = ({ children }) => (
    <div className='lg:w-full ssm:w-full text-center p-4'>
        <div className='bg-gray-100 p-4 rounded-lg shadow-lg shadow-black lg:h-fit hover:bg-indigo-500 hover:text-white cursor-pointer transition-all duration-300 transform hover:scale-105'>
            {children}
        </div>
    </div>
);


export default Projects;

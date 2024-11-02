import React from 'react';
import images from '../../assets/images/images';
import { LinkedInIcon, TwitterIcon } from '../../assets/icons';
import InstaICon from '../../assets/icons/Insta';
const About = () => {

    const teamMembers = [
        {
            name: "Rabia Khan",
            role: "Front End Developer & AI Developer",
            description: "Rabia Khan is the visionary behind the AI Home Decor project. She created the front end using React.js, trained the AI model with Python libraries, and successfully deployed the project. She diligently tracks changes using GitHub VCS.",
            image: <img className='h-full w-full object-cover overflow-hidden rounded-lg' src={images.rabia} />
        },
        {
            name: "Zahra Zafar",
            role: "Marketer & Documentation Specialist",
            description: "Zahra Zafar played a crucial role in documenting the project and marketing the AI Home Decor concept. Her efforts ensured clear communication and effective outreach for the project.",
            image: <img className='h-full w-full object-cover overflow-hidden rounded-lg' src={images.zahra} />
        },
        {
            name: "Rafay Iftikhar Khan",
            role: "Backend Developer",
            description: "Rafay Iftikhar Khan is the backend developer who utilized MongoDB for database management and built APIs using Express and Node.js for handling requests efficiently.",
            image: <img className='h-full w-full object-cover overflow-hidden rounded-lg' src={images.rafay} />
        }
    ];

    return (
        <div className=" w-full px-6">
            <h1 className="text-2xl font-bold my-6 text-blueColor">Meet My team</h1>
            <div className="flex flex-col gap-6">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-white shadow-lg gap-3 rounded-lg flex flex-col sm:flex-row sm:items-center">
                        <div className="h-96 xs:w-80 sm:h-60 sm:w-60 rounded-l-lg">
                            {member.image}
                        </div>
                        <div className="w-[80%] py-3 flex flex-col gap-3 px-3">
                            <h2 className="text-xl font-semibold">{member.name}</h2>
                            <h3 className="text-md text-textPrimaryColor">{member.role}</h3>
                            <p className=" text-textGrayColor text-sm line-clamp-6">{member.description}</p>
                            <div className='flex gap-3 items-center'>
                                <LinkedInIcon className="cursor-pointer" />
                                <InstaICon className="cursor-pointer" />
                                <TwitterIcon className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;

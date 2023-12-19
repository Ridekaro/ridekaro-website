import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";



const Contact = () => {


    const [name, setName] = useState("");
    const [feedback, setfeedback] = useState("");
    const [email, setemail] = useState("");

    function clearFormFields() {
        setName('');
        setfeedback('');
        setemail('');
    }



       function userdetails() {
         console.warn(name, feedback, email);
         let data = { name, feedback, email};
         console.log(data);
         let domain = 'https://ridekaro-server.onrender.com';
         fetch(`${domain}/api/feedback/`, {
           method: 'POST',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(data),
         })
           .then((Response) => {
             if (Response.status === 201) {
               console.warn({ 'result': Response });
               // Clear form fields after a successful response with status code 200
               clearFormFields();
             } else {
               console.error('Request failed with status:', Response.status);
             }
           })
           .catch((error) => {
             console.error('Fetch error:', error);
           });
      }
    return <section className="text-gray-600 body-font relative" id="contact">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
                className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=pantnagar,%20udham%20singh%20nagar%20,%20uttrakhand+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
                <div className="bg-black/50 relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                        <p className="mt-1 text-white">pantnagar</p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                        <a href='/' className="text-t1 leading-relaxed">ridekaro@email.com</a>
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                        <p className="leading-relaxed text-white">+91 8188822242</p>
                    </div>
                </div>
            </motion.div>
            <motion.div variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
                className="lg:w-1/3 md:w-1/2 border-2 border-white/50  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                <h2 className=" text-gradient mb-1 text-[35px] font-medium title-font">Your feedback</h2>

                <form action="" method="post">

                        
                    <div className="relative mb-4">
                        <label for="username" className="leading-7 text-sm text-white">Name</label>
                        <input required value={name} type="integer" maxlength="50" id="name" name="name" onChange={(e) => { setName(e.target.value) }}
                            className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-white">Email id</label>
                        <input required type="email" value={email} id="email" name="email" onChange={(e) => { setemail(e.target.value) }}
                            className="w-full bg-white  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="feedback" className="leading-7 text-sm text-white">Feedback</label>
                        <input required type="feedback" value={feedback} id="feedback" name="feedback" onChange={(e) => { setfeedback(e.target.value) }}
                            className="w-full bg-white  bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>

                    <button type='button' onClick={userdetails}
                        className="btn btn-lg">Button</button>
                </form>
                <p className="text-[18px] text-white mt-3">Don't worrry about your personal contact details, it can't be shared with anyone else.</p>
            </motion.div>
        </div>
    </section>
};

export default Contact;

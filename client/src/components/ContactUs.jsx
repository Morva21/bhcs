import React, { useState } from "react";
import Loader from "./Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  // const [alertSuccessPopup, setShowAlertSussessPopup] = useState(false);

  const [error, setError] = useState(false);
  const [loader, setLoader]= useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoader(true)
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setFormData({name: "",
      email: "",
      phone: "",
      message: "",})
      const data = await response.json();
    
      toast.success('Email Sent Successfully! We will be in touch.', {
        position: 'top-right',
        autoClose: 2000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setError(false);
    } catch (error) {
      setError(true);
      toast.error('Error sending email. Please try again later.', {
        position: 'top-right',
        autoClose: 5000, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally{
      setLoader(false)
    }
  };
  return (
    <div>
      <section id="contact" className="appointments section">
        <div className="container mx-auto">
          <h2 className="appointment__title h2 mb-5 xl:mb-[50px] text-center xl:text-left">
            Email or call:{" "}
            <span className="text-accent-tertiary">
              (416.575.2356 | 613.709.6291)
            </span>
          </h2>
          <form
            onSubmit={handleSubmit}
            className="appointment__form flex flex-col gap-y-5"
            id="appointmentForm"
          >
            {/* <!-- select wrapper --> */}
            <div className="flex flex-col lg:flex-row gap-5">
              {/* <!-- select 1 --> */}
            </div>
            {/* <!-- Input Wrapper --> */}
            <div className="flex flex-col lg:flex-row gap-1">
              <input
                onChange={handleChange}
                type="text"
                id="name"
                required={true}
                className="input"
                placeholder="Enter Full Name.."
              />
              <input
                onChange={handleChange}
                type="phone"
                id="phone"
                required={true}
                className="input"
                placeholder="Enter Phone.."
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-1 ">
              <input
                onChange={handleChange}
                type="email"
                required={true}
                className="input"
                placeholder="Email"
                id="email"
              />
            </div>
            <div className="flex flex-col lg:flex-row">
              <textarea
                onChange={handleChange}
                id="message"
                required={true}
                cols="70"
                rows="10"
                className="resize-none h-[120px] p-2 border rounded-md focus:outline-none focus:border-accent transition-all"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-lg btn-accent self-start"
              id="submitButton"
            >
              Book Appointment
            </button>
            {loader && <Loader />}
             <ToastContainer />
            
          </form>
          
        </div>
      </section>
    </div>
  );
};

export default ContactUs;

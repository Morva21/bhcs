import React, {useState} from 'react'
import Alert from './ALert';

const ContactUs = () => {
  const [alertSuccessPopup, setShowAlertSussessPopup] = useState(false);

  const [error, setError] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    
  };


const handleSubmit = async(e)=>{
e.preventDefault()

try {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers:{
      'Content-type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  const data = await response.json()
  setShowAlertSussessPopup(true)
  setError(false)
} catch (error) {
  setError(true)
  console.log(`Error: ${error}`)
}


  }
  
  return (
  
  <div>

      <section id='appointment' className="appointments section">

<div className="container mx-auto">

    <h2 className="appointment__title h2 mb-5 xl:mb-[50px] text-center xl:text-left">
        Book an appointment or call: <span className="text-accent-tertiary">(416.575.2356 | 613.709.6291)</span>
    </h2>
    <form onSubmit={handleSubmit}className="appointment__form flex flex-col gap-y-5" id="appointmentForm">
        
{/* <!-- select wrapper --> */}
<div className="flex flex-col lg:flex-row gap-5">
    {/* <!-- select 1 --> */}
</div>
{/* <!-- Input Wrapper --> */}
<div className="flex flex-col lg:flex-row gap-1">
    <input onChange={handleChange} type="text" id='name' className="input" placeholder="Enter Full Name.."  />
    <input onChange={handleChange} type="phone" id='phone' className="input" placeholder="Enter Phone.."  />
</div>

<div className="flex flex-col lg:flex-row gap-1 ">
    <input onChange={handleChange} type="email" className="input" placeholder="Email" id="email" />
   </div>
<div className="flex flex-col lg:flex-row">
<textarea onChange={handleChange} name="" id="message" cols="70" rows="10" className="resize-none h-[120px] p-2 border rounded-md focus:outline-none focus:border-accent transition-all"></textarea>
    {/* <textarea  placeholder="Leave a message..."></textarea> */}
{/* <!-- socials --> */}
</div>
<button type='submit' className="btn btn-lg btn-accent self-start" id="submitButton">Book Appointment</button>
</form>
{alertSuccessPopup && <Alert onClose={() => setShowAlertSussessPopup(false)} />}
</div>
    </section>
    </div>
  )
}

export default ContactUs

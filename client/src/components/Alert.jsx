import React, { useState, useEffect } from 'react';

const Alert = ({ onClose }) => {
  // State to manage the visibility of the pop-up
  const [visible, setVisible] = useState(true);

  // Effect to automatically hide the pop-up after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); // Invoke the callback to notify the parent component
    }, 2500); // Adjust the duration as needed

    // Clean up the timer when the component unmounts or visibility changes
    return () => clearTimeout(timer);
  }, [onClose]);

  // Render the pop-up if it's visible
  return (
    visible && (
        <div>
<div className='ml-60 bg-accent text-white font-semibold rounded-lg mb-10  max-w-[200px]'>
<div className=" success-popup">
        <p>Email Sent Successfully! We will be in touch.</p>
      </div>
</div>

        </div>
      
    )
  );
};

export default Alert;
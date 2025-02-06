import { useState } from 'react';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex items-center justify-between bg-[#292524] p-2 md:w-90 w-fit rounded-full">
      <div className='flex items-center'>
        <svg
        className="w-7 h-7 invert-75 mr-2 transition-all duration-300 transform"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g data-name="Layer 2">
          <g data-name="inbox">
            <rect
              width="24"
              height="24"
              transform="rotate(180 12 12)"
              opacity="0"
            ></rect>
            <path
              d="M20.79 11.34l-3.34-6.68A3 3 0 0 0 14.76 3H9.24a3 3 0 0 0-2.69 1.66l-3.34 6.68a2 2 0 0 0-.21.9V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5.76a2 2 0 0 0-.21-.9zM8.34 5.55a1 1 0 0 1 .9-.55h5.52a1 1 0 0 1 .9.55L18.38 11H16a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1H5.62z"
            ></path>
          </g>
        </g>
      </svg>
      <input
        type="text"
        name="text"
        className="max-w-[160px] md:max-w-[200px] h-full border-none outline-none px-2 bg-[#292524] text-white text-base"
        placeholder="info@gmail.com"
        value={email}
        onChange={handleInputChange}
      />
      </div>
      <button className="relative flex items-center justify-center w-[95px] h-full rounded-lg bg-white text-black font-medium transition-all duration-300 hover:text-green-400 hover:bg-[#292524] hover:border-indigo-300 hover:border active:scale-95">
        Join Now
      </button>
    </div>
  );
};

export default EmailSubscription;

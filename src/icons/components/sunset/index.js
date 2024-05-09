import React from 'react';

const Sunset = ({ height = '48px', width = '48px', className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 52 38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect x="24.993" width="2" height="10" />
        <rect
          x="39.693"
          y="6.086"
          transform="matrix(0.7071 0.7071 -0.7071 0.7071 19.9023 -25.4673)"
          width="2"
          height="10.409"
        />
        <rect
          x="6.084"
          y="10.296"
          transform="matrix(0.7071 0.7071 -0.7071 0.7071 11.2934 -4.6739)"
          width="10.409"
          height="2"
        />
        <polygon
          points="26.993,34.547 26.993,24 24.993,24 24.993,34.547 20.739,30.293 19.325,31.707 25.993,38.375 32.66,31.707 
		31.246,30.293 	"
        />
        <path
          d="M39,25.999c0-0.002,0-0.004,0-0.006c0-7.18-5.82-12.999-13-12.999s-13,5.819-13,12.999c0,0.002,0,0.004,0,0.006H0v2h22v-2
		h-7c0-0.002,0-0.004,0-0.006c0-6.064,4.935-10.999,11-10.999s11,4.935,11,10.999c0,0.002,0,0.004,0,0.006h-7v2h21.995v-2H39z"
        />
      </g>
    </svg>
  );
};

export default Sunset;

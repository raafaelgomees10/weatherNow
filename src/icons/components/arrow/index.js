import React from 'react';

const Arrow = ({ height, width }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <polyline
        fill="rgb(206, 232, 250)"
        points="248 391.689 452.015 464.458 257.042 24.751"
      />
      <g transform="matrix(1, 0, 0, 1, 3.552713678800501e-15, 0)">
        <path
          fill="rgb(45, 82, 124)"
          d="M 471.875 463.053 C 472.234 462.488 472.565 461.907 472.849 461.303 C 472.89 461.219 472.919 461.13 472.959 461.043 C 473.198 460.512 473.401 459.966 473.579 459.411 C 473.629 459.255 473.68 459.099 473.725 458.94 C 473.906 458.307 474.054 457.665 474.154 457.013 C 474.165 456.94 474.168 456.868 474.178 456.798 C 474.262 456.194 474.303 455.582 474.314 454.969 C 474.318 454.83 474.321 454.693 474.322 454.554 C 474.316 453.875 474.276 453.193 474.18 452.512 C 474.175 452.482 474.167 452.45 474.163 452.419 C 474.07 451.786 473.926 451.157 473.752 450.531 C 473.708 450.372 473.661 450.215 473.612 450.055 C 473.408 449.402 473.176 448.755 472.878 448.118 L 269.801 12.092 C 269.514 11.476 269.181 10.899 268.826 10.337 C 268.734 10.193 268.64 10.055 268.545 9.915 C 268.223 9.443 267.882 8.991 267.515 8.563 C 267.452 8.491 267.396 8.411 267.332 8.338 C 266.889 7.84 266.417 7.375 265.921 6.942 C 265.833 6.867 265.74 6.795 265.651 6.721 C 265.22 6.362 264.772 6.029 264.308 5.719 C 264.194 5.644 264.084 5.566 263.969 5.494 C 263.422 5.152 262.857 4.84 262.273 4.567 C 262.176 4.521 262.076 4.486 261.978 4.442 C 261.473 4.22 260.955 4.027 260.428 3.856 C 260.272 3.807 260.119 3.757 259.963 3.712 C 259.335 3.531 258.696 3.383 258.048 3.283 C 258.008 3.278 257.966 3.276 257.925 3.271 C 257.288 3.177 256.644 3.133 255.997 3.122 C 255.93 3.12 255.863 3.107 255.795 3.107 C 255.739 3.106 255.684 3.117 255.627 3.117 C 254.299 3.121 252.962 3.297 251.641 3.657 C 251.48 3.701 251.322 3.749 251.165 3.797 C 250.66 3.951 250.161 4.133 249.666 4.342 C 249.536 4.397 249.404 4.443 249.276 4.5 C 249.228 4.521 249.179 4.536 249.132 4.558 C 248.583 4.813 248.062 5.103 247.558 5.413 C 247.448 5.48 247.348 5.555 247.241 5.625 C 246.775 5.927 246.331 6.25 245.905 6.594 C 245.793 6.686 245.682 6.775 245.572 6.868 C 244.553 7.741 243.668 8.73 242.923 9.809 C 242.838 9.934 242.754 10.06 242.67 10.187 C 242.318 10.731 241.991 11.288 241.708 11.869 C 241.7 11.887 241.688 11.902 241.679 11.92 L 241.663 11.952 C 241.662 11.955 241.661 11.958 241.66 11.959 L 33.273 445.423 C 30.578 451.03 31.481 457.703 35.571 462.388 C 37.058 464.094 38.863 465.417 40.844 466.319 C 44.305 467.894 48.302 468.183 52.066 466.969 L 191.407 422.048 C 199.584 419.412 204.077 410.648 201.44 402.47 C 198.803 394.294 190.039 389.803 181.86 392.437 L 77.018 426.237 L 255.477 55.028 L 429.371 428.397 L 269.075 374.543 L 270.227 186.565 C 270.281 177.975 263.355 170.965 254.767 170.914 C 246.177 170.863 239.168 177.784 239.117 186.374 L 237.894 385.609 C 237.892 385.667 237.905 385.72 237.906 385.778 C 237.914 387.184 238.11 388.567 238.484 389.896 C 238.526 390.048 238.565 390.198 238.611 390.346 C 238.8 390.946 239.021 391.534 239.278 392.105 C 239.341 392.245 239.413 392.378 239.48 392.514 C 239.726 393.016 239.994 393.504 240.291 393.976 C 240.351 394.07 240.405 394.17 240.465 394.262 C 240.821 394.802 241.216 395.317 241.639 395.812 C 241.718 395.904 241.799 395.995 241.881 396.084 C 242.76 397.066 243.769 397.943 244.897 398.683 C 245.013 398.76 245.13 398.833 245.25 398.909 C 245.802 399.25 246.37 399.573 246.973 399.847 C 246.986 399.853 246.995 399.861 247.008 399.867 C 247.515 400.097 248.037 400.298 248.572 400.474 L 453.822 469.432 C 453.909 469.462 454.001 469.473 454.087 469.5 C 454.657 469.68 455.233 469.828 455.82 469.942 C 455.933 469.964 456.045 469.993 456.16 470.013 C 456.818 470.127 457.486 470.192 458.16 470.219 C 458.294 470.225 458.426 470.223 458.561 470.224 C 459.159 470.232 459.758 470.209 460.358 470.148 C 460.452 470.138 460.547 470.134 460.639 470.124 C 461.302 470.045 461.966 469.918 462.625 469.749 C 462.757 469.714 462.885 469.672 463.016 469.634 C 463.532 469.487 464.046 469.309 464.554 469.106 C 464.721 469.041 464.888 468.977 465.052 468.905 C 465.148 468.862 465.248 468.832 465.343 468.787 C 465.857 468.549 466.348 468.281 466.822 467.994 C 466.885 467.956 466.946 467.91 467.008 467.87 C 467.539 467.539 468.04 467.176 468.52 466.79 C 468.632 466.699 468.744 466.609 468.856 466.514 C 469.394 466.056 469.906 465.574 470.37 465.053 L 470.371 465.052 C 470.372 465.049 470.373 465.047 470.376 465.045 C 470.836 464.53 471.248 463.981 471.63 463.414 C 471.714 463.297 471.796 463.177 471.875 463.053 Z"
        />
        <path
          fill="rgb(45, 82, 124)"
          d="M 241.2 465.12 C 235.777 463.145 232.001 458.723 232.005 453.586 L 232.029 419.91 C 232.032 412.936 239.003 407.285 247.593 407.29 C 256.181 407.296 263.144 412.951 263.14 419.926 L 263.116 453.6 C 263.112 460.574 256.142 466.225 247.552 466.221 C 245.288 466.22 243.14 465.826 241.2 465.12 Z"
        />
        <path
          fill="rgb(45, 82, 124)"
          d="M 240.331 510.828 C 234.908 508.679 231.132 503.866 231.135 498.275 L 231.141 486.601 C 231.145 479.011 238.113 472.859 246.704 472.864 C 255.298 472.868 262.258 479.026 262.254 486.616 L 262.248 498.29 C 262.244 505.88 255.276 512.032 246.685 512.027 C 244.422 512.025 242.27 511.597 240.331 510.828 Z"
        />
      </g>
    </svg>
  );
};

export default Arrow;
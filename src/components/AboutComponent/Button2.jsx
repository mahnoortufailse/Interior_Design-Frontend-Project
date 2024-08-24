
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

const Button2 = ({ name }) => {
    return (
      <button className="cursor-pointer p-2 px-5 text-white rounded-xl shadow-lg shadow-black bg-[#292F36] hover:shadow-inner hover:shadow-black hover:bg-[#1f252b] w-52 max-[640px]:w-48 ">
        <div className="flex justify-around align-baseline">
          <h1 className="px-2 text-base font-medium max-[640px]:text-sm">{name}</h1>
          <svg
            fill="#ffffff"
            height="25px"
            width="25px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            viewBox="180 -220 100 800"
            space="preserve"
            stroke="#ffffff"
            transform="rotate(0)"
            strokeWidth={22.016}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth={2.048}
            />
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path d="M388.418,240.915L153.752,6.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L343.163,256 L123.582,475.582c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l234.667-234.667 C396.749,262.754,396.749,249.246,388.418,240.915z" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </button>
    );
  };
  
  export default Button2;
  
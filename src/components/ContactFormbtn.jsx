import styled from "styled-components";

const ContactFormbtn = () => {
  return (
    <StyledWrapper>
      <a className="codepen-button">
        <span>
          Contact Us{" "}
          <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5" />
            <polyline points="8 1 12 5 8 9" />
          </svg>
        </span>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .codepen-button {
    width: 200px;
    display: block;
    cursor: pointer;
    color: white;
    margin: 0 auto;
    position: relative;
    text-decoration: none;
    font-weight: 90;
    border-radius: 100px;
    overflow: hidden;
    padding: 1px;
    isolation: isolate;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .codepen-button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 400%;
    height: 100%;
    background: linear-gradient(115deg, #000000, #f4f4f4, #808080);
    background-size: 25% 100%;
    animation: borderAnimation 0.75s linear infinite;
    translate: -5% 0%;
    transition: translate 0.25s ease-out;
  }

  .codepen-button:hover::before {
    translate: 0% 0%;
  }

  @keyframes borderAnimation {
    to {
      transform: translateX(-25%);
    }
  }

  .codepen-button span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0rem; /* Increased padding for better spacing */
    font-size: 1.1rem;
    font-weight: 400;
    background: #CDA274;
    border-radius: 100px;
    width: 100%;
    z-index: 1; /* Ensure the text and SVG appear above the background */
  }

  .codepen-button svg {
    margin-left: 8px; /* Add some space between the text and the arrow */
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: white;
    stroke-width: 2;
  }
`;

export default ContactFormbtn;

/* eslint-disable react/prop-types */
import styled from "styled-components";
import IconPart from "../IconPart";

const AnimatedCard = ({ user }) => {  // Destructure user from props
  return (
    <StyledWrapper>
      <div className="card-container ">
        <div className="card">
          <div className="front-content">
            <img src={user.image} alt="" height={210}/>
          </div>
          <div className="content">
            <div><p className="heading dark:text-gray-600 text-sm">{user.name}</p>
            <p className="dark:text-gray-600 text-sm">{user.location}</p></div>
            
            <div><IconPart /></div>
            <p className="font-semibold dark:text-gray-600 text-sm">
              {user.phoneNo} <br />
              <span className="font-light dark:text-gray-900 text-sm">{user.email}</span>
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-container {
    width: 230px;
    height: 310px;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    position: relative;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .card .front-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .front-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 8px;
    background-color: #FFFFFF;
    color: #292F36;
    padding: 15px;
    line-height: 1.5;
    border-radius: 5px;
    pointer-events: none;
    transform: translateX(100%);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card .content .heading {
    font-size: 20px;
    font-weight: 600;
  }

  .card:hover .content {
    transform: translateX(0);
  }

  .card:hover .front-content {
    transform: translateX(-20%);
  }
`;

export default AnimatedCard;

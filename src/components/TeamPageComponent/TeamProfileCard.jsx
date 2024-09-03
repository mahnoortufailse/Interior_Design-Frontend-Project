/* eslint-disable react/prop-types */

import styled from "styled-components";

const TeamProfileCard = ({ user }) => {
  return (
    <StyledWrapper>
    
      <div className="card rounded-t-2xl">
        <div className="remove-when-use ">
          <img src={user.image} alt="" className="rounded-t-2xl"/>
        </div>
        <div className="details">
          <label>{user.name}</label>
          <p>
          {user.email}
            <br />
            <i>{user.location}</i>
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
  width: 230px;
  height: 350px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  position: relative;
  margin-bottom:40px;
}

.remove-when-use {
  text-align: center;
  width: 100%;
  position: absolute;
  color: black;
  top: 0px;
  font-weight: bold;
}

.details > p {
  font-size: .8em;
  margin-top: .5em;
}

.details > label {
  font-weight: bold;
}

.details {
  color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  bottom: 0;
  height: 2.6em;
  transition: height .5s ease-in-out;
  padding: 0.6em;
  overflow: hidden;
}

.card:hover > .details {
  height: 6.7em;
}
`;

export default TeamProfileCard;

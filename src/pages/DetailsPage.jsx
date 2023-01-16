import React from 'react'
import { useNavigate } from "react-router-dom";
import UserInfo from '../components/UserInfo';


const DetailsPage = () => {
    const navigate = useNavigate();

  return (
    <div className="container my-5">
    <div className='back'
      onClick={() => {
        navigate(-1);
      }}
    >
      <span>&#8678;</span>
      <span>Back</span>
    </div>

    <UserInfo />
  </div>
  )
}

export default DetailsPage
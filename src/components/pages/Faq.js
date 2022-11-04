import React, { useState } from 'react';
import { BiRightArrow } from "react-icons/bi"
import styled from 'styled-components';
import { Data } from '../Data/Data';
import { FiPlus, FiMinus } from 'react-icons/fi';

// const AccordionSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   height: 100vh;
//   background: #fff;
// `;

// const Container = styled.div`
//   position: absolute;
//   top: 30%;
//   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
// `;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 1rem;
    text-align: center;
    padding-top: 45px;
    padding-bottom: 25px;
  }
`;

const Faq = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
          //if clicked question is already active, then close it
          return setClicked(null);
        }
    
        setClicked(index);
      };
    
  return (
    <>
      <div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="font-weight-bold mt-4 text-center">
              Frequently Asked Questions
            </h1>
            <hr></hr>
            <span className="d-block text-secondary text-center px-3">
              If you are new to Q-Answer or looking for answer to your
              questions. This guide will help you to learn more about our
              service and their features.
            </span>
        <div className='py-5'>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Faq;

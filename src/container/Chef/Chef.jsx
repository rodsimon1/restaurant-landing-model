import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef2} alt="Chef_img" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, repudiandae.</p>
          </div>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quaerat sapiente repudiandae commodi cupiditate.
            Fugit est vel qui impedit in asperiores ipsum dignissimos laborum, doloremque eius nisi. Facilis, architecto
            saepe?
          </p>
        </div>

        <div className="app__chef-sign">
          <p>John Gameki </p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign2} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;

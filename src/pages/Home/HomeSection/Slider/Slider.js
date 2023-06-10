import React from 'react';
import Marquee from 'react-fast-marquee';

const Slider = () => {
  return (
    <section className="home-marquee ">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrap marquee-wrap">
              <Marquee gradient={true}>
                <div className="w-25 mx-4">
                  <img src="image/Brand/Asus.png" alt="Asus logo" />
                </div>
                <div className="w-25 mx-4">
                  <img src="image/Brand/Dell.png" alt="" />
                </div>
                <div className="w-25 mx-4">
                  <img src="image/Brand/Hp.png" alt="" />
                </div>
                <div className="w-25 mx-4">
                  <img src="image/Brand/Lenovo.png" alt="" />
                </div>
                <div className="w-25 mx-4">
                  <img src="image/Brand/Samsung.png" alt="" />
                </div>
                <div className="w-25 mx-4">
                  <img src="image/Brand/Apple.png" alt="" />
                </div>
                <div className="w-25 mx-4">
                  <img src="image/Brand/MSI.png" alt="" />
                </div>
                <div className="w-25 mx-4">
                  <img src="image/Brand/Xiaomi.png" alt="" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

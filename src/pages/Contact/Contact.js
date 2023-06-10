import { faClock, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
  return (
    <div className="contact-wrapper py-5">
      <div className="container-xl">
        <div className="row">
          <div className="col-lg-3 col-12 mb-5">
            <div className="contact-infor text-black  ">
              <h1>Contact to </h1>
              <ul className="ps-0 ">
                <li className="fs-2">
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="m-3">Hotline:</span>
                  <span className="text-danger">0913 423 421</span>
                </li>
                <li className="fs-2">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span className="m-3">Adress:</span>
                  <span>142 To Ky, Hoc Mon, TP. HCM</span>
                </li>
                <li className="fs-2">
                  <FontAwesomeIcon icon={faClock} />
                  <span className="m-3">Open: </span>
                  <span>7:00 - 20:00 </span>
                </li>
              </ul>
            </div>
            <div className="contact-form bg-secondary border border-1 rounded-3 p-3">
              <form className="d-flex flex-column">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label text-white fs-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    className="form-control fs-3 p-2"
                    id="exampleFormControlInput1"
                    placeholder="Tran Van A"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label text-white fs-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control fs-3 p-2"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label text-white fs-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control fs-3 p-2"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label text-white fs-2">
                    Your comment
                  </label>
                  <textarea class="form-control fs-3 p-2" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-danger">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-9 col-12 mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.172515935969!2d106.6096484739462!3d10.874479857379624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a0ebd37c0e9%3A0x80a9d948075d56f1!2zMTQyIFTDtCBLw70sIFRydW5nIE3hu7kgVMOieSwgSMOzYyBNw7RuLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1685031072533!5m2!1svi!2s"
              width="600"
              height="450"
              className="border-0 w-100"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

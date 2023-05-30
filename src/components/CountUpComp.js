import { faCalendarDays, faStore, faStreetView, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CountUp from 'react-countup';

const CountUpComp = () => {
  const listItem = [
    {
      icon: faUsers,
      title: 'User',
      start: 0,
      end: 2500,
    },
    {
      icon: faCalendarDays,
      title: 'Years Of Experience',
      start: 0,
      end: 10,
    },
    {
      icon: faStreetView,
      title: 'View',
      start: 0,
      end: 150,
    },
    {
      icon: faStore,
      title: 'Store',
      start: 0,
      end: 2,
    },
  ];
  return (
    <div className="counter-up py-5">
      <div className="container-xl bg-body p-5 rounded-3">
        <div className="row">
          {listItem.map((item) => {
            return (
              <div className="col-3 ">
                <CountUp start={item.start} end={item.end} delay={0} duration={10}>
                  {({ countUpRef }) => (
                    <div className="  d-flex  flex-column align-items-center justify-content-center fs-1">
                      <div className="d-flex flex-column py-3">
                        <FontAwesomeIcon icon={item.icon} style={{ color: '#51261f' }} />
                      </div>
                      <div className="">
                        <span ref={countUpRef} />
                      </div>
                      {item.title}
                    </div>
                  )}
                </CountUp>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CountUpComp;

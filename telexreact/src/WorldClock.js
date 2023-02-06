import React from 'react'

const WorldClock = () => {
  return (
    <div className="backgroundwrapper">
      <div className="flexwrapper">
        <header>
          <div className="row">
            <div className="teltexttop">
              <span className="regularspan">P694</span>
              <span className="emptyspan"></span>
              <span className="regularspan">APPOV</span>
              <span className="emptyspan"></span>
              <span className="regularspan">694</span>
              <span className="longemptyspan"></span>
              <span className="datespan">MON 23 JAN</span>
              <span className="emptyspan"></span>
              <span className="timespan">11:49:00</span>
            </div>
          </div>
          <div className="rowTwo">
            <div className="headerblock">
                <h1>WORLDCLOCK</h1>
            </div>
          </div>
          <div className="contentblock">
            <div className="citiesleft"></div>
            <div className="timeleft"></div>
            <div className="citiesright"></div>
            <div className="timeright"></div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default WorldClock
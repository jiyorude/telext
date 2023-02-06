import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment-timezone";

const WorldClock = () => {
  const [time, setTime] = useState("");

  let date = new Date();
  let day = date.getDate();
  let month = date.toLocaleString("default", { month: "short" });
  let year = date.getFullYear();
  let today = `${day} ${month} ${year}`;

  const amsterdam = moment.tz(time, "Europe/Amsterdam").format("HH:mm");
  const amsterdamTop = moment.tz(time, "Europe/Amsterdam").format("HH:mm:ss");
  const honolulu = moment.tz(time, "Pacific/Honolulu").format("HH:mm");
  const taipei = moment.tz(time, "Asia/Taipei").format("HH:mm");
  const istanbul = moment.tz(time, "Asia/Istanbul").format("HH:mm")
  const nairobi = moment.tz(time, "Africa/Nairobi").format("HH:mm");
  const auckland = moment.tz(time, "Pacific/Auckland").format("HH:mm");
  const kyiv = moment.tz(time, "Europe/Kyiv").format("HH:mm");
  
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

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
              <span className="datespan">{today}</span>
              <span className="emptyspan"></span>
              <span className="timespan">{amsterdamTop}</span>
            </div>
          </div>
          <div className="rowTwo">
            <div className="headerblock">
              <h1>WORLDCLOCK</h1>
            </div>
          </div>
          <div className="contentblock">
            <div className="citiesleft">
              <div className="txtyellow">Amsterdam</div>
              <div className="txtwhite">Honolulu</div>
              <div className="txtwhite">Taipei</div>
              <div className="txtwhite">Istanbul</div>
              <div className="txtwhite">Nairobi</div>
              <div className="txtwhite">Auckland</div>
              <div className="txtwhite">Kyiv</div>
              <div className="txtwhite">Rio de Janeiro</div>
              <div className="txtwhite">Johannesburg</div>
              <div className="txtwhite">Addis Ababa</div>
              <div className="txtwhite">Singapore</div>
              <div className="txtyellow">LONDON/GMT</div>
              <div className="txtwhite">Jakarta</div>
              <div className="txtwhite">Moscow</div>
              <div className="txtwhite">Los Angeles</div>
              <div className="txtwhite">Washington DC</div>
              <div className="txtwhite">Bangkok</div>
              <div className="txtwhite">Jerusalem</div>
              <div className="txtwhite">Dubai</div>
              <div className="txtwhite">Lisbon</div>
            </div>
            <div className="timeleft">
              <div className="time">{amsterdam}</div>
              <div className="time">{honolulu}</div>
              <div className="time">{taipei}</div>
              <div className="time">{istanbul}</div>
              <div className="time">{nairobi}</div>
              <div className="time">{auckland}</div>
              <div className="time">{kyiv}</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
            </div>
            <div className="citiesright">
              <div className="txtwhite">Rome</div>
              <div className="txtwhite">Edmonton</div>
              <div className="txtwhite">Mexico City</div>
              <div className="txtwhite">Beijing</div>
              <div className="txtwhite">Pago Pago</div>
              <div className="txtwhite">Melbourne</div>
              <div className="txtwhite">New Delhi</div>
              <div className="txtwhite">Helsinki</div>
              <div className="txtwhite">Reykjavik</div>
              <div className="txtwhite">Paris</div>
              <div className="txtwhite">Baghdad</div>
              <div className="txtwhite">Buenos Aires</div>
              <div className="txtwhite">Hong Kong</div>
              <div className="txtwhite">Shanghai</div>
              <div className="txtwhite">Tokyo</div>
              <div className="txtwhite">Brisbane</div>
              <div className="txtwhite">Kuala Lumpur</div>
              <div className="txtwhite">Istanbul</div>
              <div className="txtwhite">Seoul</div>
              <div className="txtwhite">Sydney</div>
            </div>
            <div className="timeright">
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
              <div className="time">00:00</div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default WorldClock;

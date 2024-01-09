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
  const istanbul = moment.tz(time, "Asia/Istanbul").format("HH:mm");
  const nairobi = moment.tz(time, "Africa/Nairobi").format("HH:mm");
  const auckland = moment.tz(time, "Pacific/Auckland").format("HH:mm");
  const kyiv = moment.tz(time, "Europe/Kyiv").format("HH:mm");
  const rio = moment.tz(time, "Brazil/East").format("HH:mm");
  const johannesburg = moment.tz(time, "Africa/Johannesburg").format("HH:mm");
  const addis = moment.tz(time, "Africa/Addis_Ababa").format("HH:mm");
  const singapore = moment.tz(time, "Asia/Singapore").format("HH:mm");
  const london = moment.tz(time, "Europe/London").format("HH:mm");
  const jakarta = moment.tz(time, "Asia/Jakarta").format("HH:mm");
  const moscow = moment.tz(time, "Europe/Moscow").format("HH:mm");
  const losang = moment.tz(time, "America/Los_Angeles").format("HH:mm");
  const washington = moment.tz(time, "US/Eastern").format("HH:mm");
  const bangkok = moment.tz(time, "Asia/Bangkok").format("HH:mm");
  const jerusalem = moment.tz(time, "Asia/Jerusalem").format("HH:mm");
  const dubai = moment.tz(time, "Asia/Dubai").format("HH:mm");
  const lisbon = moment.tz(time, "Europe/Lisbon").format("HH:mm");

  const rome = moment.tz(time, "Europe/Rome").format("HH:mm");
  const edmonton = moment.tz(time, "America/Edmonton").format("HH:mm");
  const mexico = moment.tz(time, "America/Mexico_City").format("HH:mm");
  const beijing = moment.tz(time, "Asia/Shanghai").format("HH:mm");
  const pago = moment.tz(time, "Pacific/Pago_Pago").format("HH:mm");
  const melbourne = moment.tz(time, "Australia/Melbourne").format("HH:mm");
  const delhi = moment.tz(time, "Asia/Kolkata").format("HH:mm");
  const helsinki = moment.tz(time, "Europe/Helsinki").format("HH:mm");
  const reyk = moment.tz(time, "Atlantic/Reykjavik").format("HH:mm");
  const NYC = moment.tz(time, "America/New_York").format("HH:mm");
  const baghdad = moment.tz(time, "Asia/Baghdad").format("HH:mm");
  const buenosAires = moment.tz(time, "America/Buenos_Aires").format("HH:mm");
  const hongKong = moment.tz(time, "Asia/Hong_Kong").format("HH:mm");
  const shanghai = moment.tz(time, "Asia/Shanghai").format("HH:mm");
  const tokyo = moment.tz(time, "Asia/Tokyo").format("HH:mm");
  const adelaide = moment.tz(time, "Australia/Adelaide").format("HH:mm");
  const kualaLumpur = moment.tz(time, "Asia/Kuala_Lumpur").format("HH:mm");
  const southPole = moment.tz(time, "Antarctica/South_Pole").format("HH:mm");
  const seoul = moment.tz(time, "Asia/Seoul").format("HH:mm");
  const sydney = moment.tz(time, "Australia/Sydney").format("HH:mm");

   useEffect(() => {
     setInterval(() => {
       setTime(new Date());
     }, 1);
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
              <div className="time">{taipei}+</div>
              <div className="time">{istanbul}+</div>
              <div className="time">{nairobi}+</div>
              <div className="time">{auckland}+</div>
              <div className="time">{kyiv}+</div>
              <div className="time">{rio}</div>
              <div className="time">{johannesburg}+</div>
              <div className="time">{addis}+</div>
              <div className="time">{singapore}+</div>
              <div className="time">{london}</div>
              <div className="time">{jakarta}+</div>
              <div className="time">{moscow}+</div>
              <div className="time">{losang}</div>
              <div className="time">{washington}</div>
              <div className="time">{bangkok}+</div>
              <div className="time">{jerusalem}+</div>
              <div className="time">{dubai}+</div>
              <div className="time">{lisbon}</div>
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
              <div className="txtwhite">New York</div>
              <div className="txtwhite">Baghdad</div>
              <div className="txtwhite">Buenos Aires</div>
              <div className="txtwhite">Hong Kong</div>
              <div className="txtwhite">Shanghai</div>
              <div className="txtwhite">Tokyo</div>
              <div className="txtwhite">Adelaide</div>
              <div className="txtwhite">Kuala Lumpur</div>
              <div className="txtwhite">South Pole</div>
              <div className="txtwhite">Seoul</div>
              <div className="txtwhite">Sydney</div>
            </div>
            <div className="timeright">
              <div className="time">{rome}</div>
              <div className="time">{edmonton}</div>
              <div className="time">{mexico}</div>
              <div className="time">{beijing}+</div>
              <div className="time">{pago}</div>
              <div className="time">{melbourne}+</div>
              <div className="time">{delhi}+</div>
              <div className="time">{helsinki}+</div>
              <div className="time">{reyk}</div>
              <div className="time">{NYC}</div>
              <div className="time">{baghdad}+</div>
              <div className="time">{buenosAires}</div>
              <div className="time">{hongKong}+</div>
              <div className="time">{shanghai}+</div>
              <div className="time">{tokyo}+</div>
              <div className="time">{adelaide}+</div>
              <div className="time">{kualaLumpur}+</div>
              <div className="time">{southPole}+</div>
              <div className="time">{seoul}+</div>
              <div className="time">{sydney}+</div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default WorldClock;

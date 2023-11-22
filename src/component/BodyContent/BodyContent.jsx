import React, { useState, useEffect } from "react";
import style from "./BodyContent.module.css";
import record from "/images/icon-detailed-records.svg";
import fullCustom from "/images/icon-fully-customizable.svg";
import brandReco from "/images/icon-brand-recognition.svg";
const BodyContent = () => {
  const [temp, setTemp] = useState(0);
  const api_url = "https://tinyurl.com/api-create.php?url=";
  // console.log("Checked");

  const [inUrl, setInUrl] = useState("");
  const [respData, setRespData] = useState([]);
  const fetchDetails = async (val) => {
    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${inUrl}`
    );
    const data = await response.json();
    setRespData(data);
    console.log(respData, val);
  };

  const handleOnClick = () => {
    fetchDetails(inUrl);
  };
  useEffect(() => {
    console.log(respData, "hello");
  }, [respData]);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.top}>
          <div>
            <p className={style.head}>More than just shorter links</p>
            <p>
              Build your brand's recognition and get detailed insight on how
              your links are performing.
            </p>
          </div>
          <button className={style.btn}>Get Started</button>
          <div className={style.searchArea}>
            <form action="">
              <input
                name="url"
                id="url"
                type="text"
                placeholder="Shorten a link here..."
                value={inUrl}
                onChange={(e) => {
                  setInUrl(e.target.value);
                }}
                required
              />
              <button onClick={handleOnClick}>Shorten It!</button>
            </form>
          </div>
        </div>
        <div className={style.bottom}>
          <div className="response"></div>
          <div>
            <p className={style.title}>Advanced Statistics</p>
            <p>
              Track how your links are performing across the web with our
              advanced Statistics dashboard.
            </p>
          </div>
          <div className={style.featureSection}>
            <div style={{ left: "8.85em" }} className={style.feature}>
              <div className={style.icon}>
                <img src={brandReco} alt="" />
              </div>
              <p className={style.cardTitle}>Brand Recognition</p>
              <p>
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
            </div>
            <div style={{ top: "7em", left: "33em" }} className={style.feature}>
              <div className={style.icon}>
                <img src={fullCustom} alt="" />
              </div>
              <p className={style.cardTitle}>Detail Records</p>
              <p>
                Gain insights into who is clicking your links. Knowing when and
                where People engage with your content helps inform better
                decisions.
              </p>
            </div>
            <div
              style={{ top: "9em", left: "57.2em" }}
              className={style.feature}
            >
              <div className={style.icon}>
                <img src={record} alt="" />
              </div>
              <p className={style.cardTitle}>Fully Customizable</p>
              <p>
                Improve brand awareness and content discoverability through
                customizable link, supercharging audience engagement.
              </p>
            </div>
            <div className={style.line}></div>
            <div
              style={{ top: "15em", left: "55em" }}
              className={style.line}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContent;

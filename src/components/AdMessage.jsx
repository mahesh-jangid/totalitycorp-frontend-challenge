import React, { useState, useEffect } from "react";

const AdMessage = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="d1">
      <p>
        Shop now at the Apple Store online with many great ways to buy. Get
        free, no-contact delivery, Specialist help and
        <a className="lm2" href="# ">
          {" "}
          more<i uk-icon="chevron-right"></i>
        </a>{" "}
      </p>
    </div>
  );
};

export default AdMessage;

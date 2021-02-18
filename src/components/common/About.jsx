import React from "react";

const About = ({ developerName }) => {
  return (
    <div className="rtl">
      <div className="card text-center">
        <div className="card-header">درباره من</div>
        <div className="card-body">
          <h5 className="card-title">سلام من تیتر این کارت هستم</h5>
          <p className="card-text">
            گردآورنده ی خفن این صفحه :‌ {developerName}
          </p>
          <a
            href="https://www.github.com/thenerdone/"
            className="btn btn-primary"
          >
            صفحه گیتهاب من
          </a>
        </div>
        <div className="card-footer text-muted">تا آخر کار چیزی نمونده ;)</div>
      </div>
    </div>
  );
};

export default About;

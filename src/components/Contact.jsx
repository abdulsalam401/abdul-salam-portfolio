import React, { useRef, useState } from "react";
import { Snackbar } from "@mui/material";
import emailjs from "@emailjs/browser";
import { Bio } from "../data/constants";
const Contact = () => {
  //hooks
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // "service_ID",
        "service_sa9b2fo",
        // "template_ID",
        "template_2g2pah6",
        form.current,
        // "Public API Key",
        "UTTa2InzCgs-OvqbC"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="flex flex-col justify-center relative  items-center padding-0px">
      <div className="relative flex justify-between items-center flex-col w-full max-w-[1350px] pb-20 gap-3 ">
        <div className="text-[32px] text-center font-semibold mt-5 md:mt-3 md:text-[42px] text-darkTheme-text_primary">
          Contact
        </div>
        <div className="text-[16px] text-center max-w-[600px] text-darkTheme-text_secondary mt-3 md:text-[18px]">
          Feel free to reach out to me for any questions or opportunities!
          <br />
          <a
            href={`mailto:${Bio.email}`}
            className="text-darkTheme-primary font-semibold hover:underline"
          >
            {Bio.email}
          </a>
        </div>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-[95%] max-w-[600px] flex flex-col bg-darkTheme-card_light p-[32px] rounded-2xl shadow-md mt-7 gap-3"
        >
          <div className="text-[24px] mb-[6px] font-semibold text-darkTheme-text_primary">
            Email Me
          </div>
          <input
            placeholder="Your Email"
            name="email"
            className="flex-1 bg-transparent border border-darkTheme-text_secondary outline-none text-[18px] text-darkTheme-text_primary rounded-xl py-3 px-4 focus:border-darkTheme-primary"
          />
          <input
            placeholder="Your Name"
            name="name"
            className="flex-1 bg-transparent border border-darkTheme-text_secondary outline-none text-[18px] text-darkTheme-text_primary rounded-xl py-3 px-4 focus:border-darkTheme-primary"
          />
          <input
            placeholder="Subject"
            name="title"
            className="flex-1 bg-transparent border border-darkTheme-text_secondary outline-none text-[18px] text-darkTheme-text_primary rounded-xl py-3 px-4 focus:border-darkTheme-primary"
          />
          <textarea
            placeholder="Message"
            rows="4"
            name="message"
            className="flex-1 bg-transparent border border-darkTheme-text_secondary outline-none text-[18px] text-darkTheme-text_primary rounded-xl py-3 px-4 focus:border-darkTheme-primary"
          />
          <input
            type="submit"
            value="Send"
            className="w-full text-center bg-gradient-to-r from-pink-800 via-pink-700 to-pink-500 py-[13px] px-4 mt-2 border-none rounded-xl text-darkTheme-text_primary text-[18px] font-semibold cursor-pointer"
          />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  );
};

export default Contact;

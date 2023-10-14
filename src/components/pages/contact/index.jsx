import { useState } from "react";

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [inputBody, setBody] = useState("");

  function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      firstName,
      subject,
      email,
      inputBody,
    };
    console.log(body);
  }

  function onTextInputChange(event) {
    const value = event.target.value;
    if (event.target.name === "first-name") {
      setFirstName(value);
    }
    if (event.target.name === "subject") {
      setSubject(value);
    }
    if (event.target.name === "email") {
      setEmail(value);
    }
    if (event.target.name === "body") {
      setBody(value);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <form
        className="d-flex flex-column gap-2"
        style={{ width: "min(40em,90vw)" }}
        onSubmit={onFormSubmit}
      >
        <label htmlFor="first-name">First name</label>
        <input
          name="first-name"
          value={firstName}
          placeholder="Your first name"
          onChange={onTextInputChange}
          minLength={3}
          required
        />
        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          value={subject}
          placeholder="Your subject"
          onChange={onTextInputChange}
          required
          minLength={3}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          value={email}
          placeholder="Your email"
          onChange={onTextInputChange}
          type="email"
          required
        />
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          value={inputBody}
          placeholder="Your email"
          onChange={onTextInputChange}
          required
          minLength={3}
        />
        <button style={{ width: "7em" }} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

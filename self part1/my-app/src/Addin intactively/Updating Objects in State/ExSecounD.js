import React, { useState } from "react";

const ExSecounD = () => {
  const [details, setdetails] = useState({
    name: "Durga",
    email: "durgaprasad@79423@gmail.com",
    pass: "Prasad@123",
  });
  const eventhandling = (e) => {
    setdetails((curr) => {
      return { ...curr, [e.target.name]: e.target.value };
    });
  };
  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(details);
        }}
      >
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          value={details.name}
          onChange={eventhandling}
        />
        <br />
        <input
          type="text"
          placeholder="enter your email"
          name="email"
          value={details.email}
          onChange={eventhandling}
        />
        <br />

        <input
          type="text"
          placeholder="enter your name"
          name="pass"
          value={details.pass}
          onChange={eventhandling}
        />
        <br />
        <button>Submit</button>
      </form>
      <div>
        <h1>{details.name}</h1>
        <h1>{details.email}</h1>
        <h1>{details.pass}</h1>
      </div>
    </React.Fragment>
  );
};

export default ExSecounD;

import React from "react";
import './Talksy.css';
import assets from "../assets/assests";

const Talksy = () => {
  return (
    <div className="container">
      <h1 className="title">
         Talksy – Real-Time Communication App
      </h1>

      <h2 className="subtitle">Tech Stack:</h2>
      <p className="text">
        React.js, Firebase (authentication, real-time database)
      </p>
      <p className="text">
        React Toastify (notifications)
      </p>

      <h2 className="subtitle">Description:</h2>
      <p className="text">
        Talksy is a web-based communication app that provides real-time messaging. Users can sign up, create profiles, exchange messages, and receive notifications. It includes user login, personalized profiles, and chat history.
      </p>

      <h2 className="subtitle">Challenges and Current Status:</h2>
      <p className="text">
        I faced challenges with <strong>Firebase authentication rules, CORS policy, and server settings</strong> during hosting. I’m actively debugging and optimizing the deployment for a smooth experience.
      </p>
      <p className="text">
        This process has enhanced my understanding of <strong>hosting, security, and database management</strong>. I’m exploring solutions like adjusting CORS settings, updating Firebase security rules, and configuring environment variables.
      </p>

      <div className="about-app">
        <div>
          <img src={assets.screenshot1} alt="Screenshot 1" />
          <p>Sign Up  - [New user can Sign Up here with a Email ID Which gets Authenticated by Firebase Auth]</p>
          
        </div>
        <div>
          <img src={assets.screenshot2} alt="Screenshot 2" />
          <p>Login  - [ User can Login here with a Email ID  and there password [ Also there is a option to reset password where the verification link will be sent to their registered Email]Which gets Authenticated by Firebase Auth]</p>
        </div>
        <div>
          <img src={assets.screenshot3} alt="Screenshot 3" />
          <p>Left-Section  - [Displays the other user account name and the ones whom you have added to your friend list also you can search the users ]</p>
          <p>Top-Left-Section  - [Menu otion for the user to logout Or the button which leads to Edit profile page ]</p>
        </div>
        <div>
          <img src={assets.screenshot4} alt="Screenshot 4" />
          <p>Middle-Section  - [The Chat area Where the conversations between users are shown ]</p>
          <p>Right-Section  - [Displays the other user account Name,Photo,bio and the media files that are share between them ]</p>
        </div>
        <div>
          <img src={assets.screenshot5} alt="Screenshot 5" />
          <p>Edit Profile page - [User can Edit their profile deatils(photo,name,Bio)]</p>
        </div>
        <div>
          <img src={assets.screenshot6} alt="Screenshot 6" />
          <p> Feature to Share Images,PDF files - [A user can easily share images and even pdf files and the files will be displayed under the media section on Right side]</p>
        </div>
        <div>
          <img src={assets.screenshot7} alt="Screenshot 7" />
          <p>Final Interface  - [A logout button to make user inactive]</p>
        </div>

      </div>
    </div>
  );
};

export default Talksy;

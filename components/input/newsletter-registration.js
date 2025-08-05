import { useContext, useRef } from "react";
import classes from "./newsletter-registration.module.css";
import { NotificationContext } from "../../store/notification-context";

function NewsletterRegistration() {
  const email = useRef();
  const { showNotification } = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    showNotification({
      title: "Signing up...",
      message: "Registrating for newsletter.",
      status: "loading",
    });
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json();
        }
        response.json().then((data) => {
          throw new Error(error.message || "Something went wrong!");
        });
      })
      .then((data) =>
        showNotification({
          title: "Success!",
          message: "Successfully registrated for newsletter!",
          status: "success",
        })
      )
      .catch((error) => {
        showNotification({
          title: "Error!",
          message: error.message || "Something went wrong!",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={email}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;

import "../../styles/components/SignIn/SignInForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import login from "../../services/login";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login({ email, password });

    console.log("response", response);

    if (response.status === 200) {
      if (response.body.token) {
        localStorage.setItem("token", JSON.stringify(response.body.token));
      }
      navigate("/profile");
    }
  };

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} />
      <h1>Sign In</h1>
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  );
}

export default SignInForm;

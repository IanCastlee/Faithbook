import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  // console.log(err);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  console.log(inputs.username);
  console.log(err);
  return (
    <div className="login_2">
      <div className="login-container">
        <div className="top-wrapper">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span
              className="logo"
              style={{ fontSize: "30px", fontWeight: "700" }}
            >
              Sheep
            </span>
          </Link>
          <h3>Sign in</h3>
          <span className="dhaa">
            Don't have an account?
            <Link to="/register">
              {" "}
              <strong>Sign dddup</strong>{" "}
            </Link>
          </span>

          <h2 className="title"></h2>
        </div>

        <div className="form-wrapper">
          <div className="inputss">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <p className="fp">
            Forgot Password? <strong>Recover</strong>
          </p>

          <span
            style={{ display: "flex", justifyContent: "center", color: "red" }}
          >
            {err && err}
          </span>
          <span onClick={handleLogin} className="btn_login">
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;

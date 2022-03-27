import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { useAuthHandler } from "hooks";
import { Loader } from "components";
import { useEffect } from "react";
import { useAuth } from "context";

export function Login() {
  const {
    userAuthState: { isLoggedIn },
  } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const previousPath = state?.previousPath || "/";

  const {
    formState,
    handleLoginFormSubmit,
    handleInputChange,
    setUpTestLogin,
  } = useAuthHandler();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(previousPath, { replace: true });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const loginHandler = (e) => {
    e.preventDefault();
    handleLoginFormSubmit();
  };

  return (
    <>
      <div className={styles.authCont}>
        <h5>Log in</h5>
        <p className={styles.subtext}>
          Please login using account detail bellow.
        </p>
        <form className={styles.signupForm} onSubmit={loginHandler}>
          <div className={styles.inputGrp}>
            <label>Email address</label>
            <input
              className="input"
              type="email"
              placeholder="Email address"
              name="email"
              value={formState.email}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputGrp}>
            <label>Password</label>
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={handleInputChange}
            />
          </div>
          <Link to="" className={styles.formLink}>
            Forgot password?
          </Link>

          {formState.error && (
            <div className="txt-error">{formState.errorMsg}</div>
          )}

          <div className={styles.btnGroup}>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={formState.loading}
            >
              {formState.loading ? (
                <Loader color="#fff" height="20px" />
              ) : (
                "Log in"
              )}
            </button>
            <button className="btn outline-warning" onClick={setUpTestLogin}>
              Sign In as Guest User
            </button>
          </div>
        </form>
        <p>
          Don’t have an Account? &nbsp;
          <Link to="/signup" className={styles.formLink}>
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}

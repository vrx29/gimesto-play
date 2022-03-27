import styles from "./style.module.css";
import { Loader } from "components";
import { useAuthHandler } from "hooks/useAuthHandler";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "context";
import { useEffect } from "react";

export function SignUp() {
  const { formState, handleInputChange, handleSignUpFormSubmit } =
    useAuthHandler();
  const {
    userAuthState: { isLoggedIn },
  } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const previousPath = state?.previousPath || "/";

  useEffect(() => {
    if (isLoggedIn) {
      navigate(previousPath, { replace: true });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const signUpHandler = (e) => {
    e.preventDefault();
    handleSignUpFormSubmit();
  };

  return (
    <>
      <div className={styles.authCont}>
        <h5>Sign Up</h5>
        <p className={styles.subtext}>
          Please create your account by filling the required details.
        </p>
        <form className={styles.signupForm} onSubmit={signUpHandler}>
          <div className={styles.inputGrp}>
            <label>First name</label>
            <input
              name="firstName"
              className="input"
              type="text"
              placeholder="First name"
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputGrp}>
            <label>Last name</label>
            <input
              name="lastName"
              className="input"
              type="text"
              placeholder="Last name"
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputGrp}>
            <label>Email address</label>
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Email address"
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputGrp}>
            <label>Password</label>
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputGrp}>
            <label>Confirm Password</label>
            <input
              name="confirmPassword"
              className="input"
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
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
                "Sign Up"
              )}
            </button>
          </div>
        </form>
        <p>
          Already have an account? &nbsp;
          <Link to="/login" className={styles.formLink}>
            Log in
          </Link>
        </p>
      </div>
    </>
  );
}

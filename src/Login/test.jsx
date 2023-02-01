<main
  className="vh-100"
  style={{
    backgroundImage: `url(images/loginbg.jpg`,
    backgroundRepeat: "no-repeat",
    objectFit: "cover",
    width: "100%",
  }}
>
  <div className="container d-flex aligns-items-center justify-content-center text-center">
    <div className="card">
      <div className="card-header pt-3">
        <h3>Sign In</h3>
      </div>
      <div className="card-body pt-4">
        <div>
          <div className="input-group form-group">
            <input
              id="username"
              type="text"
              className="form-control"
              placeholder="username"
            />
          </div>
          <div className="input-group form-group mt-3">
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="password"
            />
          </div>
          <div className="row align-items-center remember mt-3">
            <input type="checkbox" />
            Remember Me
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Login"
              className="btn mt-3 w-100 login_btn"
              onClick={login}
            />
          </div>
          <div className="d-flex mt-4 justify-content-center social_icon">
            <span>
              <i className="fab fa-facebook-square"></i>
            </span>
            <span>
              <i className="fab fa-google-plus-square"></i>
            </span>
            <span>
              <i className="fab fa-twitter-square"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-center links">
          Don't have an account?<a href="#">Sign Up</a>
        </div>
        <div className="d-flex justify-content-center">
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </div>
  </div>
</main>;

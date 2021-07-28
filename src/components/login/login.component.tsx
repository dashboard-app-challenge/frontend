import { Component } from "react";
import { ILoginReq } from '../../models/dtos/login-req.dto';
import authService from '../../services/auth.service';

class LoginComponent extends Component {
  public state = {
    email: "",
    username: "",
    pass: "",
  };

  login = (e: any) => {
    e.preventDefault();

    const req: ILoginReq = {
      email: this.state.email,
      username: this.state.username,
      pass: this.state.pass,
    };

    authService
      .login(req)
      .then(() => {
        window.location.href='/dashboard';
      })
      .catch((error: any) => {
        if (error.response && error.response.data) {
          console.error(error.response.data.errMsg);
          return;
        }
        console.error(error.message);
      });
  };

  render() {
    return (
      <form>
        <h3>Login</h3>

        <div className="d-flex flex-center">
          <div className="form-group col-lg-4" style={{ margin: "15px auto" }}>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={this.state.email || ""}
              onInput={(e) => this.setState({ email: e.currentTarget.value })}
            />
          </div>

          <div className="col-1" style={{ margin: "15px auto" }}>
            or
          </div>

          <div className="form-group col-lg-4" style={{ margin: "15px auto" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={this.state.username || ""}
              onInput={(e) => this.setState({ username: e.currentTarget.value })}
            />
          </div>
        </div>

        <div className="form-group col-lg-4" style={{ margin: "15px auto" }}>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.pass || ""}
            onInput={(e) => this.setState({ pass: e.currentTarget.value })}
          />
        </div>

        <div className="col-lg-4" style={{ margin: "15px auto" }}>
          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block"
            onClick={this.login}
          >
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default LoginComponent;
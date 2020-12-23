import React, { Component } from 'react'

export default class Login extends Component {

    render() {
        return (
            <div className="flex-display">
                <div>
                    <div className="login-flex"><h3><b>User Login</b></h3></div >
                    <div className="login-main">
                        <form>
                            <div class="form-group">
                                <label for="usr">Email:</label>
                                <input type="text" class="form-control" id="usr" />
                            </div>
                            <div class="form-group">
                                <label for="pwd">Password:</label>
                                <input type="password" class="form-control" id="pwd" />
                            </div>
                            <div class="login-flex"><button type="submit" class="btn btn-default">Login</button></div>
                            <br></br>
                            <div class="login-flex">New user?<a style={{ "paddingLeft": "0.5em" }} href="#">Signup</a></div>
                        </form>
                    </div>
                </div>
            </div >

        )
    }
}

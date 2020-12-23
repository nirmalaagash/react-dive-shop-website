import React, { Component } from 'react'

export default class Signup extends Component {
    render() {
        return (
            <div className="flex-display">
                <div>
                    <div className="login-flex"><h3><b>Signup Page</b></h3></div >
                    <div className="login-main">
                        <form>
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="text" class="form-control" id="name" />
                            </div>
                            <div class="form-group">
                                <label for="usr">Email:</label>
                                <input type="text" class="form-control" id="usr" />
                            </div>
                            <div class="form-group">
                                <label for="pwd">Password:</label>
                                <input type="password" class="form-control" id="pwd" />
                            </div>
                            <div class="form-group">
                                <label for="re-pwd">Re-eneter Password:</label>
                                <input type="password" class="form-control" id="re-pwd" />
                            </div>
                            <div class="login-flex"><button type="submit" class="btn btn-default">Signup</button></div>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

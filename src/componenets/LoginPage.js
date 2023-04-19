import React from 'react'

const LoginPage = () => {
    return (
        <div>
            <div className="modal fade" id="login-page" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <label className="form-check-label" htmlFor="exampleCheck1">remember me</label>
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <a href="/" className="link-primary mx-3">Fogot password</a>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                                <a href='/' className="link-primary mx-3">Sign in with Google</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage

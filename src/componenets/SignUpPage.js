import React from 'react'

const SignUpPage = () => {
    return (
        <div>
            <div className="modal fade" id="sign-up-page" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary my-1">Sign up</button>
                                <div className="d-flex flex-wrap">
                                    <a href='/' className="link-primary mx-3">Sign in with Google</a>
                                    <a href='/' className="link-primary">Sign in with Facebook</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage

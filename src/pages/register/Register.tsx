import React from 'react'

const Register = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
          <div className="card p-4">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Register</h5>
              <form>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
                <button type="submit" className="btn btn-light w-100 mt-2">Existing User</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

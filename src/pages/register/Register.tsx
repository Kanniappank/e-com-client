import { useForm } from "react-hook-form"
import { registerValidationSchema } from "../../validationSchema/register";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  const onSubmit: any = (data: any) => console.log(data)
  const existingUser:any= ()=>navigate('/login')

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
          <div className="card p-4">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Register</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Name</label>
                  <input type="text" className={`form-control  ${errors.email && 'is-invalid'}`} id="name" placeholder="Enter Name" {...register("name")} />
                  {errors.name && <p className="invalid-feedback">{errors.name.message}</p>}

                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className={`form-control  ${errors.email && 'is-invalid'}`} id="email" placeholder="Enter email"  {...register("email")}/>
                  {errors.email && <p className="invalid-feedback">{errors.email.message}</p>}

                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className={`form-control  ${errors.email && 'is-invalid'}`} id="password" placeholder="Password" {...register("password")}/>
                  {errors.password && <p className="invalid-feedback">{errors.password.message}</p>}

                  
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="confirm-password" placeholder="Confirm Password" {...register("confirmPassword")}/>
                  {errors.confirmPassword && <p className="invalid-feedback">{errors.confirmPassword.message}</p>}

                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
                <button type="submit" className="btn btn-light w-100 mt-2" onClick={existingUser}>Existing User</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

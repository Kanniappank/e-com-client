
import { useForm } from "react-hook-form"
import { loginValidationSchema } from "../../validationSchema/login"
import { yupResolver } from "@hookform/resolvers/yup";



const Login = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit: any = (data: any) => console.log(data)

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
          <div className="card p-4">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Login</h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                    <input className={`form-control  ${errors.email && 'is-invalid'}`} id="email" placeholder="Enter email" {...register("email")} />
                    {errors.email && <p className="invalid-feedback">{errors.email.message}</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className={`form-control  ${errors.password && 'is-invalid'}`} id="password" placeholder="Password" {...register("password")} />
                    {errors.password && <p className="invalid-feedback">{errors.password.message}</p>}
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

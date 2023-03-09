
export default function Register() {
    return (
        <div className="register--container w-50 mx-auto">
            <h1 className="text-center m-5">Login page</h1>
            <form action="">
                <div className="form-group m-3">
                    <label htmlFor="name" className="mb-1">Names</label>
                    <input type="text" className="form-control" id="name" placeholder="Example : Joe Doe" name="name" />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="email" className="mb-1">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Example : Joe-doe@gmail.com" name="email" />
                </div>
                <div className="form-group m-3">
                    <label htmlFor="password" className="mb-1">Password</label>
                    <input type="text" className="form-control" id="password" name="password" placeholder="Password" />
                </div>
                <div className="m-3">
                    <input type="submit" name="" id="" value="Register" className="btn btn-primary btn-lg"/>
                </div>
            </form>
        </div>
    )
}
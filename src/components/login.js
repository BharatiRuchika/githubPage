import logo from '../logo.svg';
const Login = () => {
    const handleClick = (name) => {
        console.log("handleclick called")
        if (name == "login") {
            var signup_element = document.getElementById("signup");
            var login_element = document.getElementById("login");
            signup_element.classList.remove("signup_heading");
            login_element.classList.add("login_heading");
        } else {
            var signup_element = document.getElementById("signup");
            var login_element = document.getElementById("login");
            signup_element.classList.add("signup_heading");
            login_element.classList.remove("login_heading");
        }
    }
    return (<>
        <div className="container row">
            <div className="formContainer col-12 col-sm-12 col-lg-8 col-xl-8 col-md-8">
                <div className='row'>
                    <div className="col-12 col-sm-12 col-lg-12 col-md-12">
                    <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </div>
           
            <div className="row">
                <div id="randomText" className="col-12 col-sm-12 col-lg-12 col-md-12 col-xl-12">
                    <div>SOME RANDOM TEXT, SOME RANDOM TEXT,</div> 
                    <div> SOME RANDOM TEXT ,SOME RANDOM TEXT, SOME RANDOM</div>
                </div>
            </div>
                <div className="row header">
                    <div onClick={() => handleClick("login")} id="login" className="col-6 col-md-6 col-sm-6 col-lg-6 login_heading">
                        <span>Login</span>
                    </div>
                    <div onClick={() => handleClick("signup")} id="signup" className="col-6 col-md-6 col-sm-6 col-lg-6">
                        <span>Signup</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-12 col-md-12">
                        <input type="text" placeholder="Email Address" />
                    </div>
                    <div className="col-12 col-sm-12 col-lg-12 col-md-12">
                        <input type="text" placeholder="Password" />
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <button className="login_btn">Login</button>

                    </div>
                    </div>
                    <div className='row'>
                        <div className="offset-5 offset-sm-5 offset-lg-6 offset-md-6 offset-xl-6 col-7 col-sm-7 col-md-6 col-lg-6">
                            <div className="forgetPass">ForgetPassword?
                            </div>
                        </div>

                    </div>
               
                <div className='row'>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="footer">or login with
                        </div>
                    </div>
                </div>
                <div className='row' id="logos">
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <div><img src="/images/googleLogo.png" /></div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <div><img src="/images/facebookLogo1.png" /></div>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                        <div><img src="/images/twitterLogo.png" /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-sm-12 col-lg-12 createAccount">
                        <span>Don't have an account? <span> Create new now!</span></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-sm-12 col-lg-12 conditions">
                        <span>By signing up, you are agree with our <span>Terms and Conditions</span></span>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Login;
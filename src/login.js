
import './login.css'


function Login() {
    return (

        <div className="box-form">
            <div class="left">
                <div class="overlay">
                <h1>Hello World</h1>
                <p className='pElem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                Curabitur et est sed felis aliquet sollicitudin</p>
                <p className='pElem2'>login with social media</p>
                <span>
                   
                    <a href="#" className='icon1'><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="#" className='icon2'><i class="fa fa-twitter" aria-hidden="true"></i> </a>
                    <a href="#" className='icon3' ><i class="fa fa-github" aria-hidden="true"></i> </a>
                </span>
                </div>
            </div>
            
            
                <div class="right">
                <h5>Login </h5>
                <p>Don't have an account? <a href="#">Creat Your Account</a> it takes less than a minute</p>
                <div class="inputs">
                    <input type="text" placeholder="user name"/>
                    <br/>
                    <input type="password" placeholder="password"/>
                </div>
                    
                    <br/>
                    
                <div class="remember-me--forget-password">
                       
            <label>
                <input type="checkbox" name="item" checked/>
                <span class="text-checkbox">Remember me</span>
            </label>
                    <a href='#'>forget password?</a>
                </div>
                    
                    <br/>
                    <button>Login</button>
            </div>
            
        </div>


    )
}

export default Login
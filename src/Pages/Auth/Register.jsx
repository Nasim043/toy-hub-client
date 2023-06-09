import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
  const navigate = useNavigate()
  const { register, logOut, updateUserProfile, googleLogIn, githubLogIn } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('')
  const [authError, setAuthError] = useState('')
  useTitle('Register')

  const handleSubmit = (e) => {
    e.preventDefault();

    register(email, password)
      .then(result => {
        updateUserProfile(name, url)
          .then(result => {
            handleLogOut();
          })
          .catch(error => console.log(error.message))
      })
      .catch(error => {
        setAuthError(error.message.split('/')[1].slice(0, -2));
      })
  }
  // google
  const handleGoogleLogin = () => {
    googleLogIn()
      .then(result => {
        handleLogOut();
      })
      .catch(error => setAuthError(error.message.split('/')[1].slice(0, -2)))
  }
  // github
  const handleGithubAuth = () => {
    githubLogIn()
      .then(result => {
        handleLogOut();
      })
      .catch(error => setAuthError(error.message.split('/')[1].slice(0, -2)))
  }
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate('/login');
      }).catch((error) => {
        console.log(error.message);
      });
  }

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleUrl = (e) => {
    setUrl(e.target.value);
  }

  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)) {
      setEmailError("Email is not valid");
    } else {
      setEmailError("");
    }
  }
  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError('Password should be at least 6 character long');
    } else {
      setPasswordError('');
    }
  }
  return (
    <div className="my-container">
      <div className="card w-11/12 sm:w-4/5 max-w-xl mx-auto shadow-2xl bg-base-100 mb-10">
        <div className="card-body">
          {authError && <span className='text-red-500 text-sm mt-1 error'>{authError}</span>}
          <form onSubmit={handleSubmit}>
            <h3 className='text-2xl font-semibold'>Create Account</h3>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" value={name} onChange={handleName} placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input type="text" value={url} onChange={handleUrl} placeholder="Photo Url" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email <span className='text-red-500 text-lg mt-1'>*</span></span>
              </label>
              <input type="email" value={email} onChange={handleEmail} placeholder="email" className="input input-bordered" required />
              {emailError && <span className='text-red-500 text-lg mt-1 error'>{emailError}</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password <span className='text-red-500 text-sm mt-1'>*</span></span>
              </label>
              <input type="password" value={password} onChange={handlePassword} placeholder="password" className="input input-bordered" required />
              {passwordError && <span className='text-red-500 text-sm mt-1 error'>{passwordError}</span>}
              <label className="label">
                <p className="label-text-alt">Already Have an Account? <Link to="../login" className="label-text-alt link link-hover text-primary">Login</Link></p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="divider my-3">OR</div>
          <div className="form-control">
            <button className="btn btn-outline btn-primary mb-2" onClick={handleGoogleLogin}><FaGoogle className='me-2'></FaGoogle> Register with Google</button>
            <button className="btn btn-outline" onClick={handleGithubAuth}><FaGithub className='me-2'></FaGithub> Register with Github</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
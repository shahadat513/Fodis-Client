import { useContext } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { auth } from "../../firebase/firebase.init";

const LogIn = () => {
  const { user, setUser } = useContext(AuthContext); // Added `setUser` to update user state
  const navigate = useNavigate();
  const location = useLocation();
  const googleProvider = new GoogleAuthProvider();

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("User signed in successfully:", res.user);
        setUser(res.user); // Update user state

        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "You have signed in successfully!",
          icon: "success",
        }).then(() => {
          const redirectTo = location?.state?.from || "/";
          navigate(redirectTo, { replace: true });
        });
      })
      .catch((error) => {
        console.error("Error signing in:", error.message);
        Swal.fire("Error", error.message, "error"); // Show error alert
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log("Google Sign-In successful:", res.user);
        setUser(res.user); // Update user state

        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "You have signed in with Google successfully!",
          icon: "success",
        }).then(() => {
          navigate("/", { replace: true }); // Redirect to home page
        });
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error.message);
        Swal.fire("Error", error.message, "error"); // Show error alert
      });
  };

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-teal-400 via-green-400 to-lime-500 btn-primary">Log In</button>
            </div>
            <NavLink to="/signup">
              <label className="label">
                <span className="text-sm">New?</span>
                <span className="label-text-alt link link-hover font-semibold text-blue-500"> Sign Up</span>
              </label>
            </NavLink>
            <hr />
            <div className="form-control mt-6">
              <button type="button" onClick={handleGoogleLogin} className="btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                <i className="fa-brands fa-google text-red-600"></i> Log In With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

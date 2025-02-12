import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const { createUser, manageProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleSignUp = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const image = form.image.value.trim();
    const password = form.password.value.trim();

    // Validation checks
    if (password.length < 6) {
      Swal.fire("Error", "Password should be at least 6 characters long.", "error");
      return;
    }

    if (!/[a-z]/.test(password)) {
      Swal.fire("Error", "Password must contain at least one lowercase letter.", "error");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Swal.fire("Error", "Password must contain at least one uppercase letter.", "error");
      return;
    }

    try {
      // Create user in Firebase
      const userCredential = await createUser(email, password);
      console.log("User created successfully:", userCredential.user);

      // Update user profile
      await manageProfile(name, image);

      Swal.fire({
        title: "Success!",
        text: "Account created successfully!",
        icon: "success",
      }).then(() => {
        navigate("/"); // Redirect to home
      });
    } catch (error) {
      console.error("Error during sign-up:", error.message);
      Swal.fire("Error", error.message, "error");
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Sign-Up successful:", user);

      Swal.fire({
        title: "Success!",
        text: "Signed up with Google successfully!",
        icon: "success",
      }).then(() => {
        navigate("/"); // Redirect to home
      });
    } catch (error) {
      console.error("Error during Google Sign-Up:", error.message);
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <div className="hero bg-[#acb9c2] min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Profile Image URL"
                name="image"
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
            </div>
            <div className="form-control mt-6">
              <button className="btn border-0  bg-[#8eef45]">Sign Up</button>
            </div>
            <NavLink to="/login">
              <label className="label">
                <span className="text-sm">Already have an account?</span>
                <span 
                className="label-text-alt link link-hover font-semibold text-blue-500"
                > Log In</span>
              </label>
            </NavLink>
            <hr />
            <div className="form-control mt-6">
              <button type="button" onClick={handleGoogleSignUp} className="btn border-[#bd58e5]  btn-outline 0">
                <i className="fa-brands fa-google text-red-600"></i> <FaGoogle></FaGoogle> Sign Up With Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

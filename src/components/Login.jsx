import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ChefHat, UserPlus } from "lucide-react";
import { loginPageStyles as styles } from "@/constants/styles";
import GoogleIcon from "./icons/GoogleIcon";

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  icon: Icon,
  hasRightButton = false,
  rightButton,
  autoComplete = "on",
}) => (
  <div>
    <label className={styles.label}>{label}</label>
    <div className="relative">
      <Icon className={styles.iconLeft} />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={hasRightButton ? styles.inputWithButton : styles.input}
        placeholder={placeholder}
        required
        autoComplete={autoComplete}
      />
      {rightButton}
    </div>
  </div>
);

export default function Login({
  onLogin,
  onSignUp,
  externalError,
  loading,
  onGoogleLogin,
}) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [internalError, setInternalError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInternalError("");

    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        setInternalError("Passwords don't match");
        return;
      }
      if (formData.password.length < 6) {
        setInternalError("Password should be at least 6 characters long!");
        return;
      }
      onSignUp({ email: formData.email, password: formData.password });
    } else {
      onLogin({ email: formData.email, password: formData.password });
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({ email: "", password: "", confirmPassword: "" });
    setInternalError("");
  };

  const error = internalError || externalError;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.headerIconWrapper}>
            <ChefHat className={styles.headerIcon} />
          </div>
          <h1 className={styles.title}>My Cookbook</h1>
          <p className={styles.subtitle}>
            {isSignUp
              ? "Create your account to start cooking!"
              : "Welcome back, chef!"}
          </p>
        </div>

        {error && (
          <div className={styles.errorBox}>
            <p className={styles.errorText}>{error}</p>
          </div>
        )}

        <div className={styles.formContainer}>
          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email"
            icon={Mail}
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="off"
          />

          <InputField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            icon={Lock}
            value={formData.password}
            onChange={handleInputChange}
            hasRightButton={true}
            autoComplete="new-password"
            rightButton={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.iconRight}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            }
          />

          {isSignUp && (
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your password"
              icon={Lock}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              autoComplete="new-password"
            />
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className={styles.buttonPrimary}
          >
            {loading ? (
              <>
                <div className={styles.spinner}></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                {isSignUp ? (
                  <UserPlus className={styles.buttonIcon} />
                ) : (
                  <ChefHat className={styles.buttonIcon} />
                )}
                <span>{isSignUp ? "Create Account" : "Sign In"}</span>
              </>
            )}
          </button>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider}>
          <p className={styles.dividerText}>OR</p>
        </div>

        <button
          type="button"
          onClick={onGoogleLogin}
          disabled={loading}
          className={styles.buttonSocial}
        >
          <GoogleIcon />
          <span>Sign in with Google</span>
        </button>

        <div className={styles.toggleContainer}>
          <p className={styles.toggleText}>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button onClick={toggleMode} className={styles.toggleLink}>
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>

        {/* Fun Footer */}
        <div className={styles.footer}>
          <p className={styles.footerText}>
            🍳 Ready to cook up something amazing? 🍳
          </p>
        </div>
      </div>
    </div>
  );
}

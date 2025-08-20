"use client";
import Link from "next/link";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { pattern, required, run } from "../../../shared/validation";
import { emailRegex, passwordRegex } from "../../../shared/constants";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    //==============================Visibility Password=====================================
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmailError("");
        setPasswordError("");

        const emailErr = run(email, [
            required('Email address not found'),
            pattern(emailRegex, 'Email address not found'),
        ]);

        const passErr = run(password, [
            required('Incorrect password. Please try again'),
            pattern(passwordRegex, 'Incorrect password. Please try again'),
        ]);

        setEmailError(emailErr || '');
        setPasswordError(passErr || '');

        if (emailErr || passErr) return;
        // fetch/login real más adelante
        console.log('Login OK');
    }

    return (
        <div className="login">
            <div className="login__glow" aria-hidden />

            <header className="login__header container">
                <h1 className="login__title">LOG IN</h1>
                <nav className="login__nav">
                    <Link className="login__nav-link login__nav-link--active" href="#">Home</Link>
                    <Link className="login__nav-link" href="#">About us</Link>
                    <Link className="login__nav-link" href="#">Blog</Link>
                    <Link className="login__nav-link" href="#">Pricing</Link>
                </nav>
            </header>

            <section className="container">
                <div className="login__main">
                    <div className="login__panel">
                        <div className="login__success">
                            <div className="login__intro">
                                <h2 className="login__welcome">Welcome back</h2>
                                <h3 className="login__subtitle">
                                    Log in to manage your rental shop with ease
                                </h3>
                            </div>
                        </div>

                        <form className="login__form" noValidate onSubmit={handleLogin}>
                            <div className="login__fields">
                                <div className="field">
                                    <div className={`field__control ${emailError ? 'field__control--error' : ''}`}>
                                        <div className={`field__label ${emailError ? 'field__label--error' : ''}`}>
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <input
                                            id="email"
                                            type="email"
                                            className="field__input"
                                            placeholder="Enter Your Email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (emailError) setEmailError("");
                                            }}
                                        // onChange real => findCompanies(e.target.value)}
                                        />
                                    </div>
                                    {emailError && (
                                        <p className="field__error">{emailError}</p>
                                    )}
                                </div>

                                <div className="container__password">
                                    <div className="field">
                                        <div className={`field__control ${passwordError ? 'field__control--error' : ''}`}>
                                            <div className={`field__label ${passwordError ? 'field__label--error' : ''}`}>
                                                <label htmlFor="password">Password</label>
                                            </div>
                                            <input
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                className="field__input"
                                                placeholder="Enter Your Password"
                                                value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                    if (passwordError) setPasswordError("");
                                                }}
                                            />
                                            <button
                                                className="login__page__showpass__btn"
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? (
                                                    <img src="./doNotShowPass.svg" alt="Hide password" />
                                                ) : (
                                                    <img src="./showPass.svg" alt="Show password" />
                                                )}
                                            </button>
                                        </div>
                                        {passwordError && (
                                            <p className="field__error">{passwordError}</p>
                                        )}
                                    </div>
                                    <div className="login__page__form__remember__password">
                                        <label className="login__checkbox__remember">
                                            <Form.Check
                                                id="remember"
                                                type="checkbox"
                                                className="main-checkbox"
                                            />
                                            <p>Remember Me</p>
                                        </label>
                                        <Link className="forgot__password" href="#">
                                            Forgot Password?
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="container__btn__login__link">
                                <button
                                    className="login__btn"
                                    type="submit"
                                >
                                    Continue
                                </button>
                                <div className="login__footer">
                                    <span className="login__muted">Don’t have an account?</span>
                                    <Link className="link__register__new" href="/register">Register now</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
            <div className="login__brand">
                <h2><strong>Alo</strong><span>Manager</span></h2>
            </div>
        </div>
    );
}

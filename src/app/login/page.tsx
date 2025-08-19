"use client";
import Link from "next/link";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function Login() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login">
            {/* Glow azul de fondo */}
            <div className="login__glow" aria-hidden />

            {/* Header superior */}
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
                            <div className="login__intro"> {/* frame */}
                                <h2 className="login__welcome">Welcome back</h2>
                                <h3 className="login__subtitle">
                                    Log in to manage your rental shop with ease
                                </h3>
                            </div>
                        </div>

                        <form className="login__form" action="#">
                            <div className="login__fields">
                                <div className="field">
                                    <div className="field__control">
                                        <div className="field__label">
                                            <label htmlFor="email">Email</label>
                                        </div>
                                        <input
                                            id="email"
                                            type="email"
                                            className="field__input"
                                            placeholder="Enter Your Email"
                                        />
                                    </div>
                                </div>

                                <div className="container__password">
                                    <div className="field">
                                        <div className="field__control">
                                            <div className="field__label">
                                                <label htmlFor="password">Password</label>
                                            </div>
                                            <input
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                className="field__input"
                                                placeholder="Enter Your Password"
                                                onChange={(e) => setPassword(e.target.value)}
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
                                <button className="login__btn" type="submit">Continue</button>
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
                <strong>Alo</strong><span>Manager</span>
            </div>
        </div>
    );
}

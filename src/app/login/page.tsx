"use client";
import Link from "next/link";

export default function Login() {
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

            {/* Card centro */}
            <section className="container">
                <div className="login__intro">
                    <h2 className="login__welcome">Welcome back</h2>
                    <p className="login__subtitle">
                        Log in to manage your rental shop with ease
                    </p>
                </div>

                <form className="login__form" action="#">
                    {/* Email */}
                    <label className="input">
                        <span className="input__label">Email</span>
                        <input className="input__control" type="email" placeholder="Enter Your Email" />
                    </label>

                    {/* Password */}
                    <label className="input">
                        <span className="input__label">Password</span>
                        <div className="input__with-icon">
                            <input className="input__control" type="password" placeholder="Enter Your Password" />
                            {/* ícono ojo se agrega luego */}
                        </div>
                    </label>

                    {/* Remember / Forgot */}
                    <div className="login__row">
                        <label className="checkbox">
                            <input type="checkbox" />
                            <span>Remember Me</span>
                        </label>
                        <Link className="login__link--primary" href="#">Forgot Password?</Link>
                    </div>

                    {/* CTA */}
                    <button className="btn btn--primary" type="submit">Continue</button>

                    {/* Register */}
                    <div className="login__footer">
                        <span className="login__muted">Don’t have an account?</span>
                        <Link className="login__link--primary" href="/register">Register now</Link>
                    </div>
                </form>
            </section>

            {/* Marca */}
            <div className="login__brand">
                <strong>Alo</strong><span>Manager</span>
            </div>
        </div>
    );
}

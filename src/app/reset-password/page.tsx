'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ResetPasswordPage() {
    const [error, setError] = useState<string>("")

    return (
        <>
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
                    <div className="login__main" >
                        <div className="login__panel login__panel--with-brand">
                            <div className="login__success--with-brand">
                                <div className="login__intro">
                                    <h2 className="login__title">Forgot password</h2>
                                    <h3 className="login__subtitle">
                                        Check your email for password reset instructions and enter the OTP to continue
                                    </h3>
                                </div>

                                <div className="login__company-brand">
                                    {/*Ingresar imagen de la compania*/}
                                    <Image
                                        src="/imgBikeExample.svg"
                                        alt=""
                                        width={140}
                                        height={140}
                                    />
                                </div>
                            </div>
                            <div className="login__otp">
                                <div className="login__otp-head">
                                    <p className="login__otp-title">Enter OTP code below</p>

                                    {/* Combinarlo con los devs */}
                                    <div className={`login__otp-grid ${error ? 'login__otp-grid--error' : ''}`} role="group" aria-label="One-time code">
                                        {Array.from({ length: 6 }).map((_, i) => (
                                            <input
                                                key={i}
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={1}
                                                className="login__otp-input"
                                                aria-label={`Digit ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                    {error && (
                                        <p id="otp-error" className="field__error">Invalid OTP. Please try again</p>
                                    )}
                                </div>
                                <div className="container__btn__login__link">
                                    {/* Funcionalidad real al boton */}
                                    <button
                                        className="login__btn"
                                        type="button"
                                        onClick={() => setError('Invalid OTP. Please try again')}
                                    >
                                        Continue
                                    </button>
                                    <div className="login__footer">
                                        <span className="login__muted">Didn’t receive the code?</span>
                                        <Link className="login__link" href="/">Resend</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="login__brand">
                    <h2><strong>Alo</strong><span>Manager</span></h2>
                </div>
            </div>
        </>
    )
}
'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { passwordRegex } from "../../../shared/constants";

export default function ResetPasswordPage() {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const [error, setError] = useState<string>("")
    const [otpCodeFormVisibility, setOtpCodeFormVisibility] = useState<boolean>(false)
    const [resetPasswordVisibility, setResetPasswordVisibility] = useState<boolean>(false)

    //==============================Mock params Demo=====================================
    useEffect(() => {
        const apply = () => {
            setError("");
            const hash = (window.location.hash.replace("#", "") || "otp") as "otp" | "password";

            if (hash === "otp") {
                setOtpCodeFormVisibility(true);
                setResetPasswordVisibility(false);
            }
            if (hash === "password") {
                setOtpCodeFormVisibility(false);
                setResetPasswordVisibility(true);
            }
        };
        apply();
        window.addEventListener("hashchange", apply);
        return () => window.removeEventListener("hashchange", apply);
    }, []);

    //==============================Visibility Password=====================================
    const toggleNewPasswordVisibility = () => { setShowNewPassword(!showNewPassword) };
    const toggleConfirmPasswordVisibility = () => { setShowConfirmPassword(!showConfirmPassword) };

    //============================== Handle reset password =====================================

    const handleResetDemo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setError("");

        if (!password || !confirmPassword) {
            setError("Passwords don’t match.");
            return;
        }

        if (!passwordRegex.test(password) || !passwordRegex.test(confirmPassword)) {
            setError("Passwords don’t match.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords don’t match");
            return;
        }

        window.location.hash = "success";
    };

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
                            {otpCodeFormVisibility && (
                                <>
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
                                </>
                            )}
                            {resetPasswordVisibility && (
                                <>
                                    <div className="login__success--with-brand">
                                        <div className="login__intro">
                                            <h2 className="login__title">Reset your password</h2>
                                            <h3 className="login__subtitle">
                                                Enter your new password
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


                                    <Form className="login__form" noValidate>
                                        <div className="login__fields">
                                            <div className="field">
                                                <div className={`field__control ${error ? 'field__control--error' : ''}`}>
                                                    <div className="field__label">
                                                        <label htmlFor="newPassword">
                                                            New Password<span className="required-star">*</span>
                                                        </label>
                                                    </div>
                                                    <input
                                                        id="newPassword"
                                                        type={showNewPassword ? 'text' : 'password'}
                                                        className="field__input"
                                                        placeholder="Enter your new password"
                                                        value={password}
                                                        onChange={(e) => {
                                                            setPassword(e.target.value)
                                                            if (error) setError("");
                                                        }}
                                                    />
                                                    <button
                                                        className="login__showpass-btn"
                                                        type="button"
                                                        onClick={toggleNewPasswordVisibility}
                                                    >
                                                        {showNewPassword ? (
                                                            <Image
                                                                src="./doNotShowPass.svg"
                                                                alt="Hide password"
                                                                width={20}
                                                                height={20}
                                                            />
                                                        ) : (
                                                            <Image
                                                                src="./showPass.svg"
                                                                alt="Show password"
                                                                width={20}
                                                                height={20}
                                                            />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <div className={`field__control ${error ? 'field__control--error' : ''}`}>
                                                    <div className="field__label">
                                                        <label htmlFor="confirmPassword">
                                                            Confirm Password<span className="required-star">*</span>
                                                        </label>
                                                    </div>
                                                    <input
                                                        id="confirmPassword"
                                                        type={showConfirmPassword ? 'text' : 'password'}
                                                        className="field__input"
                                                        placeholder="Enter Your Password"
                                                        value={confirmPassword}
                                                        onChange={(e) => {
                                                            setConfirmPassword(e.target.value)
                                                            if (error) setError("");
                                                        }}
                                                    />
                                                    <button
                                                        className="login__showpass-btn"
                                                        type="button"
                                                        onClick={toggleConfirmPasswordVisibility}
                                                    >
                                                        {showConfirmPassword ? (
                                                            <Image
                                                                src="./doNotShowPass.svg"
                                                                alt="Hide password"
                                                                width={20}
                                                                height={20}
                                                            />
                                                        ) : (
                                                            <Image
                                                                src="./showPass.svg"
                                                                alt="Show password"
                                                                width={20}
                                                                height={20}
                                                            />
                                                        )}
                                                    </button>
                                                </div>
                                                {error && <p className="field__error">{error}</p>}
                                            </div>
                                        </div>
                                        <div className="container__btn__login__link">
                                            <button className="login__btn" type="button" onClick={handleResetDemo}>
                                                Reset password
                                            </button>

                                            {/* Ingresar ruta real */}
                                            <div className="login__link--go-back">
                                                <Link href="/forgot-password">Go back</Link>
                                            </div>
                                        </div>
                                    </Form>
                                </>
                            )}
                        </div>
                    </div>
                </section >
                <div className="login__brand">
                    <h2><strong>Alo</strong><span>Manager</span></h2>
                </div>
            </div >
        </>
    )
}
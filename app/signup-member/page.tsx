'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    //==============================Visibility Password=====================================
    const togglePasswordVisibility = () => { setShowPassword(!showPassword) };
    const toggleConfirmPasswordVisibility = () => { setShowConfirmPassword(!showConfirmPassword) };
    return (
        <>
            <div className="login signup">
                <header className="login__header container">
                    <h1 className="title__header">SIGN UP</h1>
                </header>
                <section className="container">
                    <div className="signup__intro">
                        <h2 className="form__title">
                            Organize your shop, save time, and stay in control — all in one place, effortlessly.
                        </h2>
                        <h3 className="form__subtitle">
                            Get started and simplify your rentals today
                        </h3>
                    </div>

                    <div className="signup__layout">
                        <div className="login__panel login__panel--slim member__panel">
                            <Form className="signup__form" noValidate>
                                <div className="login__fields login__fields--grid">

                                    <div className="field">
                                        <div className="field__control">
                                            <div className="field__label">
                                                <label htmlFor="firstName">First Name<span className="required-star">*</span></label>
                                            </div>
                                            <input id="firstName" type="text" className="field__input" placeholder="Enter your name" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="field__control">
                                            <div className="field__label">
                                                <label htmlFor="lastName">Last Name<span className="required-star">*</span></label>
                                            </div>
                                            <input id="lastName" type="text" className="field__input" placeholder="Enter your last name" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="field__control">
                                            <div className="field__label">
                                                <label htmlFor="password">Password <span className="required-star">*</span></label>
                                            </div>
                                            <input
                                                id="password"
                                                type={showPassword ? 'text' : 'password'}
                                                className="field__input"
                                                placeholder="Enter your password"
                                            />
                                            <button
                                                type="button"
                                                className="login__showpass-btn"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? (
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
                                        <div className="field__control">
                                            <div className="field__label">
                                                <label htmlFor="confirm">Confirm Password <span className="required-star">*</span></label>
                                            </div>
                                            <input
                                                id="confirm"
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                className="field__input"
                                                placeholder="Enter your password"
                                            />
                                            <button
                                                type="button"
                                                className="login__showpass-btn"
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
                                    </div>
                                </div>

                                <div className="signup__checks">
                                    <label className="login__checkbox__remember">
                                        <Form.Check
                                            type="checkbox"
                                            className="main-checkbox"
                                            defaultChecked
                                        />
                                        <span className="">
                                            I agree to the <a className="login__link" href="#">Terms and Condition & Privacy Policy</a>
                                        </span>
                                    </label>

                                    <label className="login__checkbox__remember">
                                        <Form.Check
                                            type="checkbox"
                                            className="main-checkbox"
                                            defaultChecked
                                        />
                                        <span className="">I want to receive emails with the last updates</span>
                                    </label>
                                </div>

                                <div className="container__btn__login__link">
                                    <button className="login__btn" type="button">Create my free account</button>
                                    <div className="login__footer">
                                        <span className="login__muted">Already have an account?</span>
                                        <Link className="login__link" href="/login">Log in</Link>
                                    </div>
                                </div>

                                {/* Idiomas */}
                                <div className="signup__lang">
                                    <Image
                                        src="/flagEnglish.svg"
                                        alt=""
                                        width={40}
                                        height={24}
                                        className="signup__lang-flag"
                                    />
                                    <div className="signup__lang-selectwrap">
                                        <select
                                            id="language"
                                            className="signup__lang-select "
                                            defaultValue="en"
                                        >
                                            <option value="en">English</option>
                                            <option value="es">Español</option>
                                            <option value="pt">Português</option>
                                        </select>
                                    </div>
                                </div>
                            </Form>
                        </div>

                        <div className="signup__visual">
                            <div className="signup__art" aria-hidden>
                                <div className="signup__glow" />

                                <div className="signup__art-item signup__art-item--dashboard">
                                    <Image src="/signup-dashboard.svg" alt="" width={400} height={273} />
                                </div>
                                <div className="signup__art-item signup__art-item--chart">
                                    <Image src="/signup-chart.svg" alt="" width={337} height={286} />
                                </div>
                                <div className="signup__art-item signup__art-item--person">
                                    <Image src="/signup-person.svg" alt="" width={365} height={400} />
                                </div>
                                <div className="signup__art-item signup__art-item--bike">
                                    <Image src="/signup-bike.svg" alt="" width={77} height={52} />
                                </div>
                            </div>
                            <div className="login__brand signup__brand">
                                <h2><strong>Alo</strong><span>Manager</span></h2>
                            </div>
                        </div>
                    </div >
                </section >
            </div >
        </>
    );
}
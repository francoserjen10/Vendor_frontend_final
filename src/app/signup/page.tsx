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
            <div className="login signup"> {/*Login divide en 3 partes la pantalla ojo*/}
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
                        <div className="login__panel login__panel--slim">
                            <Form className="signup__form" noValidate>
                                {/* GRID con 2 columnas */}
                                <div className="login__fields login__fields--grid">
                                    {/* Fila 1 */}
                                    <div className="field">
                                        <div className="field__control u-shadow">
                                            <div className="field__label">
                                                <label htmlFor="firstName">First Name<span className="required-star">*</span></label>
                                            </div>
                                            <input id="firstName" type="text" className="field__input" placeholder="Enter your name" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="field__control u-shadow">
                                            <div className="field__label">
                                                <label htmlFor="lastName">Last Name<span className="required-star">*</span></label>
                                            </div>
                                            <input id="lastName" type="text" className="field__input" placeholder="Enter your last name" />
                                        </div>
                                    </div>

                                    {/* Fila 2 */}
                                    <div className="field">
                                        <div className="field__control u-shadow">
                                            <div className="field__label">
                                                <label htmlFor="email">Email<span className="required-star">*</span>
                                                </label>
                                            </div>
                                            <input id="email" type="text" className="field__input" placeholder="Enter your email" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="field__control field__control--with-chip u-shadow">
                                            <div className="field__label">
                                                <label htmlFor="mobile">Mobile Number <span className="required-star">*</span></label>
                                            </div>
                                            <select
                                                id="dialCode"
                                                className="field__chip-select"
                                                defaultValue="+91"
                                                aria-label="Country code"
                                            >
                                                {/* Agregar funcionalidad */}
                                                <option value="+91">+91</option>
                                            </select>
                                            <input id="mobile" type="tel" className="field__input" placeholder="000 00 00" />
                                        </div>
                                    </div>

                                    {/* Fila 3 */}
                                    <div className="field">
                                        <div className="field__control u-shadow">
                                            <div className="field__label">
                                                <label htmlFor="companyName">Company name<span className="required-star">*</span>
                                                </label>
                                            </div>
                                            <input id="companyName" type="text" className="field__input" placeholder="Enter your company name" />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="field__control field__control--select u-shadow">
                                            <div className="field__label">
                                                <label htmlFor="industry">Select your industry</label>
                                            </div>
                                            <select id="industry" className="field__input field__select" required defaultValue="">
                                                {/* Agregarle funcionalidad */}
                                                <option value="">Select your industry</option>
                                            </select>
                                            <Image
                                                src="/DownArrow.svg"
                                                alt=""
                                                width={24}
                                                height={24}
                                                className="field__caret"
                                            />
                                        </div>
                                    </div>

                                    {/* Fila 4 */}
                                    <div className="field">
                                        <div className="field__control field__control--select u-shadow">
                                            <div className="field__label">
                                                <label htmlFor="country">Select country</label>
                                            </div>
                                            <select id="country" className="field__input field__select" required defaultValue="">
                                                {/* Agregarle funcionalidad */}
                                                <option value="">Select country</option>
                                            </select>
                                            <Image
                                                src="/DownArrow.svg"
                                                alt=""
                                                width={24}
                                                height={24}
                                                className="field__caret"
                                            />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="field__control u-shadow">
                                            <div className="field__label">
                                                <label htmlFor="taxId">Tax Identification Number <span className="required-star">*</span></label>
                                            </div>
                                            <input id="taxId" type="text" className="field__input" placeholder="Tax identification Number" />
                                        </div>
                                    </div>
                                    {/* Fila 5 */}
                                    <div className="field">
                                        <div className="field__control u-shadow">
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
                                        <div className="field__control u-shadow">
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
                                    {/* No me toma el main-checkbox mio */}
                                    <label className="login__checkbox__remember">
                                        <Form.Check
                                            type="checkbox"
                                            className="main-checkbox u-shadow"
                                            defaultChecked
                                        />
                                        <span className="u-textshadow">
                                            I agree to the <a className="login__link" href="#">Terms and Condition & Privacy Policy</a>
                                        </span>
                                    </label>

                                    <label className="login__checkbox__remember">
                                        <Form.Check
                                            type="checkbox"
                                            className="main-checkbox u-shadow"
                                            defaultChecked
                                        />
                                        <span className="u-textshadow">I want to receive emails with the last updates</span>
                                    </label>
                                </div>

                                <div className="container__btn__login__link">
                                    <button className="login__btn u-shadow" type="button">Create my free account</button>
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
                                        className="signup__lang-flag u-shadow"
                                    />
                                    <div className="signup__lang-selectwrap">
                                        <select
                                            id="language"
                                            className="signup__lang-select u-textshadow"
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
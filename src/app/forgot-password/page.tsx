'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function LoginPage() {
    const [email, setEmail] = useState<string>('');
    /***
     * Funcionamiento:
     * - Pide email => {
     *      .Si subdominio es auth => 
     * 
     * } 
     * 
     * 
     */
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
                    <div className="login__main">
                        <div className="login__panel login__panel--forgot-password">
                            <div className="login__success--with-brand">
                                <div className="login__intro">
                                    <h2 className="login__title">Forgot password</h2>
                                    <p className="login__subtitle">
                                        Enter the email associated with your account, and we’ll send you a link to reset your password.
                                    </p>
                                </div>

                                <div className="login__company-brand">
                                    {/*Ingresar imagen de la compania*/}
                                    <Image src="/imgBikeExample.svg" alt="" />
                                </div>
                            </div>

                            <Form className="login__form" noValidate>
                                <div className="field">
                                    <div className="field__control">
                                        <div className="field__label">
                                            <label htmlFor="forgotEmail">Email</label>
                                        </div>
                                        <input
                                            id="forgotEmail"
                                            type="email"
                                            className="field__input"
                                            placeholder="Enter Your Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    {/* <p className="field__error">Mensaje de error</p> */}
                                </div>
                                <button type="button" className="login__btn">
                                    Reset password
                                </button>
                                <div className="login__link--go-back">
                                    {/* Ingresar ruta correcta */}
                                    <Link href="/login">Go back</Link>
                                </div>
                            </Form>
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
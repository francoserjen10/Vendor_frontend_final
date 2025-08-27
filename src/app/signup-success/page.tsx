'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SignupPage() {
    const [success, setSuccess] = useState<boolean>(false);
    const [verified, setVerified] = useState<boolean>(false);
    //==============================Mock params Demo=====================================
    useEffect(() => {
        const apply = () => {
            const hash = (window.location.hash.replace("#", "")) as "verified";

            if (hash === "verified") {
                setSuccess(false);
                setVerified(true);
            } else {
                setSuccess(true);
                setVerified(false);
            }
        };
        apply();
        window.addEventListener("hashchange", apply);
        return () => window.removeEventListener("hashchange", apply);
    }, []);
    return (
        <>
            <div className="login">
                <header className="login__header container">
                    <h1 className="title__header">SIGN UP</h1>
                </header>
                <section className="container">
                    {success && (
                        <>
                            <div className="success">
                                <span className="login__glow" />

                                <div className="success__titles">
                                    <h2 className="form__title form__title--signup">Success!</h2>
                                    <h2 className="form__title form__title--signup">Your account is almost ready</h2>
                                </div>

                                <p className="form__subtitle form__subtitle--signup-success">
                                    We’ve sent you an email to verify your address and complete your sign-up. Please check your inbox to finish the process
                                </p>

                                <div className="success__images">
                                    <Image src="/signup-dashboard.svg" alt="" width={400} height={273} className="success__img success__img--dashboard" />
                                    <Image src="/CoolKids-Clock.svg" alt="" width={111} height={111} className="success__img success__img--clock u-shadow" />
                                    <Image src="/Palz-Standing.svg" alt="" width={262} height={400} className="success__img success__img--person" />
                                </div>

                                <div className="login__footer">
                                    <p className="success__hint">
                                        <span>Didn’t receive the email?</span> Check your spam folder or click to{" "}
                                        <Link className="login__link" href="/signup">Resend</Link>
                                    </p>

                                </div>
                                <div className="login__brand signup__brand">
                                    <h2><strong>Alo</strong><span>Manager</span></h2>
                                </div>
                            </div>
                        </>
                    )}

                    {verified && (
                        <>
                            <div className="login__main" >
                                <div className="login__panel login__panel--with-brand">
                                    <div className="login__success--with-brand login__success--final">
                                        <div className="login__success-illustration">
                                            <Image
                                                src="/loginSuccess.svg"
                                                alt="Password reset successful"
                                                width={300}
                                                height={315}
                                                priority
                                            />
                                        </div>
                                        <div className="login__intro">
                                            <h2 className="form__title">Let’s get started!</h2>
                                            <h3 className="form__subtitle">
                                                Your mail has been verified. Log in now to start managing your store
                                            </h3>
                                        </div>
                                        <div className="container__btn__login__link">
                                            <Link href="/login" className="login__btn">Log in</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </section>
            </div>
        </>
    );
}
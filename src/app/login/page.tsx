"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { pattern, required, run } from "../../../shared/validation";
import { emailRegex, passwordRegex } from "../../../shared/constants";
import Image from "next/image";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");

    const [isEmailReadonly, setIsEmailReadonly] = useState<boolean>(false)
    const [companies, setCompanies] = useState<Company[]>([]);
    const [selectedCompany, setSelectedCompany] = useState<number | null>(null)
    const [selectedLogo, setSelectedLogo] = useState<string>('') //Null
    const [isCompanySelected, setIsCompanySelected] = useState<boolean>(false)

    //==============================DB hardcodeada=====================================
    const [db, setDb] = useState<Db | null>(null);

    type Company = {
        id: number;
        company_name: string;
        subdomain: string;
        logo_url: string;
    };

    type Db = {
        companies_by_email: Record<string, Company[]>;
    };

    useEffect(() => {
        (async () => {
            const res = await fetch("/mock/db.json", { cache: 'no-store' });
            const json: Db = await res.json();
            setDb(json);
        })();
    }, []);

    useEffect(() => {
        if (!db) return;
        const key = email.trim().toLowerCase();
        if (emailRegex.test(key)) {
            setCompanies(db.companies_by_email[key] ?? []);
        } else {
            setCompanies([]);
        }
    }, [email, db])

    //==============================Mock params Demo=====================================

    useEffect(() => {
        // Mock sencillo para demo
        const mockEmail = "fPrueba@gmail.com";
        const fallback: Company[] = [
            { id: 144, company_name: "BoartPa", subdomain: "boartpa", logo_url: "/imgBikeExample.svg" },
        ];
        const apply = () => {
            const hash = (window.location.hash.replace("#", "") || "p1") as "p1" | "p2";
            const list = db?.companies_by_email?.[mockEmail] ?? fallback;

            if (hash === "p1") {
                setIsCompanySelected(false);
                setSelectedCompany(null);
                setSelectedLogo("");
                setEmail("");
                setCompanies([]);
            }
            if (hash === "p2") {
                setIsCompanySelected(true);
                setSelectedCompany(null);
                setSelectedLogo("");
                setEmail(mockEmail);
                setCompanies(list);
            }
        };
        apply();
        window.addEventListener("hashchange", apply);
        return () => window.removeEventListener("hashchange", apply);
    }, [db]);


    //==============================Visibility Password=====================================
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const findCompanies = async (v: string) => {
        setEmail(v)
        setIsEmailReadonly(true)
        // setError("")
        // if (validateEmail(v)) {
        //     const data = await getCompanies(v)
        //     if (data.data) {
        //         setCompanies(data.data)
        //     } else {
        //         setError(typeof data.message == "string" ? data.message : data.message.join("; "))
        //     }
        // }
    }

    const selectCompany = (company: number, logo: string) => {
        // setError("")
        setSelectedCompany(company)
        setSelectedLogo(logo)
        setIsCompanySelected(true)
    }

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
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

    // Effect para verificar el dominio y redirigir o al login de la compania directamente o al login principal
    // useEffect(() => {
    //     const host = window.location.hostname;
    //     const subdomain = host.split('.')[0];

    //     if (subdomain != "auth" && subdomain != process.env.NEXT_PUBLIC_DOMAIN) {
    //         // Le pega a la api
    //         // getCompanyBySubdomain(subdomain).then(res => {
    //         //     // Setea valores
    //         //     if (res.data?.company_id) {
    //         //         setSelectedCompany(res.data.company_id)
    //         //         setSelectedLogo(res.data.logo_url)
    //         //         setIsEmailReadonly(false)
    //         //         setIsCompanySelected(true)
    //         //     }
    //         // })
    //     }
    // }, [])

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
                    <div className={`login__panel ${isCompanySelected ? 'login__panel--with-brand' : ''}`}>
                        {/* Si subdominio != a una compania */}
                        {!isCompanySelected && (
                            <>
                                <div className="login__success">
                                    <div className="login__intro">
                                        <h2 className="login__title">Welcome back</h2>
                                        <h3 className="login__subtitle">
                                            Log in to manage your rental shop with ease
                                        </h3>
                                    </div>
                                </div>

                                <Form className="login__form" noValidate>
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
                                                <Link className="forgot__password" href="/forgot-password">
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__btn__login__link">
                                        <button
                                            className="login__btn"
                                            type="button"
                                            onClick={handleLogin}
                                        >
                                            Continue
                                        </button>
                                        <div className="login__footer">
                                            <span className="login__muted">Don’t have an account?</span>
                                            <Link className="login__link" href="/register">Register now</Link>
                                        </div>
                                    </div>
                                </Form>
                            </>
                        )}
                        {isCompanySelected && !selectedCompany && (
                            <>
                                <div className="login__success">
                                    <div className="login__intro">
                                        {/* Nombre del owner */}
                                        <h2 className="login__title">Hello {'Federico'} 👋🏻</h2>
                                        <h3 className="login__subtitle">Select your company to continue</h3>
                                    </div>
                                </div>

                                <Form className="login__form" noValidate>
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
                                                    value={email}
                                                    // onChange={(e) => {
                                                    //     setEmail(e.target.value);
                                                    //     if (emailError) setEmailError("");
                                                    // }}
                                                    onChange={(e) => {
                                                        findCompanies(e.target.value)
                                                    }}
                                                    disabled={isEmailReadonly}
                                                    readOnly={isEmailReadonly}
                                                    autoComplete='off'
                                                />
                                            </div>
                                        </div>
                                        {companies.length > 0 && (
                                            <>
                                                <div className="login-page-form-company">
                                                    <p className="login-page-form-company-head">Select your company</p>

                                                    <ul className="login-page-form-company-list">
                                                        {companies.map((item, key) => {
                                                            return (
                                                                <li
                                                                    key={key}
                                                                    className="login-page-form-company-item"
                                                                    onClick={() => selectCompany(item.id, item.logo_url)}
                                                                >
                                                                    <h3 className="login-page-form-company-name">{item.company_name}</h3>
                                                                    <p className="login-page-form-company-link">{`${process.env.NEXT_PUBLIC_PROTOCOL}://${item.subdomain}.${process.env.NEXT_PUBLIC_DOMAIN}`}</p>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className="container__btn__login__link">
                                        <button
                                            className="login__btn"
                                            type="button"
                                            onClick={handleLogin}
                                        >
                                            Log In
                                        </button>
                                        <div className="login__footer">
                                            <span className="login__muted">Don’t have an account?</span>
                                            <Link className="login__link" href="/register">Register now</Link>
                                        </div>
                                    </div>
                                </Form>
                            </>
                        )}

                        {isCompanySelected && selectedCompany && (
                            <>
                                <div className="login__success login__success--with-brand">
                                    <div className="login__intro">
                                        {/* Nombre de la compania */}
                                        <h2 className="login__title">Welcome back to {'BoartPa'} company</h2>
                                        <h3 className="login__subtitle">Log in to manage your rental shop with ease</h3>
                                    </div>

                                    <div className="login__company-brand">
                                        {selectedLogo ? (
                                            <Image
                                                // src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${selectedCompany.logo_url}`} => Verificar la ruta
                                                src="./imgBikeExample.svg"
                                                alt=""
                                                width={140}
                                                height={140}
                                            />
                                        ) : (
                                            <div className="login__company-brand--placeholder" />
                                        )}
                                    </div>
                                </div>

                                <Form className="login__form" noValidate>
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
                                                    onChange={(e => {
                                                        findCompanies(e.target.value);
                                                        if (emailError) setEmailError("");
                                                    })}
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
                                                <Link className="forgot__password" href="/forgot-password">
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container__btn__login__link">
                                        <button
                                            className="login__btn"
                                            type="button"
                                            onClick={handleLogin}
                                        >
                                            Log in
                                        </button>
                                        <div className="login__footer">
                                            <span className="login__muted">Don’t have an account?</span>
                                            <Link className="login__link--register" href="/register">Register now</Link>
                                        </div>
                                    </div>
                                </Form>
                            </>
                        )}

                    </div>
                </div>
            </section>
            <div className="login__brand">
                <h2><strong>Alo</strong><span>Manager</span></h2>
            </div>
        </div>
    );
}

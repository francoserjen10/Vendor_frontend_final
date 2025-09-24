'use client';
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import MainSelect from "@/components/MainSelect";

export default function QuestionaryPage() {

    const [questionary1, setQuestionary1] = useState<boolean>(false);
    const [questionary2, setQuestionary2] = useState<boolean>(false);
    const [questionary3, setQuestionary3] = useState<boolean>(false);

    //==============================Mock params Demo=====================================
    useEffect(() => {
        const apply = () => {
            const hash = (window.location.hash.replace("#", "")) as "questionary2" | "questionary3";

            if (hash === "questionary2") {
                setQuestionary1(false);
                setQuestionary2(true);
                setQuestionary3(false);
            } else if (hash === "questionary3") {
                setQuestionary1(false);
                setQuestionary2(false);
                setQuestionary3(true);
            } else {
                setQuestionary1(true);
                setQuestionary2(false);
                setQuestionary3(false);
            }
        };
        apply();
        window.addEventListener("hashchange", apply);
        return () => window.removeEventListener("hashchange", apply);
    }, []);
    return (
        <>
            <div className="login">
                <div className="login__glow" aria-hidden />

                <header className="login__header container">
                    <h1 className="title__header">SIGN UP</h1>
                </header>

                <section className="container">
                    <div className="login__main">
                        <div className="login__panel login__panel--questionary">
                            {questionary1 && (
                                <>
                                    <div className="login__intro">
                                        <h2 className="form__title form__title--signup">Tell us about your business</h2>
                                        <h3 className="form__subtitle">
                                            This information helps us prepare your workspace
                                        </h3>
                                    </div>

                                    <Form className="login__form" noValidate>
                                        <div className="container__questionary">
                                            <div className="field questionary__group">
                                                <p className="questionary__label">How many years have you been in business?</p>
                                                <MainSelect
                                                    id="years"
                                                    //label="Select your industry"
                                                    options={['0–1 years', '2–5 years', '6–10 years', '10+ years']}
                                                    value=""
                                                    onChange={(val) => console.log(val)}
                                                    placeholder="Please select"
                                                />
                                            </div>

                                            <div className="field questionary__group">
                                                <p className="questionary__label">Are you starting a new rental operation?</p>
                                                <div className="questionary__radios">
                                                    <label className="radio">
                                                        <input type="radio" name="mainActivity" className="radio__input" defaultChecked />
                                                        <span className="radio__text">Yes</span>
                                                    </label>
                                                    <label className="radio">
                                                        <input type="radio" name="mainActivity" className="radio__input" />
                                                        <span className="radio__text">No</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="field questionary__group">
                                                <p className="questionary__label">Is your rental operation your main business activity?</p>
                                                <div className="questionary__radios">
                                                    <label className="radio">
                                                        <input type="radio" name="mainActivity" className="radio__input" defaultChecked />
                                                        <span className="radio__text">Yes</span>
                                                    </label>
                                                    <label className="radio">
                                                        <input type="radio" name="mainActivity" className="radio__input" />
                                                        <span className="radio__text">No</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="field questionary__group">
                                                <p className="questionary__label">Is your rental operation seasonal?</p>
                                                <div className="questionary__radios">
                                                    <label className="radio">
                                                        <input type="radio" name="mainActivity" className="radio__input" defaultChecked />
                                                        <span className="radio__text">Yes</span>
                                                    </label>
                                                    <label className="radio">
                                                        <input type="radio" name="mainActivity" className="radio__input" />
                                                        <span className="radio__text">No</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="login__btn"
                                            type="button"
                                        // onClick={handleLogin}
                                        >
                                            Continue
                                        </button>
                                    </Form>
                                </>
                            )}
                            {questionary2 && (
                                <>
                                    <div className="login__intro">
                                        <h2 className="form__title form__title--signup">Tell us about your business</h2>
                                        <h3 className="form__subtitle">
                                            This information helps us prepare your workspace
                                        </h3>
                                    </div>

                                    <Form className="login__form" noValidate>
                                        <div className="container__questionary">
                                            <div className="field questionary__group">
                                                <p className="questionary__label">What is your industry?</p>
                                                <MainSelect
                                                    id="questionart-industry"
                                                    //label=""
                                                    options={[]}
                                                    value=""
                                                    onChange={(val) => console.log(val)}
                                                    placeholder="Please select"
                                                />
                                            </div>

                                            <div className="field questionary__group">
                                                <p className="questionary__label">What products do you rent out?</p>
                                                <MainSelect
                                                    id="questionart-product"
                                                    //label=""
                                                    options={[]}
                                                    value=""
                                                    onChange={(val) => console.log(val)}
                                                    placeholder="Please select"
                                                />
                                            </div>

                                            <div className="field questionary__group">
                                                <p className="questionary__label">How big is your team?</p>
                                                <MainSelect
                                                    id="questionart-team"
                                                    //label=""
                                                    options={[]}
                                                    value=""
                                                    onChange={(val) => console.log(val)}
                                                    placeholder="Please select"
                                                />
                                            </div>

                                            <div className="field questionary__group">
                                                <p className="questionary__label">How many locations do you have?</p>
                                                <MainSelect
                                                    id="questionart-locations"
                                                    //label=""
                                                    options={[]}
                                                    value=""
                                                    onChange={(val) => console.log(val)}
                                                    placeholder="Please select"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            className="login__btn"
                                            type="button"
                                        // onClick={handleLogin}
                                        >
                                            Continue
                                        </button>
                                    </Form>
                                </>
                            )}

                            {questionary3 && (
                                <>
                                    <div className="login__intro">
                                        <h2 className="form__title form__title--signup">You’re almost there!</h2>
                                        <h3 className="form__subtitle">
                                            This information helps us prepare your workspace
                                        </h3>
                                    </div>

                                    <Form className="login__form" noValidate>
                                        <div className="container__questionary">
                                            <div className="field questionary__group">
                                                <p className="questionary__label">What is your industry?</p>
                                                <MainSelect
                                                    id="questionart-locations"
                                                    //label=""
                                                    options={[]}
                                                    value=""
                                                    onChange={(val) => console.log(val)}
                                                    placeholder="Please select"
                                                />
                                            </div>

                                            <div className="field questionary__group">
                                                <p className="questionary__label">Do you offer in-person pickups, local delivery, or shipping?</p>
                                                <div className="questionary__radios">
                                                    <label className="radio">
                                                        <input type="radio" name="mainActivity" className="radio__input" defaultChecked />
                                                        <span className="radio__text">Yes</span>
                                                    </label>
                                                    <label className="radio">
                                                        <input type="radio" name="mainActivity" className="radio__input" />
                                                        <span className="radio__text">No</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="login__btn"
                                            type="button"
                                        // onClick={handleLogin}
                                        >
                                            Continue
                                        </button>
                                    </Form>
                                </>
                            )}
                        </div>
                    </div >
                </section >
                <div className="login__brand">
                    <h2><strong>Alo</strong><span>Manager</span></h2>
                </div>
            </div >
        </>
    );
}
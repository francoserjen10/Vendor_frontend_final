import React, { useState, useEffect } from "react";
import ProgressIcon from "@/assets/images/progress.svg"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Link from 'next/link';
import 'react-circular-progressbar/dist/styles.css';
// import { getMyOnboardingTasks } from "@/api/dashboard/dashboardAPI";

function CircularProgressWithImage() {
    const [progress, setProgress] = useState<number>(3);

    // useEffect(() => {
    //     getMyOnboardingTasks().then(res => {
    //         setProgress(res.onboarding_tasks?.filter(item => item.is_completed).length)
    //     })
    // })

    return (
        <>
            {/* Href real */}
            <Link href="/?page=Setup%20Checklist" passHref>
                <div className="progress-container">
                    <div className="progress-container-circularBLock">
                        <CircularProgressbar
                            value={progress / 14 * 100}
                            className="progress-container-circularBLock__scale"
                            strokeWidth={10}
                            styles={buildStyles({
                                pathColor: '#4880FF',
                                trailColor: "#D9D9D9",
                                strokeLinecap: "round",
                            })}
                        />
                        <ProgressIcon
                            alt="Center"
                            className="progress-container__img"
                        />
                    </div>
                    <div >
                        <p className="progress-container__title"> Continue setup</p>
                        <p className="progress-container__text">{progress}/14 completed</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default CircularProgressWithImage;


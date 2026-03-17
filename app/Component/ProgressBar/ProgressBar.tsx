import React from 'react'
import "./styleProgressBar.scss"

const ProgressBar = ({ currentStage, totalStages, color }: { currentStage: number, totalStages: number, color: string }) => {
    const percentage = (currentStage / totalStages) * 100;

    return (
        <div className="progress-container">
            <h2 className="progress-text">
                {Math.round(percentage)}%
            </h2>
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{
                        width: `${percentage}%`,
                        backgroundColor: color,
                    }}
                />
            </div>

        </div>
    );
};

export default ProgressBar;
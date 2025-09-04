import React from 'react'

type CustomAvatarProps = {
    abbr?: string;
    first_name?: string;
    last_name?: string;
    avatar?: string;
    size: number;
    className?: string;
    bg?: string;
    textColor?: string;
};

export default function CustomAvatar({ abbr, first_name, last_name, avatar, size, className, bg = "#4880FF", textColor = "#FFF", }: CustomAvatarProps) {

    const letters =
        abbr ??
        `${first_name?.charAt(0) ?? ""}${last_name?.charAt(0) ?? ""}`.toUpperCase();

    return (
        <div>
            {avatar
                ?
                <img
                    src={avatar}
                    alt="avatar"
                    className={`rounded-full ${className ?? ""}`}
                    style={{ width: `${size}px`, height: `${size}px` }}
                />
                :
                <div className={`rounded-full flex items-center justify-center ${className ?? ""}`}
                    style={{ width: `${size}px`, height: `${size}px`, backgroundColor: bg, color: textColor, borderRadius: '50%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <span style={{ fontSize: 12, fontWeight: 500 }}>
                        {letters}
                    </span>
                </div>
            }
        </div>
    )
}

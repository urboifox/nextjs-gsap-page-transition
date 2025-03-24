"use client";
import gsap from "gsap";
import { useEffect } from "react";

export default function AppTemplate({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        gsap.fromTo(document.body, {
            opacity: 0,
        }, {
            opacity: 1,
        })
    }, [])

    return children;
}
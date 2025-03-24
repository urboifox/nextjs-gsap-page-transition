"use client";
import gsap from "gsap";
import { useRouter } from "next/navigation"
import React, { LinkHTMLAttributes } from "react";

export default function TransitionLink({ children, ...rest }: LinkHTMLAttributes<HTMLAnchorElement>) {
    const router = useRouter();

    function handleNavigate(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        rest.onClick?.(event);
        if (!rest.href) return;

        gsap.to(document.body, {
            opacity: 0,
            onComplete: () => {
                router.push(rest.href!);
            }
        })
    }

    return (
        <a {...rest} onClick={handleNavigate}>{children}</a>
    )
}

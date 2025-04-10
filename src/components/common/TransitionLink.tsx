"use client";
import gsap from "gsap";
import { useRouter } from "next/navigation"
import { ComponentProps } from "react";
import Link from "next/link";

export default function TransitionLink({ children, ...rest }: ComponentProps<typeof Link>) {
    const router = useRouter();

    return (
        <Link {...rest} onNavigate={(event) => {
            event.preventDefault();
            if (!rest.href) return;

            gsap.to(document.body, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                    router.push(rest.href.toString());
                }
            })
        }}>
            {children}
        </Link>
    )
}

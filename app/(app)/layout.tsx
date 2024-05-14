'use client'
import {PropsWithChildren} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface Props extends PropsWithChildren {
}

const routes = [
    {
        path: "/articles",
        label: "Articles"
    },
    {
        path: "/profile/security",
        label: "Profile Security"
    },
    {
        path: "/profile/settings",
        label: "Profile Settings"
    }
]

export default function AppLayout({children}: Props) {
    const pathname = usePathname()

    return (<main>
        <header>
            {
                routes.map(({path, label}) => (
                    <Link
                        href={path}
                        key={path}
                        className={pathname === path ? 'text-red-500' : ''}
                    >
                        {label}
                    </Link>
                ))
            }
        </header>
        <div className="flex h-screen">
            <div className="text-teal sm:text-primary md:text-secondary lg:text-destructive">Text</div>
            <main className="flex-1 md:p-8 pt-2 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    </main>)
}
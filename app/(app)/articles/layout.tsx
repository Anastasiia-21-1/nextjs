'use client'
import {ReactNode} from "react";
import Link from "next/link";

interface Props {
    children: ReactNode;
}

function ArticlesLayout({children}: Props) {
    return (
        <div>
            <header className="flex gap-5 p-1 text-blue-700">
                <Link href="/articles">Articles</Link>
                <Link href="/articles/favorite">Articles favorite</Link>
                <Link href="/articles/create">Articles create</Link>
            </header>
            {children}
        </div>
    )
}
export default ArticlesLayout
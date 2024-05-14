'use client'
import {ReactNode} from "react";
import Link from "next/link";
import s from '@/css/header.module.scss'

interface Props {
    children: ReactNode;
}

function ArticlesLayout({children}: Props) {
    return (
        <div className="mobile:bg-amber-50 desktop:bg-sky-50 tablet:bg-emerald-50">
            <header className={s.header}>
                <Link href="/articles">Articles</Link>
                <Link href="/articles/favorite">Articles favorite</Link>
                <Link href="/articles/create">Articles create</Link>
            </header>
            {children}
        </div>
    )
}
export default ArticlesLayout
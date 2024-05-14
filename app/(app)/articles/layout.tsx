'use client'
import {ReactNode} from "react";
import { Link } from '@chakra-ui/next-js'
import s from '@/css/header.module.scss'

interface Props {
    children: ReactNode;
}

function ArticlesLayout({children}: Props) {
    return (
        <div className="mobile:bg-amber-50 desktop:bg-sky-50 tablet:bg-emerald-50">
            <header className={s.header}>
                <Link color='blue.400' _hover={{ color: 'blue.500' }} href="/articles">Articles</Link>
                <Link color='blue.400' _hover={{ color: 'green.500' }} href="/articles/favorite">Articles favorite</Link>
                <Link color='blue.400' _hover={{ color: 'red.500' }} href="/articles/create">Articles create</Link>
            </header>
            {children}
        </div>
    )
}
export default ArticlesLayout
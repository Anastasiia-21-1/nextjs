import {api} from "@/utils";
import {Suspense} from "react";
import Loading from "@/app/(app)/articles/loading";
import {FavoriteArticle} from "@/app/(app)/articles/favorite/_components/FavoriteArticle";

export default async function Page() {

    const post1 = await api('/posts/1').then(({data}) => data)
    const post2 = await api('/posts/2').then(({data}) => data)
    const post3 = await api('/posts/3').then(({data}) => data)

    return (
        <div>
            Articles / Favorite page
            <Suspense fallback={<Loading/>}>
                <FavoriteArticle post={post1}/>
            </Suspense>
            <Suspense fallback={<Loading/>}>
                <FavoriteArticle post={post2}/>
            </Suspense>
            <Suspense fallback={<Loading/>}>
                <FavoriteArticle post={post3}/>
            </Suspense>
        </div>
    )
}
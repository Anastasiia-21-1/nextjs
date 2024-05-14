import {api} from "@/utils";
import {Suspense} from "react";
import Loading from "@/app/(app)/articles/loading";

export function generateStaticParams() {
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
}

export default async function Page({params}: {params: {id: number}}) {
    const post = await api(`/posts/${params.id}`).then(({data}) => data)
    const comments: any[] = await api(`/posts/${params.id}/comments`).then(({data}) => data)

    return (
        <div>
            <Suspense fallback={<Loading/>}>
                <div className='text-red-500'>
                {post.title}
                </div>
                <div>
                    {comments.map((el, index) => {
                        return (
                            <div key={index}>
                                {el.name}
                            </div>
                        )
                    })}
                </div>
            </Suspense>
        </div>
    )
}
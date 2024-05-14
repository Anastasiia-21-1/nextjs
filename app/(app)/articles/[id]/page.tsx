import {api} from "@/utils";
import {Suspense} from "react";
import Loading from "@/app/(app)/articles/loading";

export default async function Page() {
    const id = 2

    const post = await api(`/posts/${id}`).then(({data}) => data)
    const comments: any[] = await api(`/posts/${id}/comments`).then(({data}) => data)

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
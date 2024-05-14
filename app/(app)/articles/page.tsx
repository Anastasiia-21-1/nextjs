import {api} from "@/utils";
import { Suspense } from "react";
import Loading from "@/app/(app)/articles/loading";

export default async function Page() {

    const posts = await api('/posts').then(({data}) => data);

    return (
        <div>
            Articles
            <Suspense fallback={<Loading/>}>
                {JSON.stringify(posts)}
            </Suspense>
        </div>
    )
}
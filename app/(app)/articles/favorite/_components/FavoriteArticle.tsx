interface Props {
    post: {
        userId: number;
        id: number;
        title: string;
        body: string;
    }
}
export function FavoriteArticle({post}: Props) {
    return (
        <div className="p-5 border-2">
            {post.title}
        </div>
    )
}
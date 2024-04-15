import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Link className="h5 mb-5 underline text-white hover:text-color-1 " href={`/posts/${id}`}>{title}</Link>
            <br />
            <p className="text-sm text-n-2 mt-1">{formattedDate}</p>
        </li>
    )
}
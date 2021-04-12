import { IBlog } from "../interfaces/interfaces"
import news from "../data/news.json";

interface Props {

}

export default function Posts(props: Props) {
    const blogs = news.map((i:IBlog) => <Blog data={i} />)

    return (
        <section className="posts">
            <div>
                {blogs.filter(i => (blogs.indexOf(i) % 2 == 0) && (i))}
            </div>

            <div>
                {blogs.filter(i => (blogs.indexOf(i) % 2 == 1) && (i))}
            </div>
        </section>
    )
}


export function Blog(props: { data: IBlog }) {



    return (
        <article className="blog">
            <p className="title">
                {props.data.title}
            </p>
            <p>
                {props.data.text}
            </p>
            <p className="date">{props.data.date}</p>
        </article>
    )
}

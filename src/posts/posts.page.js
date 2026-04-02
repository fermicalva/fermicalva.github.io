export const layout = "layout.vto";
export const title = "Posts";

export default function* ({ search }) {
  const posts = search.pages("type=post", "date=desc");
  yield {
    url: "/posts/",
    content: `<h1>Posts</h1><ul class="post-list">${
      posts.map((post) =>
        `<li><span class="date">${new Date(post.date).toISOString().slice(0, 10)}</span><br><a href="${post.url}">${post.title}</a></li>`
      ).join("")
    }</ul>`,
  };
}

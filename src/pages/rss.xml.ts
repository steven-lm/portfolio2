import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@consts";

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const projects = (await getCollection("projects"))
    .filter(post => !post.data.draft)
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

  return rss({
    title: SITE.NAME,
    description: "My portfolio projects",
    site: context.site,
    items: projects.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/projects/${item.slug}/`,
    })),
  });
}

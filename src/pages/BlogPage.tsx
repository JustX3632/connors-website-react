import { useState } from "react";
import { type ComponentType } from "react";
import PageLayout from "../components/PageLayout";

// Import all MDX posts (eager load for simplicity)
const importPosts = import.meta.glob("../content/blog/*.mdx", { eager: true }) as Record<string, any>;

type Post = {
  Component: ComponentType;
  meta: { title: string; date: string; tags: string[] };
};

const allPosts: Post[] = Object.values(importPosts).map((mod) => ({
  Component: mod.default,
  meta: mod.meta,
}));

export default function BlogPage(): JSX.Element {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const allTags = ["All", ...Array.from(new Set(allPosts.flatMap((p) => p.meta.tags)))];

  const filtered = selectedTag === "All" ? allPosts : allPosts.filter((p) => p.meta.tags.includes(selectedTag));
  const sorted = filtered.slice().sort((a, b) => {
    const aTime = new Date(a.meta.date).getTime();
    const bTime = new Date(b.meta.date).getTime();
    return sortOrder === "newest" ? bTime - aTime : aTime - bTime;
  });

  return (
    <PageLayout title="Blog" subtitle="Latest posts">
      {/* Controls */}
      <div className="flex gap-4 mb-6">
        <select
          className="p-2 border rounded"
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          {allTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <select
          className="p-2 border rounded"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </div>

      {/* Post list */}
      <div className="space-y-12">
        {sorted.map((post, idx) => (
          <article key={idx} className="border-b pb-6">
            <h2 className="text-2xl font-bold mb-2">{post.meta.title}</h2>
            <p className="text-sm text-text-dim/60 mb-2">{new Date(post.meta.date).toDateString()}</p>
            <div className="mb-4">
              {post.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-brand/10 text-brand px-2 py-0.5 mr-2 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <post.Component />
          </article>
        ))}
        {sorted.length === 0 && <p>No posts match the filter.</p>}
      </div>
    </PageLayout>
  );
}

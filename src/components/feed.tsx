"use client";

import Photo from "./photo";
import { Post } from "./post";
import { useState } from "react";
import { IPost } from "@/types/post";
import CommentForm from "./commentForm";
import { useQuery } from "@tanstack/react-query";
import { postList } from "@/services/api/post/post-list.service";

export default function Feed() {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: () => postList({ take: 6, skip: 0 }),
  });

  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

  const handleImageClick = (post: IPost) => {
    setSelectedPost(post);
  };
  const closeImage = () => {
    setSelectedPost(null);
  };

  console.log(posts);
  return (
    <main className="container flex flex-col gap-4 pt-2">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts?.map((post: IPost) => (
          <Photo
            url={post.url}
            variant={post.variant}
            views={post.views}
            key={post.id}
            clickEvent={() => handleImageClick(post)}
          />
        ))}
      </div>

      {selectedPost && (
        <Post.Root onclick={closeImage}>
          <Post.ImageWrapper url={selectedPost.url} />
          <Post.InfoWrapper>
            <Post.LinkWrapper>
              <Post.Author author={selectedPost.author.username} />
              <Post.Views views={selectedPost.views} />
            </Post.LinkWrapper>
            <Post.TitleWrapper>
              <Post.Title title={selectedPost.catName} />
              <Post.CatBread catBread={selectedPost.catBreed} />
            </Post.TitleWrapper>
            <Post.CatInfoWrapper>
              <Post.CatInfo label="Years" value={selectedPost.catAge} />
              <Post.CatInfo
                label="Weight"
                value={selectedPost.catWeight + " kg"}
              />
            </Post.CatInfoWrapper>
            <Post.CommentsWrapper>
              <Post.Comments comments={selectedPost.comments} />
            </Post.CommentsWrapper>
            <CommentForm />
          </Post.InfoWrapper>
        </Post.Root>
      )}
    </main>
  );
}

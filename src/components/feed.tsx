"use client";

import CommentForm from "./commentForm";
import Photo from "./photo";

import { Post } from "./post";
import { PostData } from "@/types/post";
import { useState } from "react";
import { getPosts } from "@/data/feed";
import { useQuery } from "@tanstack/react-query";

export default function Feed() {
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const [selectedPost, setSelectedPost] = useState<PostData | null>(null);

  const handleImageClick = (post: PostData) => {
    setSelectedPost(post);
  };
  const closeImage = () => {
    setSelectedPost(null);
  };

  return (
    <main className="container flex flex-col gap-4 pt-2">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts?.map((post: PostData, index) => (
          <Photo
            url={post.url}
            views={post.views}
            variant={post.variant}
            key={index}
            clickEvent={() => handleImageClick(post)}
          />
        ))}
      </div>

      {selectedPost && (
        <Post.Root onclick={closeImage}>
          <Post.ImageWrapper url={selectedPost.url} />
          <Post.InfoWrapper>
            <Post.LinkWrapper>
              <Post.Author author={selectedPost.author} />
              <Post.Views views={selectedPost.views} />
            </Post.LinkWrapper>
            <Post.TitleWrapper>
              <Post.Title title={selectedPost.catInfos.name} />
              <Post.CatBread catBread={selectedPost.catInfos.breed} />
            </Post.TitleWrapper>
            <Post.CatInfoWrapper>
              <Post.CatInfo label="Years" value={selectedPost.catInfos.age} />
              <Post.CatInfo
                label="Weight"
                value={selectedPost.catInfos.weight + " kg"}
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

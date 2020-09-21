import React, { useState, useEffect } from 'react';
import request from 'utils/request';
import { RequestURL } from 'utils/resources';
import { Post } from 'types/post';

function PagePostsList() {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState<Array<Post>>([]);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      try {
        const posts = await request.get(RequestURL.allPosts);
        setPostList(posts);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  return (
    <div>
      {loading ? <div>loading</div> : (
        <ul>
          {postList.map(post => (
            <li key={post._id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PagePostsList;

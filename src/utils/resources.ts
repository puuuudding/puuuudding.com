export const ImgUrls: { readonly [key: string]: string | undefined } = {
  puuuudding: 'https://assets.puuuudding.xyz/ybb4plyvhldv5iyj9yxhhp.jpg',
};

type RequestURLName = 'login' | 'self' | 'posts' | 'allPosts';
export const RequestURL: { readonly [key in RequestURLName]: string } = {
  login: '/api/auth/login',
  self: '/api/users/me',
  posts: '/api/posts',
  allPosts: '/api/posts/all',
};

type RouteURLName = 'root' | 'test' | 'admin' | 'adminLogin' | 'adminPosts';
export const RouteURL: { readonly [key in RouteURLName]: string } = {
  root: '/',
  test: '/hidden-test',
  admin: '/admin',
  adminLogin: '/admin/login',
  adminPosts: '/admin/posts',
};

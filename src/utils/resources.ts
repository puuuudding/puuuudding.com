export const ImgUrls: { readonly [key: string]: string | undefined; } = {
  puuuudding: 'https://assets.puuuudding.xyz/ybb4plyvhldv5iyj9yxhhp.jpg',
};

export const RequestURL: {
  readonly login: string;
  readonly self: string;
  readonly posts: string;
  readonly allPosts: string;
} = {
  login: '/api/auth/login',
  self: '/api/users/me',
  posts: '/api/posts',
  allPosts: '/api/posts/all',
};

export const RouteURL: {
  readonly root: string;
  readonly test: string;
  readonly admin: string;
  readonly adminLogin: string;
  readonly adminPosts: string;
} = {
  root: '/',
  test: '/hidden-test',
  admin: '/admin',
  adminLogin: '/admin/login',
  adminPosts: '/admin/posts',
};

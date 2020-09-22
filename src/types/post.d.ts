export interface Post {
  _id: string;
  title: string;
  abstract: string;
  content: string;
  active: boolean;
  parsedHtml?: string;
}

export interface Post {
  readonly _id: string;
  title: string;
  abstract: string;
  content: string;
  active: boolean;
  readonly parsedHtml?: string;
}

export interface RedditPost {
  kind: string;
  data: {
    domain: string;
    banned_by: string | null;
    media_embed: any;
    subreddit: string;
    selftext_html: any | null;
    selftext: string;
    likes: string | null;
    user_reports: any[];
    secure_media: string | null;
    link_flair_text: string | null;
    id: string;
    gilded: number;
    secure_media_embed: any;
    clicked: boolean;
    report_reasons: string | null;
    author: string;
    media: string | null;
    score: number;
    approved_by: string | null;
    over_18: boolean;
    hidden: boolean;
    thumbnail: string;
    subreddit_id: string;
    edited: boolean;
    link_flair_css_class: string | null;
    author_flair_css_class: string | null;
    downs: number;
    mod_reports: any;
    saved: boolean;
    is_self: boolean;
    name: string;
    permalink: string;
    stickied: boolean;
    created: number;
    url: string;
    author_flair_text: string | null;
    title: string;
    created_utc: number;
    ups: number;
    num_comments: number;
    visited: boolean;
    num_reports: any;
    distinguished: any;
  };
}
export interface RedditPostResponse {
  kind: string;
  data: {
    modhash: string;
    children: RedditPost[];
  };
}

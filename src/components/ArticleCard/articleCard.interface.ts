export interface ArticleCardProps {
  title: string;
  shortDescription?: string;
  imgUrl?: string;
  hideThumbnail?: boolean;
  category?: string;
  id: string;
  imagePriority?: boolean;
}

export interface StyledArticleCardProps {
  category: string;
}

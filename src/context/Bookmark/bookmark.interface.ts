import { OrderType } from 'src/api/common.interface';

export interface BookmarkCtx {
  bookmarks: Bookmarks[];
  addBookmark: (item: Bookmarks) => void;
  removeBookmark: (id: string) => void;
  sortByPublishedDate: (orderBy: OrderType) => void;
  checkBookmark: (id: string) => boolean;
}

export interface Bookmarks {
  id: string;
  webPublicationDate: string;
  webTitle: string;
  fields: {
    thumbnail: string;
    trailText: string;
  };
  sectionId: string;
}

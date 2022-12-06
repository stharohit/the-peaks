import { CommonReponse, OrderType } from './common.interface';

import axios from 'axios';
import envVariables from 'src/constants/envVariables';

export interface SearchArticleResult {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  fields: {
    thumbnail: string;
    trailText: string;
  };
}

export interface SearchArticleResponse {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: OrderType;
  results: SearchArticleResult[];
}

export interface SearchArticleParams {
  pageSize?: number;
  orderBy?: OrderType;
  showFields?: string;
  section?: string;
  q?: string;
  page?: number;
}

export const searchArticleApi = async ({
  orderBy,
  pageSize,
  showFields,
  section,
  q,
  page,
}: SearchArticleParams) =>
  (
    await axios.get<CommonReponse<SearchArticleResponse>>(
      `${envVariables.GUARDIAN_BASE_URL}/search`,
      {
        params: {
          'order-by': orderBy,
          'show-fields': showFields || 'thumbnail,trailText',
          'page-size': pageSize,
          'api-key': envVariables.GUARDIAN_API_KEY,
          section,
          q,
          page,
        },
      }
    )
  ).data.response;

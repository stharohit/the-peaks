import { CommonReponse } from './common.interface';
import axios from 'axios';
import envVariables from 'src/constants/envVariables';

export interface SingleArticleContent {
  apiUrl: string;
  fields: {
    body: string;
    trailText: string;
    main: string;
    thumbnail: string;
  };
  id: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  sectionId: string;
  sectionName: string;
  type: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
}

export interface SingleArticleResponse {
  status: string;
  total: number;
  userTier: string;
  content: SingleArticleContent;
}

export interface SingleArticleParams {
  path: string;
}

export const singleArticleApi = async ({ path }: SingleArticleParams) =>
  (
    await axios.get<CommonReponse<SingleArticleResponse>>(`/${path}`, {
      params: {
        'show-fields': 'trailText,body,main,thumbnail',
        'api-key': envVariables.GUARDIAN_API_KEY,
      },
    })
  ).data.response;

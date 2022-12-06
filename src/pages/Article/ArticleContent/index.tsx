/* eslint-disable @next/next/no-img-element */
import {
  ArticleBody,
  ArticleContentSeparator,
  ArticleContentWrap,
  ArticleHeadline,
  ArticlePublishDate,
  DummyImage,
} from './articleContent.style';

import { ArticleContentProps } from './articleContent.interface';
import Image from 'next/image';
import Logo from 'src/assets/images/logo.svg';
import React from 'react';
import SectionTitle from 'src/components/SectionTitle';
import formatDate from 'src/helpers/date/formatDate';

const ArticleContent = (props: ArticleContentProps) => {
  const { body, headline, publishedDate, title, imgUrl } = props;
  return (
    <>
      <ArticleContentWrap>
        <div className="article-col-left">
          <ArticlePublishDate>{formatDate(publishedDate)}</ArticlePublishDate>
          <SectionTitle as="h1" className="main-title">
            {title}
          </SectionTitle>
          <ArticleHeadline dangerouslySetInnerHTML={{ __html: headline }} />
          <ArticleContentSeparator />
        </div>
        <div className="article-col-right" />
      </ArticleContentWrap>
      <ArticleContentWrap>
        <div className="article-col-left">
          <ArticleBody dangerouslySetInnerHTML={{ __html: body }} />
        </div>
        <div className="article-col-right">
          {imgUrl ? (
            <div
              className="main-img-wrap"
              dangerouslySetInnerHTML={{ __html: imgUrl }}
            />
          ) : (
            <DummyImage>
              <Image src={Logo} alt={title} />
            </DummyImage>
          )}
        </div>
      </ArticleContentWrap>
    </>
  );
};

export default ArticleContent;

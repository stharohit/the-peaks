/* eslint-disable @next/next/no-img-element */
import { ArticleCardProps } from './articleCard.interface';
import { StyledArticleCard } from './articleCard.style';
import Image from 'next/image';
import Logo from 'src/assets/images/logo.svg';
import React from 'react';
import cardCategoryWithStyle from 'src/constants/cardCategoryWithStyle';

const ArticleCard = (props: ArticleCardProps) => {
  const {
    imgUrl,
    shortDescription,
    title,
    hideThumbnail,
    category,
    id,
    imagePriority,
  } = props;

  const getCategory = () =>
    category && cardCategoryWithStyle.includes(category) ? category : 'default';

  const renderImage = () => {
    if (hideThumbnail && !imgUrl)
      return (
        <img
          hidden
          data-testid="hidden-thumbnail"
          src="data:,"
          alt="The Peaks"
        />
      );
    else if (imgUrl)
      return (
        <div className="article-img">
          <img
            src={imgUrl}
            alt={title}
            loading={imagePriority ? 'eager' : 'lazy'}
          />
        </div>
      );
    else {
      return (
        <div className="default-img">
          <Image src={Logo} alt="The Peaks" priority={imagePriority} />
        </div>
      );
    }
  };

  return (
    <StyledArticleCard
      href={`/article/${encodeURIComponent(id)}`}
      category={getCategory()}
    >
      {renderImage()}
      <div className="card-overlay">
        <h2>{title}</h2>
        <p
          hidden={!shortDescription}
          data-testid="short-description"
          dangerouslySetInnerHTML={{ __html: shortDescription || '' }}
        />
      </div>
    </StyledArticleCard>
  );
};

export default ArticleCard;

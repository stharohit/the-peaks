import { CategorySectionProps } from './categorySection.interface';
import React from 'react';
import SectionTitle from 'src/components/SectionTitle';
import dynamic from 'next/dynamic';

const ArticleList = dynamic(() => import('src/components/ArticleList'));

const CategorySection = (props: CategorySectionProps) => {
  const { articles, title, hasShortDescription } = props;

  return (
    <>
      <SectionTitle as="h1">{title}</SectionTitle>
      <ArticleList
        articles={articles}
        hasShortDescription={hasShortDescription}
      />
    </>
  );
};

export default CategorySection;

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ArticleCard from '.';
import MockProvider from 'src/helpers/test/MockProvider';

const dummyImgUrl = 'https://picsum.photos/seed/picsum/200/300';

const renderFunc = (
  imgUrl?: string,
  shortDescription?: string,
  hideThumbnail?: boolean
) =>
  render(
    <MockProvider>
      <ArticleCard
        id="article-test-id"
        title="Test article title"
        imgUrl={imgUrl}
        shortDescription={shortDescription}
        hideThumbnail={hideThumbnail}
      />
    </MockProvider>
  );

describe('Test Article Card', () => {
  describe('Test article content', () => {
    it('should have have a heading', () => {
      renderFunc();
      const header = screen.getByRole('heading');
      expect(header).toBeInTheDocument();
      expect(header).toHaveTextContent(/test article title/i);
    });

    it('should not have a short description', () => {
      renderFunc();
      const paragraph = screen.getByTestId('short-description');
      expect(paragraph).not.toBeVisible();
    });

    it('should not have a short description', () => {
      renderFunc(undefined, 'short description');
      const paragraph = screen.getByTestId('short-description');
      expect(paragraph).toBeVisible();
    });
  });

  describe('Test image', () => {
    it('should have thumbnail', () => {
      renderFunc(dummyImgUrl);
      const img = screen.getByRole('img') as HTMLImageElement;
      expect(img).toBeInTheDocument();
      expect(img.src).toBe(dummyImgUrl);
      expect(img.alt).toContain('Test article title');
    });

    it('should have default thumbnail', () => {
      renderFunc();
      const img = screen.getByRole('img') as HTMLImageElement;
      expect(img).toBeInTheDocument();
      expect(img.src).not.toBeFalsy();
      expect(img.alt).toContain('The Peaks');
      expect(img.alt).not.toContain('Test article title');
    });

    it('should hide thumbnail', () => {
      renderFunc(undefined, undefined, true);
      const img = screen.getByTestId('hidden-thumbnail') as HTMLImageElement;
      expect(img).not.toBeVisible();
    });
  });
});

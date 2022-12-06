import { useCallback, useRef } from 'react';

interface IntersectionObserverProps {
  onIntersection: () => void;
  holdObserver: boolean;
  isObserving: boolean;
}

const useIntersectionObserver = (props: IntersectionObserverProps) => {
  const { holdObserver, isObserving, onIntersection } = props;
  const observer = useRef<IntersectionObserver>();
  return useCallback(
    (node: unknown) => {
      if (holdObserver) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && isObserving) {
          onIntersection();
        }
      });
      if (node) observer.current.observe(node as Element);
    },
    [holdObserver, isObserving]
  );
};

export default useIntersectionObserver;

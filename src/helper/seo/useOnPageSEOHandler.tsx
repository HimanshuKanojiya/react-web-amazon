import { useEffect } from "react";

export const useOnPageSEOHandler = ({
  pageTitle,
}: useOnPageSEOHandlerParams) => {
  const updatePageTitle = (title: string) => {
    window.document.title = title ?? "Amazon Web Clone";
  };

  useEffect(() => {
    updatePageTitle(pageTitle);

    return () => {
      window.document.title = "Amazon Web Clone";
    };
  }, [pageTitle]);
};

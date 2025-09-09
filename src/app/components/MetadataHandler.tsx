'use client'
import usePageMeta from "@/hooks/usePageMeta";

export default function MetadataHandler() {
  const pageMeta = usePageMeta();

  return (
    <>
      <title>{pageMeta.title}</title>
      <meta name="description" content={pageMeta.description} />
      {/* <meta name="keywords" content={pageMeta.keywords} />
      {pageMeta.ogImage && (
        <meta property="og:image" content={pageMeta.ogImage} />
      )} */}
    </>
  );
}
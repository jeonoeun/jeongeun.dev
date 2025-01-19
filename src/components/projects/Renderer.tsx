"use client";

import { NotionRenderer } from "react-notion-x";

type RendererProps = {
  recordMap: any;
  rootPageId: string;
};

const Renderer = ({ recordMap, rootPageId }: RendererProps) => {
  return (
    <div>
      <NotionRenderer
        recordMap={recordMap}
        darkMode={false}
        rootPageId={rootPageId}
        previewImages
      />
    </div>
  );
};

export default Renderer;

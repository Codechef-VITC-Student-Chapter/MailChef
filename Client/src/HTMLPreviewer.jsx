import React, { useRef, useEffect } from 'react';

const HTMLPreviewer = ({ htmlCode }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(htmlCode);
    iframeDoc.close();
  }, [htmlCode]);

  return (
    <iframe
      title="HTML Preview"
      ref={iframeRef}
      style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}
    />
  );
};

export default HTMLPreviewer;

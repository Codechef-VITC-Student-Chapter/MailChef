import React, { useRef, useEffect } from 'react';

const HTMLPreviewer = ({ htmlCode, cssCode }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;

    // Manually create the document structure if it doesn't exist
    if (!iframeDoc.documentElement) {
      const html = iframeDoc.createElement('html');
      iframeDoc.appendChild(html);

      const head = iframeDoc.createElement('head');
      html.appendChild(head);

      const body = iframeDoc.createElement('body');
      html.appendChild(body);
    }

    // Ensure the head is available for CSS injection
    const head = iframeDoc.head || iframeDoc.createElement('head');
    if (!iframeDoc.head) {
      iframeDoc.documentElement.appendChild(head);
    }

    // Inject CSS into the head
    const styleTag = iframeDoc.createElement('style');
    styleTag.textContent = cssCode;
    head.appendChild(styleTag);

    // Inject HTML into the body
    const body = iframeDoc.body || iframeDoc.createElement('body');
    body.innerHTML = htmlCode;

    // Close the document
    iframeDoc.close();
  }, [htmlCode, cssCode]);

  return (
    <iframe
      title="HTML Preview"
      ref={iframeRef}
      style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}
    />
  );
};

export default HTMLPreviewer;

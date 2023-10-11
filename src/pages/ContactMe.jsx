import React, { useEffect, useRef } from 'react';

export default function ContactMe() {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Function to scroll to the contact section within the iframe
    const scrollContactSection = () => {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.scrollTo(0, iframe.contentDocument.getElementById('contact').offsetTop);
      }
    };

    // Listen for when the iframe is loaded, then scroll to the contact section
    if (iframeRef.current) {
      iframeRef.current.onload = scrollContactSection;
    }
  }, []);

  return (
    <div>
      <iframe
        title="Contact William Ferns"
        src="https://williamferns.com/" // Replace with the actual URL
        width="100%"
        style={{
          position: "absolute",
          left: "0",
          bottom: "0",
          height: "90vh" // You can adjust the height as needed
        }}
        frameBorder="0"
        ref={iframeRef}
      ></iframe>
    </div>
  );
}

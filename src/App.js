import React, { useState, useEffect } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRandomImage();
    updateMetaTags();
  }, []);

  const fetchRandomImage = () => {
    fetch('https://picsum.photos/500/500')
      .then(response => {
        setImageURL(response.url);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching random image:', error);
        setLoading(false);
      });
  };
const shareURL = window.location.href;
  useEffect(() => {
   
  }, [imageURL]);

  const updateMetaTags = () => {
    // Update meta tags as needed
    // Find the <meta> element by its name attribute
const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');

// Update the value of the content property
twitterImageMeta.setAttribute('content', {imageURL});
  };

  return (
    <div className="app min-h-screen flex flex-col items-center justify-center bg-slate-400">
      <div className="w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-center">Random Image Display and Share with React</h1>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <>
            <div className="image-container mb-8 p-5">
              <img src={imageURL} alt="Random" className="rounded-lg" />
            </div>

            <div className="share-buttons flex flex-row justify-center items-center">
              <div className="mr-2 mb-2 button bg-blue-700 hover:bg-blue-800 rounded-md py-2 px-5 text-white">
                <FacebookShareButton url={shareURL}>
                  <FontAwesomeIcon icon={faFacebookF} />
                </FacebookShareButton>
              </div>

              <div className="mb-2 mr-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white py-2 px-5 ">
                <TwitterShareButton url={shareURL} title='hi'>
                  <FontAwesomeIcon icon={faTwitter} />
                </TwitterShareButton>
              </div>

              <div className=" mb-2  button bg-green-600 hover:bg-green-700 rounded-md text-white py-2 px-5">
                <WhatsappShareButton url={shareURL}>
                  <FontAwesomeIcon icon={faWhatsapp} />
                </WhatsappShareButton>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;














import { useState } from 'react';
import Header from '../components/Header';
import { Button } from '../components';
import { logo } from '../assets/icons';

export const Presenter = () => {
  const [topic, setTopic] = useState('');
  const [presentationUrl, setPresentationUrl] = useState(null);

  async function fetchPresentation(topic) {
    const response = await fetch(`https://aipresenter-api.onrender.com/generate_presentation/${topic}`);
    const data = await response.json();
    return data.presentation;
  }

  function handlegenerate() {
    fetchPresentation(topic).then((presentationBase64) => {
      // Decode Base64 to binary data
      // const binaryData = atob(presentationBase64);

      const presentationUrl = `data:application/vnd.openxmlformats-officedocument.presentationml.presentation;base64,${presentationBase64}`;
      setPresentationUrl(presentationUrl);

      // Create a Blob from the binary data
      // const blob = new Blob([new Uint8Array([...binaryData].map((c) => c.charCodeAt(0)))], {
      //   type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      // });

      // // Create a URL for the Blob
      // const presentationUrl = URL.createObjectURL(blob);
      // setPresentationUrl(presentationUrl);
      console.log(setPresentationUrl)
    });
  }

  const handleDownload = () => {
    // Trigger download using the presentation URL
    const downloadLink = document.createElement('a');
    downloadLink.href = presentationUrl;
    downloadLink.download = `${topic}_presentation.pptx`;
    downloadLink.click();
  };

  const handleInput = (e) => {
    setTopic(e.target.value);
  };

  return (
    <>
      <Header />
      <section id="Header" className='w-full min-v-full bg-home min-h-screen items-center'>
        <div>
          <h1 className='font-bold text-3xl text-white text-center '>
            <span className='text-pink-600'>Try </span>OUT Now!
          </h1>
        </div>
        <div className='w-[400px] h-[300px] flex flex-col bg-contain rounded-[25px] ml-50 items-center mx-auto my-auto mt-20 bg-purple-700'>
          <div className='flex justify-between gap-3 mt-3'>
            <img src={logo} alt="agent" width='40px' height='30px' />
            <h1 className='flex text-pink-600 font-bold text-[30px]'>
              AI <span className='text-white'> Agent</span>
            </h1>
          </div>
          <input
            type="text"
            placeholder='Enter the Topic'
            className='rounded-[30px] bg-white mt-10 w-[300px] h-[40px] px-3'
            onChange={handleInput}
          />
          <h4 className='text-[25x] font-bold mt-10 text-white'> Credits 25</h4>
          <div className='mt-5'>
            <Button label="Generate" handle={handlegenerate} disabled={!topic} />
          </div>
          
        </div>
        <div>
          {presentationUrl &&(<div className='mt-5 w-full h-[80%]'>
                <iframe src={presentationUrl} title="Generated Presentation" className='w-full h-full border-none'></iframe>
              </div>  )}
        </div>
       
        
        {presentationUrl && (
            <>
              <div className='mt-5'>
                <button onClick={handleDownload} className='text-white font-bold bg-pink-600 p-2 rounded-md'>
                  Download Presentation
                </button>
              </div>
              <div className='mt-5 w-full h-[80%] bg-white'>
                Hello World
                <iframe title="Generated Presentation" src={presentationUrl} className='w-full h-full border-none'></iframe>
              </div>
            </>
          )}
      </section>
    </>
  );
};

export default Presenter;

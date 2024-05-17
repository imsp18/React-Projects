import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './styles.css'

export default function App() {
  const url = 'https://picsum.photos/v2/list'
  const limit = 10
  const page = 1
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false)

  async function fetchImages(getUrl) {
    try {

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
      }

    } catch (error) {
      setErrorMsg(error.message);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

  useEffect(() => {
    if (url !== '') fetchImages(url)
  }, [url])

  console.log(images)

  if (loading) {
    return <div> Loading the data! please wait</div>
  }

  if (errorMsg !== null) {
    return <div>Error occured! {errorMsg}  bc</div>
  }

  return <div className="container">
    <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
    {
      images && images.length ?
        images.map((imageItem, index) => (
          <img
            key={imageItem.id}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
          />
        ))
        : null}
    <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
    <span className="circle-indicators">
      {
        images && images.length ?
          images.map((_, index) => <button className={
            currentSlide === index ? "current-indicator" : "current-indicator hide-current-indicator"
          }
          onClick={() => setCurrentSlide(index)}
            key={index}
          >

          </button>) :
          null
      }
    </span>
  </div>
}
import { useEffect } from "react";
import { useState } from "react";

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

}
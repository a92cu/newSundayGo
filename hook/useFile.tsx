import { useEffect, useState } from "react";
export default function useFile() {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [image1Url, setImage1Url] = useState(null);
  const [image2Url, setImage2Url] = useState(null);
  const [image3Url, setImage3Url] = useState(null);

  const changeHandler = (index, e) => {
    const file = e.target.files[0];
    if (index === 0) setFile1(file);
    if (index === 1) setFile2(file);
    if (index === 2) setFile3(file);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file1) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setImage1Url(result);
        }
      };
      fileReader.readAsDataURL(file1);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file1]);

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file2) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setImage2Url(result);
        }
      };
      fileReader.readAsDataURL(file2);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file2]);

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file3) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setImage3Url(result);
        }
      };
      fileReader.readAsDataURL(file3);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file3]);

  return {
    changeHandler,
    image1Url,
    image2Url,
    image3Url,
  };
}

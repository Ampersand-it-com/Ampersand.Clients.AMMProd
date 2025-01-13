import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Videos = () => {
  useEffect(() => {
    window.location.href = 'https://drive.google.com/drive/folders/15X7f6nPGyzPUqxo-H3QWKM-BxPUrPtZ7';
  }, []);

  return null;
};

export default Videos;

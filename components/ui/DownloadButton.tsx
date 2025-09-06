import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload';

interface DownloadButtonProps {
  /** URL atau path file PDF */
  fileUrl: string;
  /** Nama file saat didownload, optional */
  fileName?: string;
  children?: React.ReactNode;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ fileUrl, fileName, children = 'Download PDF' }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName || fileUrl.split('/').pop() || 'file.pdf';
    link.click();
  };

  return (
    <button onClick={handleDownload} className="flex items-center gap-2">
      {children}
      <FontAwesomeIcon icon={faDownload} />
    </button>
  );
};

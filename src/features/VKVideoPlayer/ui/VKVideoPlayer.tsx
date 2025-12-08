import React, { useEffect, useRef, useState } from 'react';

interface VKVideoPlayerProps {
  videoUrl: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const VKVideoPlayer: React.FC<VKVideoPlayerProps> = ({
  videoUrl,
  width = '100%',
  height = 360,
  className = '',
}) => {
  const [videoId, setVideoId] = useState<string | null>(null);
  
  useEffect(() => {
    const patterns = [
      /video-(\d+_\d+)/,
      /video\?z=video-(\d+_\d+)/,
      /vk\.com\/video(\d+_\d+)/,
    ];
    
    for (const pattern of patterns) {
      const match = videoUrl.match(pattern);
      if (match && match[1]) {
        setVideoId(match[1]);
        return;
      }
    }
    
    if (/^\d+_\d+$/.test(videoUrl)) {
      setVideoId(videoUrl);
    }
  }, [videoUrl]);
  
  if (!videoId) {
    return (
      <div className={`p-4 border border-red-300 rounded ${className}`}>
        <p className="text-red-500">Неверная ссылка на VK видео</p>
      </div>
    );
  }
  
  const [ownerId, videoIdOnly] = videoId.split('_');
  const embedUrl = `https://vk.com/video_ext.php?oid=${ownerId}&id=${videoIdOnly}`;
  
  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        title="VK Video"
        className="w-full rounded"
      />
    </div>
  );
};

export default VKVideoPlayer;
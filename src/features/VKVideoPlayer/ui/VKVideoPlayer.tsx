import React, { useEffect, useState } from 'react';

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
  className,
}) => {
  const [parsedVideoId, setParsedVideoId] = useState<string | null>(null);

  useEffect(() => {
    const patterns = [
      /video-(\d+_\d+)/,
      /video\?z=video-(\d+_\d+)/,
      /vk\.com\/video(\d+_\d+)/,
    ];

    for (const pattern of patterns) {
      const match = videoUrl.match(pattern);
      if (match?.[1]) {
        setParsedVideoId(match[1]);
        return;
      }
    }

    if (/^\d+_\d+$/.test(videoUrl)) {
      setParsedVideoId(videoUrl);
    } else {
      setParsedVideoId(null);
    }
  }, [videoUrl]);

  if (!parsedVideoId) {
    return (
      <div
        className={className}
        style={{
          padding: 16,
          border: '1px solid #f5a5a5',
          borderRadius: 6,
          color: '#d32f2f',
        }}
      >
        Неверная ссылка на VK видео
      </div>
    );
  }

  const [ownerId, videoId] = parsedVideoId.split('_');
  const embedUrl = `https://vk.com/video_ext.php?oid=${ownerId}&id=${videoId}`;

  return (
    <div className={className} style={{ overflow: 'hidden', borderRadius: 8 }}>
      <iframe
        src={embedUrl}
        width={width}
        height={height}
        frameBorder={0}
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
        title="VK Video"
        style={{ width: '100%', borderRadius: 8 }}
      />
    </div>
  );
};

export default VKVideoPlayer;

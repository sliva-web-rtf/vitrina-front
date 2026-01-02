import React, { useEffect, useState } from 'react';

interface VKVideoPlayerProps {
  videoUrl: string;
  onChange?: (url: string) => void;
  width?: number | string;
  height?: number | string;
}


const VKVideoPlayer: React.FC<VKVideoPlayerProps> = ({
  videoUrl,
  onChange,
  width = '100%',
  height = 360,
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
    <div style={{ padding: 16, border: '1px dashed #ccc' }}>
      <div style={{ marginBottom: 8 }}>
        Вставьте ссылку на VK видео
      </div>

      {onChange && (
        <input
          type="text"
          value={videoUrl}
          placeholder="https://vk.com/video-123_456"
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '100%',
            padding: 8,
            border: '1px solid #ccc',
            borderRadius: 4,
          }}
        />
      )}
    </div>
  );
}


  const [ownerId, videoId] = parsedVideoId.split('_');
  const embedUrl = `https://vk.com/video_ext.php?oid=${ownerId}&id=${videoId}`;

  return (
    <div style={{ overflow: 'hidden', borderRadius: 8 }}>
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

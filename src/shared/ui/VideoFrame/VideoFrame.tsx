interface VideoFrameProps {
    url: string;

    name?: string;
    className?: string;
}

export const VideoFrame = (props: VideoFrameProps) => {
    const { name, url, className } = props;

    return (
        <iframe
            width="100%"
            style={{ aspectRatio: '16 / 9', borderRadius: 'var(--space-xl)', border: 'none' }}
            className={className}
            src={`https://www.youtube.com/embed/${url}`}
            title={`${name} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
};

interface VideoFrameProps {
    url: string;

    name?: string;
    className?: string;
}

export const VideoFrame = (props: VideoFrameProps) => {
    const { name, url, className } = props;

    return (
        <iframe
            className={className}
            src={`https://www.youtube.com/embed/${url}`}
            title={`${name} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    );
};

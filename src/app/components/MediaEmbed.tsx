type MediaEmbedProps = {
  url: string;
};

export function MediaEmbed({ url }: MediaEmbedProps) {
  const isYoutube = url.includes("youtube.com") || url.includes("youtu.be");

  const isSoundcloud = url.includes("soundcloud.com");

  if (isYoutube) {
    const videoId = url.includes("youtu.be")
      ? url.split("/").pop()
      : new URL(url).searchParams.get("v");

    return (
      <div className="embed">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          allowFullScreen
        />
      </div>
    );
  }

  if (isSoundcloud) {
    return (
      <div className="embed">
        <iframe
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
            url,
          )}`}
          title="SoundCloud player"
        />
      </div>
    );
  }

  return null;
}

type Props = {
  url: string;
};

export function BandcampEmbed({ url }: Props) {
  const embedUrl = `https://bandcamp.com/EmbeddedPlayer/album=1561783288/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/?url=${encodeURIComponent(url)}`;

  return (
    <div className="bandcamp">
      <iframe src={embedUrl} title="Bandcamp player" allow="autoplay" />
    </div>
  );
}

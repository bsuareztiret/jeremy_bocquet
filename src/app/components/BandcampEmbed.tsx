type Props = {
  url: string;
  src: string;
  text: string;
};

export function BandcampEmbed({ url, src, text }: Props) {
  return (
    <div className="bandcamp">
      <iframe src={url} title="Bandcamp player" allow="autoplay" seamless>
        <a href={src}>{text}</a>
      </iframe>
    </div>
  );
}

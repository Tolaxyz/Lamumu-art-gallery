import Image from "next/image";

type ArtworkCardProps = {
  src: string;
};

export default function ArtworkCard({ src }: ArtworkCardProps) {
  return (
    <div className="min-w-[300px] h-[400px] relative rounded-2xl overflow-hidden shadow-lg">
      <Image
        src={src}
        alt="Artwork"
        fill
        className="object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>
  );
}

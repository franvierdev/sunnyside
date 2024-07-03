import Image from "next/image";

export default function Gallery() {
  return (
    <div className="flex max-sm:grid grid-cols-2">
      <Image
        src="/desktop/image-gallery-milkbottles.jpg"
        width={720 / 2}
        height={894 / 2}
        alt="milk"
        className=""
      />
      <Image
        src="/desktop/image-gallery-orange.jpg"
        width={720 / 2}
        height={894 / 2}
        alt="orange"
      />
      <Image
        src="/desktop/image-gallery-cone.jpg"
        width={720 / 2}
        height={894 / 2}
        alt="cone"
      />
      <Image
        src="/desktop/image-gallery-sugarcubes.jpg"
        width={720 / 2}
        height={894 / 2}
        alt="sugarcubes"
      />
    </div>
  );
}

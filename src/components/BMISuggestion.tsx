import Image, { StaticImageData } from "next/image";

export default function BMISuggestion({
  icon,
  title,
  description,
}: {
  icon: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 last:mb-0">
      <Image className="mb-8" src={icon} alt={`${title} Icon`} />
      <p className="font-semibold text-2xl mb-6 text-gunmetal">{title}</p>
      <p className="text-dark-electric-blue">{description}</p>
    </div>
  );
}

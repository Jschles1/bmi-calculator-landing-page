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
    <div className="mb-10 last:mb-0 sm:flex sm:items-center lg:block lg:max-w-[365px]">
      <Image
        className="mb-8 sm:mb-0 lg:mb-[2.813rem]"
        src={icon}
        alt={`${title} Icon`}
      />
      <div className="sm:ml-10 lg:ml-0">
        <p className="font-semibold text-2xl mb-6 text-gunmetal">{title}</p>
        <p className="text-dark-electric-blue">{description}</p>
      </div>
    </div>
  );
}

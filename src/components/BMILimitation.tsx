import Image, { StaticImageData } from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function BMILimitation({
  icon,
  title,
  description,
}: {
  icon: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <Card className="mb-4 last:mb-0">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Image className="mr-4" src={icon} alt={`${title} Icon`} />
          <p className="text-gunmetal">{title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-dark-electric-blue">{description}</p>
      </CardContent>
    </Card>
  );
}

import { cn } from "@/lib/utils";

export default function BMIResultsBox({
  fields,
  unit,
}: {
  fields: Fields;
  unit: "metric" | "imperial";
}) {
  let content: React.ReactNode;
  let idealWeightString = "";

  const hasMetricFields =
    fields.heightCm && fields.weightKg && unit === "metric";
  const hasImperialFields =
    fields.heightFt &&
    fields.heightIn &&
    fields.weightSt &&
    fields.weightLb &&
    unit === "imperial";

  if (!hasMetricFields && !hasImperialFields) {
    content = (
      <>
        <div className="tracking-tighter font-semibold text-2xl mb-4">
          Welcome!
        </div>
        <p className="text-normal">
          Enter your height and weight and you&apos;ll see your BMI result here.
        </p>
      </>
    );
  } else {
    let bmiValue = "";

    if (hasMetricFields) {
      const height = Number(fields.heightCm) / 100;
      const weight = Number(fields.weightKg);
      bmiValue = (weight / height ** 2).toFixed(1);
      const idealWeightFrom = (18.5 * height ** 2).toFixed(1);
      const idealWeightTo = (24.9 * height ** 2).toFixed(1);
      idealWeightString = `${idealWeightFrom}kgs - ${idealWeightTo}kgs`;
    }

    if (hasImperialFields) {
      const height = Number(fields.heightFt) * 12 + Number(fields.heightIn);
      const weight = Number(fields.weightSt) * 14 + Number(fields.weightLb);
      bmiValue = ((weight / height ** 2) * 703).toFixed(1);
      const idealWeightFrom = (18.5 * height ** 2) / 703;
      const idealWeightFromInSt = Math.floor(idealWeightFrom / 14);
      const idealWeightFromInLb = Math.round(idealWeightFrom % 14);
      const idealWeightTo = (24.9 * height ** 2) / 703;
      const idealWeightToInSt = Math.floor(idealWeightTo / 14);
      const idealWeightToInLb = Math.round(idealWeightTo % 14);
      idealWeightString = `${idealWeightFromInSt}st ${idealWeightFromInLb}lbs - ${idealWeightToInSt}st ${idealWeightToInLb}lbs`;
    }

    const underweight = Number(bmiValue) < 18.5;
    const healthy = Number(bmiValue) >= 18.5 && Number(bmiValue) <= 24.9;
    const overweight = Number(bmiValue) >= 25;

    let resultString = "";

    if (underweight) {
      resultString = "Your BMI suggests you're underweight.";
    } else if (healthy) {
      resultString = "Your BMI suggests you're a healthy weight.";
    } else if (overweight) {
      resultString = "Your BMI suggests you're overweight.";
    }

    content = (
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="sm:basis-2/4">
          <p className="font-bold">Your BMI is...</p>
          <p className="mt-4 font-bold text-5xl mb-6 lg:mb-0">{bmiValue}</p>
        </div>
        <p className="text-normal sm:basis-2/4">
          {resultString} Your ideal weight is between{" "}
          <span className="font-bold">{idealWeightString}</span>.
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-gradient-to-r from-[#345FF6] to-[#587DFF] text-custom-white p-8 rounded-xl flex-1 sm:rounded-r-full",
        !!idealWeightString && "sm:flex sm:items-center sm:justify-center"
      )}
    >
      {content}
    </div>
  );
}

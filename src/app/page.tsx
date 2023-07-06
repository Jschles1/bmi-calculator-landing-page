"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import BMISuggestion from "@/components/bmi-suggestion";
import BMILimitation from "@/components/bmi-limitation";
import BMIResultsBox from "@/components/bmi-results-box";
import {
  BMI_SUGGESTIONS,
  BMI_LIMITATIONS,
  DESKTOP_BMI_LIMITS_FIRST_ROW,
  DESKTOP_BMI_LIMITS_SECOND_ROW,
  DESKTOP_BMI_LIMITS_THIRD_ROW,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import Logo from "public/images/logo.svg";
import PersonImage from "public/images/image-man-eating.webp";
import LeftCurvedLineIcon from "public/images/pattern-curved-line-left.svg";
import RightCurvedLineIcon from "public/images/pattern-curved-line-right.svg";

export default function Home() {
  const [radioOption, setRadioOption] = React.useState<"metric" | "imperial">(
    "metric"
  );
  const { register, setValue, watch, reset } = useForm<Fields>();
  const fields = watch();

  const handleRadioChange = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (radioOption === event.currentTarget.value) return;
    setRadioOption(event.currentTarget.value as "metric" | "imperial");
    reset();
  };

  const handleNumberInput = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const name = target.name as InputOption;
    if (target.value.length > 2) {
      target.value = target.value.slice(0, 2);
      setValue(name, target.value);
    }
  };

  return (
    <main className="min-h-screen mx-auto max-w-[1440px] lg:px-5">
      <div className="relative lg:pr-[27.375rem] lg:flex">
        <div className="text-center lg:text-left px-6 py-8 bg-gradient-to-tl from-[#D6E6FE] to-[rgba(214,252,254,0.00)] rounded-b-[35px] h-[640px] relative -z-10 lg:h-[737px] lg:pt-[4.688rem] lg:pl-[7.25rem] lg:pb-[12.5rem] lg:pr-[24.813rem]">
          <Image
            src={Logo}
            alt="Body Mass Index Calculator Logo"
            className="mx-auto lg:mx-0 w-[40px] h-[40px] lg:w-auto lg:h-auto"
          />

          <h1 className="text-5xl text-gunmetal leading-[110%] tracking-tighter font-semibold my-6 lg:mb-9 lg:mt-[7.938rem] lg:text-6xl">
            Body Mass <br /> Index Calculator
          </h1>

          <p className="text-dark-electric-blue leading-normal">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
        </div>

        <Card className="h-[649px] mx-6 mt-[-10rem] sm:mt-[-19rem] flex flex-col lg:absolute lg:m-0 lg:h-auto lg:w-[564px] lg:right-[7.5rem] lg:bottom-[5.375rem]">
          <CardHeader>
            <CardTitle className="tracking-tighter text-gunmetal sm:p-2">
              Enter your details below
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 sm:px-8 sm:pb-8 flex-1 flex flex-col">
            <RadioGroup
              defaultValue="metric"
              className="flex items-start gap-6 mb-6 sm:mb-8"
            >
              <div className="flex items-center sm:flex-1">
                <RadioGroupItem
                  className="mr-5"
                  value={"metric"}
                  onClick={handleRadioChange}
                  onKeyDown={handleRadioChange}
                />
                <Label className="font-semibold text-base text-gunmetal">
                  Metric
                </Label>
              </div>
              <div className="flex items-center sm:flex-1">
                <RadioGroupItem
                  className="mr-5"
                  value={"imperial"}
                  onClick={handleRadioChange}
                  onKeyDown={handleRadioChange}
                />
                <Label className="font-semibold text-base text-gunmetal">
                  Imperial
                </Label>
              </div>
            </RadioGroup>

            <div
              className={cn(
                "min-h-[212px] sm:min-h-0",
                radioOption === "metric" && "sm:flex sm:gap-6 sm:mb-8"
              )}
            >
              {radioOption === "metric" && (
                <>
                  <div className="mb-4 sm:mb-0">
                    <Label
                      htmlFor="height-metric"
                      className="text-xs text-dark-electric-blue mb-2 block"
                    >
                      Height
                    </Label>
                    <div className="relative">
                      <Input
                        className="py-5 px-6 text-2xl h-auto text-gunmetal border-custom-gray rounded-xl"
                        id="height-metric"
                        type="number"
                        placeholder="0"
                        {...register("heightCm")}
                      />
                      <div className="absolute text-2xl text-custom-blue top-5 right-6">
                        cm
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-0">
                    <Label
                      htmlFor="weight-metric"
                      className="text-xs text-dark-electric-blue mb-2 block"
                    >
                      Weight
                    </Label>
                    <div className="relative">
                      <Input
                        className="py-5 px-6 text-2xl h-auto text-gunmetal border-custom-gray rounded-xl"
                        id="weight-metric"
                        type="number"
                        placeholder="0"
                        {...register("weightKg")}
                      />
                      <div className="absolute text-2xl text-custom-blue top-5 right-6">
                        kg
                      </div>
                    </div>
                  </div>
                </>
              )}

              {radioOption === "imperial" && (
                <>
                  <div className="mb-4 sm:mb-6">
                    <Label
                      htmlFor="height-imp"
                      className="text-xs text-dark-electric-blue mb-2 block"
                    >
                      Height
                    </Label>
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Input
                          className="py-5 px-6 text-2xl h-auto text-gunmetal border-custom-gray rounded-xl"
                          id="height-imp"
                          type="number"
                          placeholder="0"
                          maxLength={2}
                          onInput={handleNumberInput}
                          {...register("heightFt")}
                        />
                        <div className="absolute text-2xl text-custom-blue top-5 right-6">
                          ft
                        </div>
                      </div>

                      <div className="relative">
                        <Input
                          className="py-5 px-6 text-2xl h-auto text-gunmetal border-custom-gray rounded-xl"
                          id="height-imp"
                          type="number"
                          placeholder="0"
                          maxLength={2}
                          onInput={handleNumberInput}
                          {...register("heightIn")}
                        />
                        <div className="absolute text-2xl text-custom-blue top-5 right-6">
                          in
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <Label
                      htmlFor="weight-metric"
                      className="text-xs text-dark-electric-blue mb-2 block"
                    >
                      Weight
                    </Label>
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Input
                          className="py-5 px-6 text-2xl h-auto text-gunmetal border-custom-gray rounded-xl"
                          id="weight-metric"
                          type="number"
                          placeholder="0"
                          maxLength={2}
                          onInput={handleNumberInput}
                          {...register("weightSt")}
                        />
                        <div className="absolute text-2xl text-custom-blue top-5 right-6">
                          st
                        </div>
                      </div>

                      <div className="relative">
                        <Input
                          className="py-5 px-6 text-2xl h-auto text-gunmetal border-custom-gray rounded-xl"
                          id="weight-metric"
                          type="number"
                          placeholder="0"
                          maxLength={2}
                          onInput={handleNumberInput}
                          {...register("weightLb")}
                        />
                        <div className="absolute text-2xl text-custom-blue top-5 right-6">
                          lbs
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <BMIResultsBox fields={fields} unit={radioOption} />
          </CardContent>
        </Card>
      </div>

      <div className="sm:flex sm:items-center relative sm:flex-row-reverse w-full sm:py-24 sm:pr-11 lg:flex-row lg:px-[8.75rem] lg:items-start">
        <div className="mt-[4.5rem] mb-12 sm:m-0 sm:w-[360px] sm:-h-[411px] sm:absolute sm:-left-16 lg:relative lg:-left-0 lg:w-[564px] lg:h-[533px]">
          <Image src={PersonImage} alt="Man eating sushi" />
        </div>

        <div className="mb-[4.5rem] px-6 sm:m-0 sm:basis-1/2 sm:pb-4 lg:pl-[8.188rem] lg:pr-0 lg:pt-[11.5rem]">
          <h2 className="tracking-tighter text-gunmetal font-semibold text-[2rem] leading-[110%] lg:text-5xl">
            What your BMI result means
          </h2>

          <p className="text-dark-electric-blue mt-8">
            A BMI range of 18.5 to 24.9 is considered a &apos;healthy
            weight.&apos; Maintaining a healthy weight may lower your chances of
            experiencing health issues later on, such as obesity and type 2
            diabetes. Aim for a nutritious diet with reduced fat and sugar
            content, incorporating ample fruits and vegetables. Additionally,
            strive for regular physical activity, ideally about 30 minutes daily
            for five days a week.
          </p>
        </div>

        <Image
          src={LeftCurvedLineIcon}
          alt="Left Curved Line"
          className="hidden lg:block lg:absolute lg:bottom-[30.063rem] lg:right-[10.438rem]"
        />
      </div>

      <div className="block bg-gradient-315 bg-opacity-25 from-[#D6E6FE] to-[rgba(214,252,254,0.00)100%] py-14 sm:py-[3.75rem] pl-5 sm:pl-[2.438rem] pr-[1.813rem] sm:pr-[2.688rem] lg:rounded-3xl lg:px-[7.25rem] lg:flex lg:items-start lg:gap-8">
        {BMI_SUGGESTIONS.map((suggestion) => (
          <BMISuggestion key={suggestion.title} {...suggestion} />
        ))}
      </div>

      <div className="pt-[4.5rem] pl-[1.188rem] pr-[1.813rem] pb-[6rem] sm:pl-[2.438rem] sm:pr-[2.688rem] relative lg:pt-[7.5rem] lg:pb-[7.5rem] lg:pl-[8.75rem] lg:pr-[8.75rem]">
        <div className="lg:absolute lg:w-[564px]">
          <h2 className="tracking-tighter text-gunmetal font-semibold text-[2rem] leading-[110%] text-center mb-8 lg:text-5xl lg:text-left">
            Limitations of BMI
          </h2>

          <p className="text-dark-electric-blue mb-14 text-center lg:text-left">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>

        <div className="sm:flex sm:items-center sm:justify-center sm:flex-wrap sm:gap-4 sm:[&>*:nth-child(3)]:h-[256px] sm:[&>*:nth-child(4)]:h-[256px] lg:hidden">
          {BMI_LIMITATIONS.map((limitation) => (
            <BMILimitation key={limitation.title} {...limitation} />
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="mb-8 flex items-center justify-end mr-[6.188rem]">
            <BMILimitation {...DESKTOP_BMI_LIMITS_FIRST_ROW} />
          </div>
          <div className="mb-8 flex items-center gap-8 justify-end">
            {DESKTOP_BMI_LIMITS_SECOND_ROW.map((limitation) => (
              <BMILimitation key={limitation.title} {...limitation} />
            ))}
          </div>
          <div className="mb-8 flex items-center gap-8 justify-end mr-[12.438rem]">
            {DESKTOP_BMI_LIMITS_THIRD_ROW.map((limitation) => (
              <BMILimitation key={limitation.title} {...limitation} />
            ))}
          </div>
        </div>

        <Image
          src={RightCurvedLineIcon}
          alt="Right Curved Line"
          className="hidden lg:block lg:absolute lg:bottom-[28.188rem] lg:left-[17.813rem]"
        />
      </div>
    </main>
  );
}

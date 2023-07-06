import IconEating from "public/images/icon-eating.svg";
import IconExcercise from "public/images/icon-exercise.svg";
import IconSleep from "public/images/icon-sleep.svg";
import IconGender from "public/images/icon-gender.svg";
import IconPregnancy from "public/images/icon-pregnancy.svg";
import IconRace from "public/images/icon-race.svg";
import IconAge from "public/images/icon-age.svg";
import IconMuscle from "public/images/icon-muscle.svg";

export const BMI_SUGGESTIONS = [
  {
    icon: IconEating,
    title: "Healthy eating",
    description:
      "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  },
  {
    icon: IconExcercise,
    title: "Regular excercise",
    description:
      "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    icon: IconSleep,
    title: "Adequate sleep",
    description:
      "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];

export const BMI_LIMITATIONS = [
  {
    icon: IconGender,
    title: "Gender",
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    icon: IconAge,
    title: "Age",
    description:
      "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    icon: IconMuscle,
    title: "Muscle",
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    icon: IconPregnancy,
    title: "Pregnancy",
    description:
      "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    icon: IconRace,
    title: "Race",
    description:
      "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];

export const DESKTOP_BMI_LIMITS_FIRST_ROW = BMI_LIMITATIONS[0];
export const DESKTOP_BMI_LIMITS_SECOND_ROW = BMI_LIMITATIONS.slice(1, 3);
export const DESKTOP_BMI_LIMITS_THIRD_ROW = BMI_LIMITATIONS.slice(3, 5);

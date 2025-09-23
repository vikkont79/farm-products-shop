import { LabeledText } from "@/shared/ui";

function Specifications({ specifications }) {
  const { weight, breed, placeOfOrigin, shelfLife } = specifications;

  return (
    <>
      <LabeledText label="Масса: " value={weight} />
      <LabeledText label="Порода: " value={breed} />
      <LabeledText label="Место происхождения: " value={placeOfOrigin} />
      <LabeledText label="Срок годности: " value={shelfLife} />
    </>
  )
};

export { Specifications }
import { LabeledText } from '@/shared/ui';


function Properties({ ...properties }) {
  const { energyValue, nutritionalValue } = properties;

  return (
    <>
      <LabeledText label="Энергетическая ценность: " value={energyValue} />
      <LabeledText label="Пищевая ценность: " value={nutritionalValue} />
    </>
  )
};

export { Properties };
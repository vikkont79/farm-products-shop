import { LabeledText } from "@/shared/ui";
import { TabsPrice } from "./styles";

function Description({ description }) {
  const { text, price } = description;

  return (
    <>
      <LabeledText label="" value={text} />
      <TabsPrice label="Цена: " value={price} />      
    </>
  )
};

export { Description }
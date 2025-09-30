import { LabeledText } from "@/shared/ui";
import { MoreButton, TabsPrice } from "./styles";

function Description({ ...description }) {
  const { text, price, showAll, onShowAll } = description;

  return (
    <>
      <LabeledText label="" value={text} />
      <MoreButton type="button" onClick={onShowAll}>
        {showAll ? "Свернуть" : "Показать ещё"}
      </MoreButton>
      <TabsPrice label="Цена: " value={price} />
    </>
  )
};

export { Description }
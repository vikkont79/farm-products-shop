import { LabeledText } from "@/shared/ui";
import { MoreButton, TabsPrice } from "./styles";

function Description({ ...description }) {
  const { text, price, showAll, onShowAll, inStock } = description;

  return (
    <>
      <LabeledText value={text} />
      <MoreButton type="button" onClick={onShowAll}>
        {showAll ? "Свернуть" : "Показать ещё"}
      </MoreButton>
      {inStock ? <TabsPrice label="Цена: " value={price} /> : <TabsPrice label="Всё раскупили" />}
    </>
  )
};

export { Description }
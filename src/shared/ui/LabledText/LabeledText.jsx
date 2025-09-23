import { Label, TabsText } from "./styles";

function LabeledText({ label, value, className }) {
  return (
    <TabsText className={className}>
      {label && <Label>{label}</Label>}
      {value}      
    </TabsText>
  );
};

export { LabeledText };
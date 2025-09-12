import { CardLabel, CardTitle, FeatureText, StyledFeatureCard } from './styles';

function FeatureCard({ label, title, description, advantage }) {
  const isFarmProduct = label === 'Фермерские продукты';
  return (
    <StyledFeatureCard className={
      `advantages__item--${advantage} 
      ${isFarmProduct ? `advantages__item--farm` : ''}`
    }>
      <CardLabel className={
        `advantages__item--${advantage}
        ${isFarmProduct ? `advantages__item--farm` : ''}`
      }>
        {label}
      </CardLabel>
      <CardTitle>{title}</CardTitle>
      <FeatureText dangerouslySetInnerHTML={{ __html: description }}/>
    </StyledFeatureCard>
  )
};

export { FeatureCard };
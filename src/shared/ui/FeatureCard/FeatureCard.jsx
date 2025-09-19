import { CardLabel, CardTitle, FeatureText, StyledCard } from './styles';

function FeatureCard({ label, title, description, advantage }) {
  const isFarmProduct = label === 'Фермерские продукты';
  return (
    <StyledCard className={
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
    </StyledCard>
  )
};

export { FeatureCard };
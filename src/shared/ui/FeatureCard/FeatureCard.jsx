import './style.css';

function FeatureCard({ label, title, description, advantage }) {
  const isFarmProduct = label === 'Фермерские продукты';
  return (
    <li className={
      `advantages__item 
      advantages__item--${advantage} 
      ${isFarmProduct ? `advantages__item--farm` : ''}`
    }>
      <span className="advantages__label">{label}</span>
      <p className="advantages__title">{title}</p>
      <p
        className="advantages__description"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </li>
  )
}

export { FeatureCard }
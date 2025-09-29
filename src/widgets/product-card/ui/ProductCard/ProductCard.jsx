import { Tabs } from '../Tabs/Tabs';
import { CardImage, CardContent, CardLink, CardTitle, StyledCard } from './styles';
import { TitleSize } from '@/shared/ui';
import { Description } from '../Description/Description';
import { Specifications } from '../Specifications/Specifications';
import { Properties } from '../Properties/Properties';
import { Accordion } from '../Accordion/Accordion';
import { PageProvider } from '../../lib';

function ProductCard({ title, image, description, specifications, properties, isPage }) {

  const items = [
    {
      key: 'description',
      title: description.title,
      content: <Description description={description} />,
    },
    {
      key: 'specifications',
      title: specifications.title,
      content: <Specifications specifications={specifications} />,
    },
    {
      key: 'properties',
      title: properties.title,
      content: <Properties properties={properties} />,
    },
  ].filter(Boolean);

  return (
    <PageProvider isPage={isPage}>
      <StyledCard>
        <CardLink href='#'>
          <CardImage src={image} alt={title} width={248} height={248} />
        </CardLink>
        <CardContent>
          <CardLink href='#'>
            <CardTitle size={isPage ? TitleSize.BIG : TitleSize.SMALL}>{title}</CardTitle>
          </CardLink>
          {isPage ? <Accordion items={items} /> : <Tabs tabs={items} />}
        </CardContent>
      </StyledCard>
    </PageProvider>
  )
};

export { ProductCard };
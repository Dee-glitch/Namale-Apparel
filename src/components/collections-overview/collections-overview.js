import { useContext } from 'react';
import CollectionsContext from '../../contexts/collections.context';
import CollectionPreview from '../collection-preview/collection-preview';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(
    (key) => collectionsMap[key],
  );

  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;

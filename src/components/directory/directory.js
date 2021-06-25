import MenuItem from '../menu-item/menu-item';
import { useContext } from 'react';
import DirectoryContext from '../../contexts/directory.context';
import { DirectoryMenuContainer } from './directory.styles';

const Directory = () => {
  const sections = useContext(DirectoryContext);

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;

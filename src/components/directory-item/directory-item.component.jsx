import { useNavigate } from 'react-router-dom';

import { DirectoryItemContainer, BackgroundImage, DirectoryItemBodyContainer, TitleStyle, Paragraph } from './directory-item.styles';

const DirectoryItem = ({ category }) => {

  const { imageUrl, title, route } = category
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route)
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl} />
      <DirectoryItemBodyContainer>
        <TitleStyle>{title}</TitleStyle>
        <Paragraph>Shop Now</Paragraph>
      </DirectoryItemBodyContainer>
    </DirectoryItemContainer>
  )

}

export default DirectoryItem
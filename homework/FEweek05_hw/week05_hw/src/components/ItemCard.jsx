import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.07);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.015);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const ItemName = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #333;
`;

const ItemBrand = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #e67e22;
`;

const ItemCard = ({ imageUrl, itemName, brand, price }) => (
  <Card>
    <ItemImage src={imageUrl} alt={itemName} />
    <CardBody>
      <ItemName>{itemName}</ItemName>
      <ItemBrand>{brand}</ItemBrand>
      <ItemPrice>{price.toLocaleString()}원</ItemPrice>
    </CardBody>
  </Card>
);

export default ItemCard;

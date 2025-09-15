import styled from "styled-components";

export const MainTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  margin: 20px 0;
`;

export const WishListContainer = styled.div`
  width: 70%;
  margin: 30px auto;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
`;

export const Empty = styled.div`
  padding: 40px 0;
  text-align: center;
  color: #888;
  font-size: 1.2rem;
`;

export const WishItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
export const Img = styled.img`
  width: 50px;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
  background: #f5f5f5;
  flex-shrink: 0;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 2px;
`;

export const Author = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #666;
`;

export const Price = styled.div`
  font-size: 0.8rem;
  color: rgb(23, 14, 128);
  font-weight: 600;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const btnBase = `
  padding: 5px 12px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  background: #fafafa;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.5s, border 0.5s, color 0.5s;
  &:hover {
    background: #e0f7fa;
    border-color: #0097a7;
    color: #006064;
  }
`;

export const IncreaseBtn = styled.button`
  ${btnBase}
  font-weight: bold;
`;

export const DecreaseBtn = styled.button`
  ${btnBase}
  font-weight: bold;
`;

export const Quantity = styled.span`
  min-width: 30px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  display: inline-block;
`;

export const DeleteBtn = styled.button`
  ${btnBase}
  margin-left: 12px;
  color: #fff;
  border-color: #b71c1c;
  background: #b71c1c;
  transition: background-color 0.5s ease, color 0.5s ease;

  &:hover {
    background: #ffebee;
    border-color: #e57373;
    color: #b71c1c;
  }
`;

export const TotalPrice = styled.div`
  padding: 15px 20px;
  text-align: right;
  font-size: 0.9rem;
  color: rgb(96, 96, 96);
`;

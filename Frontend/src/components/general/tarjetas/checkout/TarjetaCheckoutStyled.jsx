import styled, { css } from "styled-components"

const textStyle = css`
  font-family: Nunito;
  font-size: 20px;
  font-weight: 400;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  max-width: 500px;
  width: 100%;
  padding: 30px 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  box-shadow:
  1.1px 1.1px 2.2px rgba(0, 0, 0, 0.02),
  2.7px 2.7px 5.3px rgba(0, 0, 0, 0.028),
  5px 5px 10px rgba(0, 0, 0, 0.035),
  8.9px 8.9px 17.9px rgba(0, 0, 0, 0.042),
  16.7px 16.7px 33.4px rgba(0, 0, 0, 0.05),
  40px 40px 80px rgba(0, 0, 0, 0.07);
`

export const Title = styled.h1`
  font-family: Nunito;
  font-size: 25px;
  font-weight: 700;
`

export const Currency = styled.span`
  ${textStyle};
  padding: 4px 6px;
  border: 1px solid black;
  border-radius: 8px;
`

export const BoxItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 20px 0;
  gap: 25px;
`

export const Product = styled.h1`
  ${textStyle};
  font-size: 22px;
  font-weight: 600;
`

export const Price = styled.h2`
  ${textStyle};
  font-size: 22px;
  font-weight: 600;
  text-align: right;
`

export const ProductName = styled.h1`
  ${textStyle};
`

export const ProductPrice = styled.h2`
  ${textStyle};
  text-align: right;
`

export const Total = styled.h2`
  ${textStyle};
  text-align: right;
`

export const BoxButtonPayment = styled.div`
  margin-top: ${props => props.$marginTop || '0'};
`
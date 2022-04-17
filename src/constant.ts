import styled, { StyledComponent } from "styled-components";
import { PropsCustomComponentType } from "./type";
export const iconBasket = require('./icons/iconBasket.png');
export const loaderLoading = require('./icons/loader-loading.gif');

export const CustomComponent:any = styled.div(({ props }: PropsCustomComponentType) => ({ ...props }));
export const Button = styled.button`
color: black;
  text-decoration: none;
  padding: 10px 10px;
  border: 2px solid gray;
  background: transparent;
  ;
`;

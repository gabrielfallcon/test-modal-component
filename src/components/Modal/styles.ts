import styled from "styled-components";
import { css } from 'styled-components';

import { IModalProps } from "./Modal";

export const ModalLayout = styled.div`
  background: rgba(8, 8, 8, 0.64);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${(props: IModalProps) => (props.active ? "1" : "0")};
  pointer-events: ${(props: IModalProps) => (props.active ? "auto" : "none")};
  transition: opacity 160ms, left 160ms;
  z-index: 1000;

  @media (max-width: 768px) {
    opacity: 1;
    left: ${(props: IModalProps) => (props.active ? "0" : "-110%")};
  }
`;

export const ModalWindow = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  left: 50%;
  max-height: 80%;
  ${(props: IModalProps) => props.size === "small" && sizeSmall};
  ${(props: IModalProps) => props.size === "medium" && sizeMedium};
  ${(props: IModalProps) => props.size === "large" && sizeLarge};
  min-width: 415px;
  max-width: 80%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: ${(props: IModalProps) =>
    props.active ? "translate(-50%, -50%)" : "translate(-50%, -40%)"};
  transition: transform 160ms, left 160ms;

  @media (max-width: 768px) {
    min-width: 100%;
    max-height: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }
`;

const sizeSmall = css`
  width: 440px;
`;
const sizeMedium = css`
  width: 900px;
`;
const sizeLarge = css`
  width: 1200px;
`;

export const ModalHeader = styled.header`
  @media (max-width: 768px) {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const ButtonModalWindowCloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  width: 18px;
  height: 18px;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  :focus,
  :active {
    outline: 0;
  }

  @media (max-width: 768px) {
    left: 0px;
    top: 32px;
    right: unset;
  }
`;

export const Icon = styled.i`
  color: #000;
  font-size: 24px;

  &.g-erro {
    @media (max-width: 768px) {
      display: none;
    }
  }
  &.g-arrow-left {
    display: none;

    @media (max-width: 768px) {
      display: inline-block;
    }
  }
`;

export const ModalHeaderMobileFixed = styled.header`
  @media (max-width: 768px) {
    height: 64px;
  }
`;

export const ModalHeaderTitle = styled.h2`
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.02em;
  padding: 24px 48px 16px;
`;

export const ModalHeaderSubTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.02em;
  padding: 24px 48px 16px;
`;

export const ModalBody = styled.main`
  padding: 24px;
  overflow-y: auto;
  height: 100%;

  footer {
    margin-top: 24px;
  }
`;

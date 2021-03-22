import {
  ModalLayout,
  ModalWindow,
  ModalHeader,
  ButtonModalWindowCloseBtn,
  Icon,
  ModalHeaderMobileFixed,
  ModalHeaderTitle,
  ModalHeaderSubTitle,
  ModalBody,
} from "./styles";

export interface IModalProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean;
  handleClose?: () => void;
  size?: "small" | "medium" | "large";
  subtitle?: string;
  title?: string;
  arialLabel?: string;
}

const Modal: React.FC<IModalProps> = ({
  size,
  active,
  title,
  subtitle,
  children,
  handleClose,
  arialLabel,
  ...props
}) => {
  return (
    <ModalLayout active={active} {...props}>
      <ModalWindow active={active} size={size}>
        <ModalHeader>
          <ButtonModalWindowCloseBtn
            type="button"
            // onClick={() => handleClose()}
            aria-label={arialLabel}
          >
            <Icon className="g-erro" />
            <Icon className="g-arrow-left" />
          </ButtonModalWindowCloseBtn>
          {!title && <ModalHeaderMobileFixed></ModalHeaderMobileFixed>}
          {title && <ModalHeaderTitle>{title}</ModalHeaderTitle>}
          {subtitle && <ModalHeaderSubTitle>{subtitle}</ModalHeaderSubTitle>}
        </ModalHeader>

        <ModalBody>{children}</ModalBody>
      </ModalWindow>
    </ModalLayout>
  );
};

export default Modal;

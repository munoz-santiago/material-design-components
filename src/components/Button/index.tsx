import { ButtonProps, ButtonType } from './Button.d';
import * as styles from './styles';

const Button = ({ children, type }: ButtonProps) => {
    return (
        <styles.ButtonContainer type={type || ButtonType.PRIMARY}>
            {children}
        </styles.ButtonContainer>
    );
};

export default Button;

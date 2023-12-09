import styled from 'styled-components';
import { Colors, FontSizes } from '../../config_variables';
import { ButtonType } from './Button.d';

interface ButtonContainerProps {
    type: ButtonType,
}

const stylesByType = {
    [ButtonType.PRIMARY]: `
        background-color: ${Colors.primary};
        color: #ffffff;
        &:hover {
            background-color: ${Colors.primarySmooth};
        }
    `,
    [ButtonType.SECONDARY]: `
        border: 1px solid ${Colors.primary};
    `,
    [ButtonType.TERTIARY]: ``,
} as {[type in ButtonType]: string};

export const ButtonContainer = styled.button<ButtonContainerProps>`
    padding: 10px 20px;
    border-radius: 20px;
    font-size: ${FontSizes.md};
    background-color: #ffffff;
    color: ${Colors.primary};

    &:hover {
        background-color: ${Colors.grey6};
        cursor: pointer;
    }

    ${({ type }) => stylesByType[type]}
`;

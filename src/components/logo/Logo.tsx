
import logo from "./Logo.svg";
import styled from "styled-components"

const Image = styled.img`
    width: 64px;

    &:hover {
        cursor: pointer;
    }
`

const Logo: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
    return (
        <Image
            onClick={onClick ?? (() => {})}
            width={"64px"}
            src={logo}
        />
    );
};

export default Logo;

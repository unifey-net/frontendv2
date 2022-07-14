import { Anchor, Avatar, Box, Header as GrommetHeader, Nav } from "grommet";
import { ChatOption, Notification } from "grommet-icons";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";

/**
 * The main header of any Unifey page.
 */
const Header = () => {
    const nav = useNavigate();

    return (
        <GrommetHeader
            background="secondary"
            pad="medium"  
            margin="none"
            align="center"
            direction="row"
            justify="between"
        >
            <Box direction="row" gap="medium">
                <Logo onClick={() => nav("/")} />
            </Box>
            
            <Box direction="row">
                <Nav direction="row">
                    <Anchor icon={<ChatOption/>} />
                    <Anchor icon={<Notification/>} />
                    <Avatar src="https://unifey.app/favicon.png" onClick={() => nav("/account")} hoverIndicator/>
                </Nav>
            </Box>
        </GrommetHeader>
    );
};

export default Header;

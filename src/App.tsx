import {
    Anchor,
    Box,
    Grommet,
    Header,
    Heading,
    Paragraph,
    ThemeType,
} from "grommet";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./view/home";
import NotFound from "./view/etc/NotFound";
import { createGlobalStyle } from "styled-components";
import { normalizeColor } from "grommet/utils";
import Logo from "./components/logo/Logo";
import Footer from "./components/Footer";

const theme: ThemeType = {
    global: {
        font: {
            family: "Roboto Flex",
            size: "14px",
            height: "20px",
        },
        colors: {
            background: "#261E1E",
            primary: "#1C1617",
            secondary: "#191213",
            accessory: "#F9BFC0",
        },
    },
};

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: ${normalizeColor("background", theme)};
        padding-bottom: 32px;
    }
`;

const App = () => {
    const nav = useNavigate()
    return (
        <Grommet theme={theme}>
            <GlobalStyle />
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                }}
            />
            <Header
                background="secondary"
                pad="12px"
                style={{ width: "100%" }}
                margin="none"
                align="center"
                direction="row"
                justify="center"
            >
                <Logo onClick={() => nav("/")} />
            </Header>

            <Box align="center" justify="center">
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Box>
            <Footer>
                <Paragraph size="xsmall">
                    © Unifey {new Date().getFullYear()} —{" "}
                    <Anchor href="/privacy" label="Privacy" />,{" "}
                    <Anchor href="/tos" label="Terms of Service" />
                </Paragraph>
            </Footer>
        </Grommet>
    );
};

export default App;

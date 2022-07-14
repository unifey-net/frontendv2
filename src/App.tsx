import {
    Anchor,
    Box,
    Grommet,
    Heading,
    Layer,
    Main,
    NameValueList,
    NameValuePair,
    Paragraph,
    ThemeType,
} from "grommet";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./view/Home";
import NotFound from "./view/etc/NotFound";
import { createGlobalStyle } from "styled-components";
import { normalizeColor } from "grommet/utils";
import Logo from "./components/logo/Logo";
import Footer from "./components/base/Footer";
import React, { useState } from "react";
import { VERSION } from "./constants/Unifey";
import Header from "./components/base/Header";
import Account from "./view/account/Account";

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
    heading: {
        font: {
            family: "Roboto"
        }
    },
    anchor: {
        color: "accessory"
    }
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

            <Header />

            <Main pad="large">
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />

                        <Route path="/account">
                            <Route index element={<Account />} />
                        </Route>

                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Main>

            <Footer/>
        </Grommet>
    );
};

export default App; 

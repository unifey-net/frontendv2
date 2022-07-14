import {
    Anchor,
    Box,
    Heading,
    Layer,
    NameValueList,
    NameValuePair,
    Paragraph,
} from "grommet";
import { useState } from "react";
import styled from "styled-components";
import { VERSION } from "../../constants/Unifey";

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    bottom: 0;
    padding-bottom: 8px;
`;

/**
 * The footer seen on every page.
 */
export default () => {
    const [debugOverlay, setDebugOverlay] = useState(false);

    return (
        <Footer>
            {debugOverlay && (
                <Layer
                    onEsc={() => setDebugOverlay(false)}
                    onClickOutside={() => setDebugOverlay(false)}
                >
                    <Box pad="large">
                        <Heading>Unifey Frontend v2</Heading>
                        <NameValueList>
                            <NameValuePair name="Version">
                                {VERSION}
                            </NameValuePair>
                            <NameValuePair name="Node Environment">
                                {process.env.NODE_ENV}
                            </NameValuePair>
                            <NameValuePair name="Connected">
                                false
                            </NameValuePair>
                        </NameValueList>
                    </Box>
                </Layer>
            )}
            
            <Paragraph size="xsmall">
                © Unifey {new Date().getFullYear()} —{" "}
                <Anchor href="/privacy" label="Privacy" />,{" "}
                <Anchor href="/tos" label="Terms of Service" />,{" "}
                <Anchor
                    onClick={() => setDebugOverlay((ov) => !ov)}
                    label="Debug"
                />
            </Paragraph>
        </Footer>
    );
};

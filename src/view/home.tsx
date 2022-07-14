import {
    Anchor,
    Box,
    Heading,
    Image,
    Page,
    PageContent,
    Paragraph,
    Text,
} from "grommet";
import Copyable from "../components/Copyable";

const Home = () => {
    return (
        <Page kind="narrow" alignSelf="center">
            <PageContent background="secondary" round="small" margin="medium">
                <Box gap="medium" pad="large">
                    <Image src="homepage.png" />

                    <Heading level="3" alignSelf="center">
                        Open source, privacy focused social media platform.
                    </Heading>
                </Box>
            </PageContent>

            <PageContent gap="small" pad="medium" direction="row">
                <Box>
                    <Heading level="2">About Unifey</Heading>
                    <Paragraph>
                        Unifey is an open source and privacy centric social
                        media platform. Past Beta, Unifey will include a forum
                        style messaging board system alongside direct and group
                        messaging.{" "}
                    </Paragraph>
                </Box>
                <Box>
                    <Heading level="2">Unifey Source</Heading>
                    <Paragraph>
                        Unifey's source code is completely open at our{" "}
                        <Anchor href="https://github.com/unifey-net">
                            GitHub
                        </Anchor>
                        .
                    </Paragraph>
                </Box>
            </PageContent>

            <PageContent
                background="secondary"
                gap="small"
                pad="medium"
                direction="row"
            >
                <Box>
                    <Heading level="2">Discord</Heading>
                    <Paragraph>
                        Currently, we use{" "}
                        <Anchor
                            href="https://discord.gg/QMVA8FWNbc"
                            label="Discord"
                        />{" "}
                        to discuss Unifey. <br /> If you happen to find a bug,
                        whether it be on our backend or front, we'd appreciate
                        if you could share it in the <Copyable>#bugs</Copyable> channel.
                    </Paragraph>
                </Box>
                <Box>
                    <Heading level="2">Where can I get started?</Heading>
                    <Paragraph>
                        You can get started using Unifey by registering <Anchor href="/register" label="here"/>!
                    </Paragraph>
                </Box>
            </PageContent>
        </Page>
    );
};

export default Home;

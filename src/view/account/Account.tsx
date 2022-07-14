import {
    Avatar,
    Box,
    Button,
    Grid,
    Heading,
    List,
    Page,
    PageContent,
    Paragraph,
} from "grommet";

/**
 * The main account page.
 */
const Account = () => {
    return (
        <Page kind="narrow" gap="large">
            <PageContent direction="row" background="secondary" round="small">
                <Box direction="row" gap="small" margin="large">
                    <Avatar size="large" src="https://unifey.app/favicon.png" />
                    <Heading>SHO</Heading>
                </Box>
                <Box
                    justify="center"
                    direction="column"
                    align="center"
                    gap="none"
                >
                    <Paragraph>Administrator</Paragraph>
                    <Paragraph>Member since July 13th, 2022</Paragraph>
                </Box>
            </PageContent>

            <PageContent pad="none" direction="row" gap="large">
                <Box alignContent="center" justify="center" width="1/3" gap="small" pad="medium" background="secondary" round="small" fill="vertical">
                    <Heading level="3">Controls</Heading>

                    <Button label="Change Username"/>
                    <Button secondary label="Change Email"/>
                    <Button secondary label="Change Password"/>
                    <Button color="red" label="Delete Account"/>
                </Box>
                <Box>
                    <Heading level="3">
                        Notifications
                    </Heading>
                </Box>
            </PageContent>
        </Page>
    );
};

export default Account;

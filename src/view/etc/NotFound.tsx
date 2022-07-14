import { Anchor, Heading, Page, PageContent } from "grommet";
import { useNavigate } from "react-router-dom";

/**
 * When a page can't be found.
 */
const NotFound = () => {
    const nav = useNavigate();

    return (
        <Page kind="wide">
            <PageContent>
                <Heading level="1">That page could not be found.</Heading>
                <Anchor onClick={() => nav(-1)}>back to safety.</Anchor>
            </PageContent>
        </Page>
    );
};

export default NotFound;

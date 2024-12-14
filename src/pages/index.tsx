import { Container, Row } from "react-bootstrap";

import IndexPageTitle from "../components/indexPageTitle";
import ServiceStateViewer from "../components/serviceStateViewer";
import IndexPageCanvas from "../components/indexPageModel/indexPageCanvas";

import "../style/pages-indexPage.css";

function IndexPage() {
    return (
        <>
            <Container fluid>
                <Row className="mb-5">
                    <IndexPageTitle />
                </Row>
                <ServiceStateViewer viewTarget="is-running"/>
                <ServiceStateViewer viewTarget="player-number"/>
                <IndexPageCanvas />
            </Container>
        </>
    )
}

export default IndexPage;
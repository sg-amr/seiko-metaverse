import { Navbar, Container, Nav, Row, Col, Image } from "react-bootstrap";

import { Link } from "react-router-dom"

import { SF_HP_URL, OSG_HP_URL } from "../libs/const";
import LinkButton from "../components/linkButton";

function Layout({ children }: { children: React.ReactNode }) {
    let environment: "phone" | "other" | undefined;
    if (window.innerWidth <= 768) {
        environment = "phone";
    } else {
        environment = "other";
    }
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" fixed="top" style={{
                boxShadow: "0px 3px 15px -5px #111111"
            }}>
                <Container className="text-end">
                    <Navbar.Brand href="#home">星光メタバース</Navbar.Brand>
                    <Nav className="ms-auto">
                        {
                            environment === "phone" ? (
                                <></>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                </>
                            )
                        }
                        <LinkButton targetPath="/play" className="mx-2">参加する</LinkButton>
                        <LinkButton targetPath="/signin" className="mx-2">ログイン</LinkButton>
                    </Nav>
                </Container>
            </Navbar>
            <header></header>
            <main style={{
                margin: "0",
                width: "100%",
                height: "auto",
                padding: "5rem 3px",
                backgroundColor: "#192f60"
            }}>
                {children}
            </main>
            <footer style={{ backgroundColor: '#222', color: '#fff', padding: '20px 0', width: "100%" }}>
                <Container>
                    <Row>
                        {/* 左側: 会社名や著作権表示 */}
                        <Col xs={12} md={6} className="text-center text-md-left">
                            <Container className="mb-4">
                                <Row className="d-flex">
                                    <Col>
                                        <Image src="/assets/image/icons/icon.jpeg" width={200} rounded alt="星光メタバースのアイコン" />
                                    </Col>
                                    <Col className="mt-auto">
                                        <h3>星光メタバース</h3>
                                    </Col>
                                </Row>
                            </Container>
                            <p>&copy; {new Date().getFullYear()} Team Aoristos All Rights Reserved</p>
                        </Col>

                        {/* 右側: ナビゲーションリンク */}
                        <Col xs={12} md={6} className="text-center text-md-right mt-auto mb-2">
                            <Nav className="justify-content-center justify-content-md-end">
                                <Nav.Link href={SF_HP_URL} className="text-white">
                                    SF2025HP
                                </Nav.Link>
                                <Nav.Link href={OSG_HP_URL} className="text-white">
                                    大阪星光学院HP
                                </Nav.Link>
                                <Nav.Link to="/privacy" as={Link} className="text-white">
                                    プライバシーポリシー
                                </Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Layout;
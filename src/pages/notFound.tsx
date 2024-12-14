import { Col, Container, Image, Row } from 'react-bootstrap';

import LinkButton from '../components/linkButton';

export default function NotFoundPage() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Image src="/assets/image/picture/404-not-found.svg" fluid style={
                            {
                                width: '40vw',
                                height: 'auto',
                                textAlign: "center"
                            }
                        } alt="404-not-found" width={window.innerWidth * 0.4} height={window.innerWidth * 0.4} />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1>404 Not Found</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 0 }} className="mt-4">
                        <h3>このURLのページは存在しないようです。</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 3, offset: 6 }} className='mt-4'>
                        <LinkButton targetPath="/">ホームに戻る</LinkButton>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

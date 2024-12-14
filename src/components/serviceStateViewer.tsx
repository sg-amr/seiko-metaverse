import { Col, Row } from "react-bootstrap";

import useServiceState from "../hooks/useServiceState";

function ServiceStateViewer({ viewTarget }: { viewTarget: "is-running" | "player-number" }) {
    const { isServiceRunning, playerNumber } = useServiceState();

    let UIdata: {
        title: string,
        success: string,
        danger: string,
    } = {
        title: "",
        success: "",
        danger: ""
    };
    if (viewTarget === "is-running") {
        UIdata.title = "現在の稼働状況";
        UIdata.success = "稼働中";
        UIdata.danger = "停止中"
    } else if (viewTarget === "player-number") {
        UIdata.title = "プレイ人数";
        if (playerNumber !== undefined && playerNumber !== null) {
            UIdata.success = playerNumber.toString() + "人";
        }
        UIdata.danger = "ー"
    }
    return (
        <>
            <Row className="mt-1">
                <Col className="text-center" md={{ span: 3, offset: 3 }}>
                    <p className="isRunning-title">{UIdata.title}：</p>
                </Col>
                {isServiceRunning === true ? (
                    <Col className="text-center" md={{ span: 3, offset: 0 }}>
                        <p className="isRunning-text bg-success">{UIdata.success}</p>
                    </Col>
                ) : (isServiceRunning === false ? (
                    <Col className="text-center" md={{ span: 3, offset: 0 }}>
                        <p className="isRunning-text bg-danger">{UIdata.danger}</p>
                    </Col>
                ) : (
                    <Col className="text-center" md={{ span: 3, offset: 0 }}>
                        <p className="isRunning-text bg-warning text-black">状態を取得中...</p>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default ServiceStateViewer;
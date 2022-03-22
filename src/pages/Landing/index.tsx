import {
	Button, Col, Row, Space,
} from "antd";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import WalletModal from "../../components/modal/WalletModal";

const Landing: React.VFC = () => {
	const [modalVisible, setModalVisible] = useState(false);

 	const handleCreateIndex = () => {
		setModalVisible(true);
	};

	const handleConnect = () => {
		alert("Connect");
	};

	return (
		<>
			<Row
				justify="center"
				align="middle"
				style={{
					paddingTop: 100,
					paddingBottom: 100,
				}}
			>
				<Col>
					<Space
						direction="vertical"
						style={{
							alignItems: "center",
						}}
					>
						<Title
							level={1}
							style={{
								width: 480,
								fontWeight: 400,
								textAlign: "center",
								color: "var(--color-blue-7)",
							}}
						>
					The human bridge between context and content
						</Title>
						<p>
					index.as helps you to curate content and create searchable indexes
						</p>
						<Button
							type="primary"
							onClick={handleCreateIndex}
						>
					Create your first index
						</Button>
					</Space>
				</Col>
			</Row>
			<WalletModal
				visible={modalVisible}
				onCancel={() => setModalVisible(false)}
				onConnect={handleConnect}
				destroyOnClose
			/>
		</>
	);
};

export default Landing;

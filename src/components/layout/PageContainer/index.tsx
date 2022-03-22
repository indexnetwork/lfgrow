import { Col, Row } from "antd";
import React from "react";

const PageContainer: React.FC = ({ children }) => (
	<Row
		justify="center"
		style={{
			padding: "36px 0",
		}}
	>
		<Col span={14}>
			{children}
		</Col>
	</Row>
);

export default PageContainer;

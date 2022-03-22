import { Col, Row, Tabs } from "antd";
import React from "react";
import IndexList from "../../components/IndexList";
import PageContainer from "../../components/layout/PageContainer";

const { TabPane } = Tabs;

const MyIndexes: React.VFC = () => {
	const handleTabChange = () => {

	};

	return (
		<PageContainer>
			<Row gutter={[16, 16]}>
				<Col span={24}>
					<Tabs defaultActiveKey="1" onChange={handleTabChange}>
						<TabPane tab="Your indexes" key="owned">
							<IndexList />
						</TabPane>
						<TabPane tab="Collected indexes" key="collected">
							<IndexList />
						</TabPane>
					</Tabs>
				</Col>
			</Row>
		</PageContainer>
	);
};

export default MyIndexes;

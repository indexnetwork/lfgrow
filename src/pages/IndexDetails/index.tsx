import { PlusOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import {
	Avatar, Col, Input, Row, Space,
} from "antd";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React from "react";
import PageContainer from "../../components/layout/PageContainer";
import LinkList from "../../components/LinkList";

const IndexDetails: React.FC = () => (
	<PageContainer>
		<Row gutter={[16, 16]}>
			<Col span={24}>
				<Space>
					<Avatar icon={<UserOutlined />} />
					<Text>You</Text>
				</Space>
			</Col>
			<Col span={24}>
				<Title level={3} style={{ margin: 0 }}>ETH Global Hackathon Documents</Title>
			</Col>
			<Col span={24}>
				<Text>Updated 3 hours ago</Text>
			</Col>
			<Col span={24}>
				<Input addonBefore={<SearchOutlined />} placeholder="Search in ETH Global Hackathon Documents" />
			</Col>
			<Col span={24}>
				<Input addonBefore={<PlusOutlined />} placeholder="Add new link to index" />
			</Col>
			<Col span={24}>
				<LinkList />
			</Col>
		</Row>
	</PageContainer>
);

export default IndexDetails;

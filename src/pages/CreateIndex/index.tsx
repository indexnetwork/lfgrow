import {
	Button, Select, Space, Switch,
} from "antd";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React, { useState } from "react";
import PageContainer from "../../components/layout/PageContainer";

const CreateIndex: React.VFC = () => {
	const [monetize, setMonetize] = useState(true);
	return (
		<PageContainer>
			<Title level={3}>Create Index</Title>
			<Form
				layout="vertical"
			>
				<Form.Item label="Index Title">
					<Input placeholder="Enter your index title" />
				</Form.Item>
				<Form.Item>
					<span>
						<Switch checked={monetize} onChange={(e) => { setMonetize(e); }} />
						<Text style={{
							marginLeft: 10,
						}}
						>
						Monetize
						</Text>
					</span>
				</Form.Item>
				{
					monetize && (
						<>
							<Form.Item required label="Wallet Address">
								<Input placeholder="Enter your wallet address" />
							</Form.Item>
							<Form.Item required label="Blockchain">
								<Select value="ethereum">
									<Select.Option value="ethereum">Ethereum</Select.Option>
								</Select>
							</Form.Item>
							<Form.Item required label="Price" tooltip="The amount paid by users who collects this index">
								<Input type="number" placeholder="Collect Price" />
							</Form.Item>
						</>
					)
				}
				<Space
					align="end"
					direction="vertical"
					style={{
						width: "100%",
					}}
				>
					<Button htmlType="submit" type="primary">Publish Index</Button>
				</Space>
			</Form>
		</PageContainer>
	);
};

export default CreateIndex;

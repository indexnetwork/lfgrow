import { Button, Space } from "antd";
import Modal, { ModalProps } from "antd/lib/modal";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import React from "react";
import IconMetamask from "../../icon/IconMetamask";

export interface WalletModalProps extends ModalProps {
	onConnect(): void;
}

const WalletModal: React.VFC<WalletModalProps> = (props) => (
	<Modal {...props} footer={null} centered>
		<Space
			direction="vertical"
			align="center"
			style={{
				textAlign: "center",
			}}
		>
			<Title level={2}>Connect to wallet</Title>
			<Text type="secondary">This app uses state channels.  To continue, you need to connect blockchain</Text>
			<Button
				block
				type="default"
				size="large"
				onClick={props.onConnect}
			>
				<Space
					align="center"
				>
					<IconMetamask height={22} />
					Connect to Metamask
				</Space>
			</Button>
			<Button
				type="link"
				onClick={(e) => {
					props.onCancel && props.onCancel(e);
				}}
			>
				Cancel
			</Button>
		</Space>
	</Modal>
);

export default WalletModal;

import { EllipsisOutlined } from "@ant-design/icons";
import {
	Button, Dropdown, List, Menu, Skeleton,
} from "antd";
import React from "react";

export interface IndexListItemProps {
	title: string;
	subtitle: string;
	item: any,
}

const IndexListItem: React.VFC<IndexListItemProps> = ({
	title,
	subtitle,
	item,
}) => {
	const menu = (
		<Menu>
			<Menu.Item key="0">
				<a href="https://www.antgroup.com">1st menu item</a>
			</Menu.Item>
			<Menu.Item key="1">
				<a href="https://www.aliyun.com">2nd menu item</a>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="3">3rd menu item</Menu.Item>
		</Menu>
	);

	return (
		<List.Item
			actions={[(
				<Dropdown
					overlay={menu}
					trigger={["click"]}
					placement="bottomRight"
				>
					<Button size="small" icon={<EllipsisOutlined />} />
				</Dropdown>)]}
		>
			<Skeleton avatar title={false} loading={item.loading} active>
				<List.Item.Meta
					title={title}
					description={subtitle}
				/>
			</Skeleton>
		</List.Item>
	);
};
export default IndexListItem;

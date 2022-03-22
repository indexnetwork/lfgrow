import { CloseOutlined } from "@ant-design/icons";
import { List, Skeleton } from "antd";
import React from "react";

export interface LinkItemProps {
	title: string;
	url: string;
	item: any,
}

const LinkListItem: React.VFC<LinkItemProps> = ({
	title,
	url,
	item,
}) => (
	<List.Item
		actions={[<CloseOutlined onClick={() => { alert("delete"); }} />]}
	>
		<Skeleton avatar title={false} loading={item.loading} active>
			<List.Item.Meta
				title={title}
				description={url}
			/>
		</Skeleton>
	</List.Item>
);

export default LinkListItem;

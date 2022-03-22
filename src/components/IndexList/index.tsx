import { List } from "antd";
import React from "react";
import IndexListItem from "./IndexListItem";

const IndexList = () => {
	const data = [
		{
			subitlte: "Updated 2 days ago",
			title: "Asd Index",
		},
		{
			subitlte: "Updated 2 days ago",
			title: "Asd Index",
		},
		{
			subitlte: "Updated 2 days ago",
			title: "Asd Index",
		},
		{
			subitlte: "Updated 2 days ago",
			title: "Asd Index",
		},
		{
			subitlte: "Updated 2 days ago",
			title: "Asd Index",
		},
		{
			subitlte: "Updated 2 days ago",
			title: "Asd Index",
		},
		{
			subitlte: "Updated 2 days ago",
			title: "Asd Index",
		},
	];

	return (
		<List
			itemLayout="horizontal"
			dataSource={data}
			renderItem={(item) => (
				<IndexListItem subtitle={item.subitlte} title={item.title} item={item} />
			)}
		/>
	);
};

export default IndexList;

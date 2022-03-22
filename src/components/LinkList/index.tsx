import { List } from "antd";
import React from "react";
import LinkListItem from "./LinkListItem";

const LinkList = () => {
	const data = [
		{
			url: "https://asd.com",
			title: "Asd website",
		},
		{
			url: "https://asd.com",
			title: "Asd website",
		},
		{
			url: "https://asd.com",
			title: "Asd website",
		},
		{
			url: "https://asd.com",
			title: "Asd website",
		},
		{
			url: "https://asd.com",
			title: "Asd website",
		},
	];

	return (
		<List
			itemLayout="horizontal"
			dataSource={data}
			renderItem={(item) => (
				<LinkListItem url={item.url} title={item.title} item={item} />
			)}
		/>
	);
};

export default LinkList;

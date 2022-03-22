import { Button, Space } from "antd";
import Layout from "antd/lib/layout";
import { Content, Header } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import LogoFull from "../../Logo";
import Container from "../Container";

export interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = ({
	children,
}) => {
	const [theme, setTheme] = useState<"home" | "site">();

	const router = useHistory();
	useEffect(() => {
		if (router.location.pathname === "/") {
			setTheme("home");
			return;
		}
		setTheme("site");
	}, [router]);

	return (
		<Layout>
			<Header style={{
				borderBottom: theme === "home" ? undefined : "1px solid var(--color-border)",
				backgroundColor: theme === "home" ? "var(--color-gray-3)" : "var(--color-white)",
			}}
			>
				<Container>
					<Space
						align="center"
						style={{
							width: "100%",
							justifyContent: "space-between",
						}}
					>
						<LogoFull height={32} width="auto" />
						<Space>
							<Button type="primary">Create Your First Index</Button>
						</Space>
					</Space>
				</Container>
			</Header>
			<Content
				style={{
					backgroundColor: theme === "home" ? "var(--color-gray-3)" : "var(--color-white)",
				}}
			>
				<Container>{children}</Container>
			</Content>
		</Layout>
	);
};

export default MainLayout;

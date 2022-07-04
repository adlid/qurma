interface MainLayoutProps {
	children?: any;
	className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
	children,
	className,
}) => {
	return (
		<>
			{/* <Header />
			<div >
				<div className="leftSide">
					<LeftMenu />
				</div>
				<div className={clsx("content", { "content--full": contentFullWidth })}>
					{children}
				</div> 
			</div> */}
		</>
	);
};

import React from "react";
import styles from "./SideBar.module.scss";

function SideBar() {
	return (
		<div className={styles.sidebar}>
			<div className={styles.top}>
				<span className={styles.logo}>QURMA</span>
			</div>
			<div className={styles.center}>
				<ul>
					<li>
						<span>Dashboard</span>
					</li>
                    <li>
						<span>Dashboard</span>
					</li>
                    <li>
						<span>Dashboard</span>
					</li>
                    <li>
						<span>Dashboard</span>
					</li> 
				</ul>
			</div>
			<div className={styles.bottom}>color options</div>
		</div>
	);
}

export default SideBar;

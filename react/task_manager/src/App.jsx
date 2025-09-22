import { useState } from 'react';
import styles from './App.module.css';
import tasks from './data/exercises.json';

function App() {
	const [data, setData] = useState(tasks);

	const getItemsCount = (items) => {
		const count = items.length;
		if (count % 10 === 1) return `${count} элемент`;
		else if (count % 10 > 1 && count % 10 < 5) return `${count} элемента`;
		else return `${count} элементов`;
	};

	return (
		<>
			<header>
				<h1>Курс Джуниор Frontend-разработчик Result University</h1>
			</header>
			<section className={styles.content}>
				<nav>
					<h1 className={styles['catalog-header']}>Каталог заданий (для навигации используйте раскрывающиеся списки и иконки)</h1>
					<ul className={styles['catalog-list']}>
						{data.map((item) => (
							<li key={item.id} className={styles['catalog-list-item']}>
								<details className={styles['module-item']}>
									<summary className={styles['module-item__summury']}>
										{item.module} 📁&nbsp;
										<span className={styles['items-count']}>({getItemsCount(item.topics)})</span>
									</summary>
									<ul className={styles['module-item__topic-list_first-level-of-nesting']}>
										{item.topics.map((topic) => (
											<li key={topic.id} className={styles['module-item__topic-list-item']}>
												<details className={styles['topic-item']}>
													<summary className={styles['topic-item__summury']}>
														{topic.title} 👉&nbsp;
														<span className={styles['items-count']}>({getItemsCount(topic.tasks)})</span>
													</summary>
													<ul className={styles['topic-item__topic-list_second-level-of-nesting']}>
														{topic.tasks.map((task) => (
															<li key={task.task_id} className={styles['topic-item__task-list-item']}>
																{task.title}&nbsp;
																<div className={styles['topic-item__task-list-item-actions']}>
																	{task.status.some((status) => status === 'ok') && (
																	<div className={styles['checked-icon']}>
																		<i className={'fa-regular fa-circle-check'}></i>
																	</div>
																	)}
																	{task.status.some((status) => status === 'updated') && (
																		<div className={styles['updated-icon']}>
																			<i className={'fa-regular fa-pen-to-square'}></i>
																		</div>
																	)}
																	<a href={task.source_code_url} className={`${styles['icon-button']} ${styles['github-icon']}`} target="_blank">
																		<i className={'fab fa-github'}></i>
																	</a>
																	{task.status.some((status) => status === 'deployed') && (
																		<a href={task.web_page_url} className={`${styles['icon-button']} ${styles['pages-icon']}`} target="_blank">
																			<i className={'fas fa-globe'}></i>
																		</a>
																	)}
																</div>
															</li>
														))}
													</ul>
												</details>
											</li>
										))}
									</ul>
								</details>
							</li>
						))}
					</ul>
				</nav>
			</section>
			<footer className={styles.footer}>
				<div className={styles['footer-content']}>
					<div className={styles.copyright}>© 2025 Все права защищены</div>

					<div className={styles['student-info']}>Курсант Бережной Александр</div>

					<div className={styles['social-links']}>
						<a href="https://t.me/Berezhnoy_Sasha" className={styles['social-link']} target="_blank">
							<svg className={styles['social-icon']} viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
							</svg>
							@Berezhnoy_Sasha
						</a>

						<div className={styles.university}>
							<a href="https://result.school/" className={styles['university-link']} target="_blank">
								<svg width="100%" height="100%" fill="none" viewBox="0 0 24 24" className={styles['university-icon']} xmlns="http://www.w3.org/2000/svg">
									<title>Result University</title>
									<g fill="#fff">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0 2.53C0 1.408.894.5 1.996.5h18.628c1.102 0 1.996.909 1.996 2.03v18.94c0 1.121-.894 2.03-1.996 2.03H1.996C.894 23.5 0 22.591 0 21.47V2.53zm4.324.405c-1.102 0-1.995.909-1.995 2.03V19.17c0 1.12.893 2.029 1.995 2.029h13.972c1.102 0 1.995-.909 1.995-2.03V4.966c0-1.121-.893-2.03-1.995-2.03H4.324zm-.066.812c-.551 0-.998.454-.998 1.015v14.68c0 .56.447 1.014.998 1.014h14.237c.551 0 .998-.454.998-1.015V4.761c0-.56-.447-1.014-.998-1.014H4.258zm3.545 6.84 1.5 2.63h1.586L9.24 10.36a2.49 2.49 0 0 0 1.044-.898c.262-.404.394-.84.394-1.31a2.44 2.44 0 0 0-.724-1.775 2.372 2.372 0 0 0-1.757-.736h-2.98v7.577h1.469v-2.63h1.118zm-1.118-1.31v-2.24h1.511c.277 0 .515.109.714.325.198.217.298.48.298.79 0 .31-.1.577-.298.801a.935.935 0 0 1-.714.325H6.685z"
										></path>
									</g>
								</svg>
								Result University
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default App;

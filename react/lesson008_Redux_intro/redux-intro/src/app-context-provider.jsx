import { UserDataContext } from './user-data-context';
import { ThemeContext } from './theme-context';
import { AppConfigContext } from './app-config-context';

export const AppContextProvider = ({ themeValue, userValue, appConfigValue, children }) => {
	return (
		<ThemeContext value={themeValue}>
			<UserDataContext value={userValue}>
				<AppConfigContext value={appConfigValue}>{children}</AppConfigContext>
			</UserDataContext>
		</ThemeContext>
	);
};

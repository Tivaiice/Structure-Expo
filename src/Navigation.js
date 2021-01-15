
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SplashScreen from './SplashScreen';
import HomeContainer from './containers/HomeContainer';
import ContactContainer from './containers/ContactContainer';

const SwitchNav = createSwitchNavigator(
    {
        SplashScreen,
        Home: HomeContainer,
        Contact : ContactContainer,
    },
    {
        initialRouteName: 'SplashScreen'
    }
)

export default createAppContainer(SwitchNav);
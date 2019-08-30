import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Details: RestaurantDetailScreen,
}, {
  intitalRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Food Search'
  }
});

export default createAppContainer(navigator);
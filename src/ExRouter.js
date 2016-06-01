import ExNavigator from '@exponent/react-native-navigator';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';

const ExRouter = {
  getLoginRoute() {
    return {
      getSceneClass() {
        return Login;
      },
      configureScene() {
        return ExNavigator.SceneConfigs.Fade;
      }
    }
  },
  getDashboardRoute() {
    return {
      getSceneClass() {
        return Dashboard;
      },
      configureScene() {
        return ExNavigator.SceneConfigs.Fade;
      }
    }
  }
};

export default ExRouter;

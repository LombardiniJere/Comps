import { useContext } from 'react';
import NavigationContext from '../components/Context/Navigation';

function useNavigation () {
  return useContext(NavigationContext);
}

export default useNavigation;
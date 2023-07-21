import useNavigation from "../hooks/use-navigation"

const Route = ({ path, children }) => {
  const { currentPath } = useNavigation();

  // si el URL es igual al currentPath devolvemos el prop que hemos envevido en children
  // si no son iguales no quiero que se renderice nada (return null)
  if (path === currentPath) {
    return children
  }
  return null;
}

export default Route
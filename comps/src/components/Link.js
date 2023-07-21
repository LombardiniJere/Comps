import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation';

function Link({ to, children, className, activeClassName }) {
    // navigate is a value that we passed on NavigationContext().
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    'text-blue-500',
    'mb-3',
    className,
    currentPath === to && activeClassName,
  );

  // this component is used to avoid refreshind a new page when the user onClick on an <a></a>
  // e.preventDefault() we told React not to trigger the default function in this case= page refreash
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
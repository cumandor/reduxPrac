import styles from './Header.module.css';
import { useFavorites } from '../../hooks/useFavorites';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';

export default function Header() {

  const { favorites } = useFavorites()

  return (
    <header className={styles.header}>
      <BsFillBookmarkHeartFill fontSize={20}/>
      <span>{favorites.length}</span>
    </header>
  );
}

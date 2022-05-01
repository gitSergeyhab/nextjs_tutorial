import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from './header.module.scss';
import { MouseEvent } from 'react';

const AuthStatus = {
  Auth: 'authenticated',
  NoAuth: 'unauthenticated',
  Loading: 'loading',
}


const Header = () => {

  const { status, data } = useSession();
  console.log( status, data )

  const handleSignInClick = (evt: MouseEvent) => {
    evt.preventDefault();
    signIn();
  }

  const handleSignOutClick = (evt: MouseEvent) => {
    evt.preventDefault();
    signOut();
  }

  const signInLi = status === AuthStatus.NoAuth ?
    <li><Link href={'/api/auth/signin'}><a onClick={handleSignInClick}>Sign In</a></Link></li> :
    null;

  const signOutLi = status === AuthStatus.Auth ?
    <li><Link href={'/api/auth/signout'}><a onClick={handleSignOutClick}>Sign Out</a></Link></li> :
    null;

  const loadingLi = status === AuthStatus.Loading ?
    <li style={{opacity: 0.2}}><Link href={'#'}><a>Loading</a></Link></li> : 
    null;

    return (
      <header className={styles.header}>
        <ul className={styles.navList}>
          <li><Link href={'/'}><a>next-js tutorial</a></Link></li>

          <li><Link href={'/dashboard-swr'}><a>dashboard (swr)</a></Link></li>
          <li><Link href={'/news'}><a>news</a></Link></li>
          {signInLi}
          {signOutLi}
          {loadingLi}

        </ul>


        
        
        
      </header>
    )
}

export default Header;
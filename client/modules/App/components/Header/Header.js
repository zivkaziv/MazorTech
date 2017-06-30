import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';
import BoolLogoSvg from "../../IconSvg";

export function Header(props, context) {
  // const languageNodes = props.intl.enabledLanguages.map(
  //   lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  // );

  return (
    <div className={styles.header}>
      <Link to={'/'} ><div className={styles.logo}><BoolLogoSvg/></div></Link>
      <div className={styles['language-switcher']}>
        {/*<ul>*/}
          {/*<li><FormattedMessage id="switchLanguage" /></li>*/}
          {/*{languageNodes}*/}
        {/*</ul>*/}
      </div>
      {/*<div className={styles.content}>*/}
        {/*<h1 className={styles['site-title']}>*/}
          {/*<Link to="/" ><FormattedMessage id="siteTitle" /></Link>*/}
        {/*</h1>*/}
        {/*{*/}
          {/*context.router.isActive('/', true)*/}
            {/*? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>*/}
            {/*: null*/}
        {/*}*/}
      {/*</div>*/}
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.any,
  switchLanguage: PropTypes.any,
  intl: PropTypes.any,
};


export default Header;

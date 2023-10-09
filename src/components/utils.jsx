import { Link } from "react-router-dom"

export function whereToRickRoll(text, toggleMenu) {
  
  const isChrome = () => {
    const userAgent = navigator.userAgent;
    const isChromeBrowser = userAgent.indexOf("Chrome") > -1;
    return isChromeBrowser;
  }

  if (isChrome()) {
    return (
      <Link to="rickroll" onClick={toggleMenu}>
        {text}
      </Link>
    )
  } else {
      return (
        <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">{text}</a>
    )
  }
}
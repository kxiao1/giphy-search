import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useHistory, Redirect } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import {
  Nav,
  Container,
  Jumbotron,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { Gif } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartR } from '@fortawesome/free-regular-svg-icons';
import {
  faHeart as faHeartS,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';

import { store, useWidth } from './appContext';
import './style.css';
import icon from './icon_light_normal_ios.png';
import filler from './avatar.png';

function TopBar() {
  const globalState = useContext(store);
  const history = useHistory();
  const { state, dispatch } = globalState;
  const { currUser, isSignedIn, clientId } = state;
  const profile = currUser ? currUser.profileObj : null;
  const renderer = renderProps => (
    <button
      type="button"
      style={{ backgroundColor: 'white', border: '1px solid #ced4da' }}
      onClick={() => {
        dispatch({ type: 'signOut' });
        renderProps.onClick();
      }}
    >
      <img className="g-icon" src={icon} alt="g-icon" />
      Logout
    </button>
  );

  // written as redirect to make return logic clearer
  if (!isSignedIn) {
    return <Redirect to="../" />;
  }
  const { givenName } = profile;
  const firstidx = givenName.indexOf(',');
  let firstName;
  if (firstidx === -1) {
    firstName = givenName;
  } else {
    firstName = givenName.slice(0, firstidx);
  }
  return (
    <Jumbotron>
      <div className="container">
        <div className="row row-fluid">
          <div className="col-6 big">
            <h1>Details</h1>
          </div>
          <div className="col text-right lift">
            <p>
              Welcome,
              <span className="bold">{` ${firstName} ${profile.familyName}`}</span>
            </p>
            <GoogleLogout
              clientId={clientId}
              render={renderer}
              onLogoutSuccess={() => {
                history.push('../');
              }}
            />
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}

function FavIcon(props) {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;
  const { favorites } = state;
  const { url } = props;
  // function binSearch(start) {
  //   const len = start.length;
  //   const mid = Math.floor(len / 2);
  //   switch (len) {
  //     case 0:
  //       return false;
  //     case 1:
  //       return start[0] === url;
  //     default:
  //       if (start[mid] === url) {
  //         return true;
  //       }
  //       if (start[mid] < url) {
  //         return binSearch(start.slice(mid + 1));
  //       }
  //       return binSearch(start.slice(0, mid));
  //   }
  // }
  function linSearch(start) {
    const len = start.length;
    for (let i = 0; i < len; i += 1) {
      if (start[i] === url) {
        return true;
      }
    }
    return false;
  }
  const isFav = () => {
    // return binSearch(favorites);
    return linSearch(favorites);
  };

  const handleClick = (e, bool) => {
    e.preventDefault();
    setFav(bool);
    if (bool) {
      dispatch({ type: 'like', url });
    } else {
      dispatch({ type: 'unlike', url });
    }
  };
  const [Fav, setFav] = useState(isFav());
  const prompt = Fav ? 'Remove from favorites' : 'Add to favorites';
  return (
    <OverlayTrigger
      placement="right"
      overlay={<Tooltip id="tooltip-right">{prompt}</Tooltip>}
    >
      <button
        type="button"
        className="action"
        onClick={e => handleClick(e, !Fav)}
      >
        <FontAwesomeIcon
          icon={Fav ? faHeartS : faHeartR}
          style={{ color: 'red' }}
          size="2x"
        />
      </button>
    </OverlayTrigger>
  );
}

function ShareIcon(props) {
  const { url } = props;
  const copyToClipboard = e => {
    e.preventDefault();
    const toCopy = 'https://giphy.com/gifs/'.concat(url);
    navigator.clipboard.writeText(toCopy);
  };
  return (
    <OverlayTrigger
      placement="right"
      overlay={<Tooltip id="tooltip-right">Copy link to clipboard</Tooltip>}
    >
      <button type="button" className="action" onClick={copyToClipboard}>
        <FontAwesomeIcon
          icon={faShareAlt}
          style={{ color: 'black' }}
          size="2x"
        />
      </button>
    </OverlayTrigger>
  );
}
function Picture(props) {
  let name;
  let userName;
  let date;
  const { res, url } = props;
  const history = useHistory();
  const [picData, setData] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState('');
  const width = Math.min(useWidth(), 400);
  const withMargin = width + 15;
  const stop = (gif, e) => {
    e.stopPropagation();
    e.preventDefault();
    window.open(gif.url, '_blank');
  };
  useEffect(() => {
    const fetchData = async () => {
      const gf = new GiphyFetch('xnRLsVCSkmNxrfX34lVxjbuN4faLWKbq');
      const { data } = await gf.gif(url);
      setData(data);
    };
    fetchData();
  }, [url]);
  useEffect(() => {
    const fetchAvatar = async u => {
      fetch(u)
        .then(res1 => {
          return res1.blob();
        })
        .then(blob => {
          const img = URL.createObjectURL(blob);
          setAvatar(<img src={img} width="100" alt="avatar" />);
        });
    };
    if (avatarUrl === 'blank') {
      setAvatar(<img src={filler} width="100" alt="avatar_default" />);
    } else if (avatarUrl !== '') {
      fetchAvatar(avatarUrl);
    }
  }, [avatarUrl]);

  if (picData) {
    if (avatar) {
      const { title, user, import_datetime } = picData;
      const dLast = import_datetime.lastIndexOf(' ');
      date = import_datetime.slice(0, dLast);
      const tLast = title.lastIndexOf('GIF');
      name = title.slice(0, tLast - 1);
      userName = user ? user.display_name : '<Unknown User>';
    }
    if (avatarUrl === '') {
      const { user } = picData;
      setAvatarUrl(user ? user.avatar_url : 'blank');
    }
  }
  return picData && avatar ? (
    <div className="container left space">
      <header>
        {' '}
        <h2>{name}</h2>
      </header>
      <div>
        <Gif hideAttribution gif={picData} onGifClick={stop} width={width} />
      </div>
      <div className="row desc" style={{ width: withMargin }}>
        {/* {' //account for negative margin '} */}
        <div className="col-3 fixed100">{avatar}</div>
        <div className="col">
          <h3>{userName}</h3>
          <h4>{date}</h4>
        </div>
      </div>
      <div
        className="row no-gutters"
        style={{ marginBottom: '2px', width: '30%' }}
      >
        <div className="col-3 col-md-2 small">
          <FavIcon url={url} />
        </div>
        <div className="col-3 col-md-2 small">
          <ShareIcon url={url} />
        </div>
      </div>
      <div className="row no-gutters">
        <button
          type="button"
          className="link"
          onClick={() => history.push('/search', { res })}
        >
          More search results
        </button>
      </div>
    </div>
  ) : (
    <p>Loading the picture...</p>
  );
}

function NavBar() {
  return (
    <div className="fixed-bottom">
      <Container>
        <Nav justify variant="tabs">
          <Nav.Item href="/search">
            <Nav.Link as={Link} to="/search">
              Search
            </Nav.Link>
          </Nav.Item>
          <Nav.Item href="/favorites">
            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
}

function Details() {
  const { state } = useLocation();
  const history = useHistory();
  const body = state ? (
    <Picture url={state.url} res={state.res} />
  ) : (
    <div className="header space">
      <header>
        <p>Oops, you have not selected an image to view yet!</p>
        <button type="button" onClick={() => history.push('/search')}>
          Back to Search
        </button>
      </header>
    </div>
  );
  return (
    <Container>
      <TopBar />
      {body}
      <NavBar />
    </Container>
  );
}
export default Details;

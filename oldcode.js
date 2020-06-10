/* old code for reference only */
// class Auth extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isSignedIn: false, failed: false };
//   }

//   componentDidMount() {
//     const successCallback = this.onSignIn.bind(this);
//     const failureCallback = this.onFailure.bind(this);
//     const script = document.createElement('script');
//     script.src = 'https://apis.google.com/js/platform.js';
//     script.crossOrigin = 'anonymous';
//     document.body.appendChild(script);

//     script.onload = () => {
//       window.gapi.load('auth2', () => {
//         this.auth2 = gapi.auth2.init({
//           client_id: '615286336479-bfng52a7akti075n3s59phgmuk3me6qh.apps.googleusercontent.com',
//           cookiePolicy: 'single_host_origin',
//         });
//         this.auth2
//           .then(result => {
//             if (this.auth2.isSignedIn.get()) {
//               this.setState({
//                 user: this.auth2.currentUser.get(),
//                 isSignedIn: true,
//               });
//             }
//           })
//           .catch(error => console.log(error));
//       });
//       window.gapi.signin2.render('loginButton', {
//         scope: 'profile',
//         width: 400,
//         height: 100,
//         longtitle: true,
//         onsuccess: successCallback,
//         onfailure: failureCallback,
//       });
//     };
//   }

//   componentWillUnmount() {
//     this.auth2.disconnect();
//   }

//   onSignIn(googleUser) {
//     this.setState({ user: googleUser, isSignedIn: true });
//   }

//   onFailure() {
//     this.setState({ failed: true });
//   }

//   getContent() {
//     let f;
//     const { failed } = this.state;
//     if (failed) {
//       f = 'Try again.';
//     } else {
//       f = '';
//     }
//     return (
//       <div>
//         <button type="button" id="loginButton">
//           Login with Google
//         </button>
//         <p>{f}</p>
//       </div>
//     );
//   }

//   renderRedirect() {
//     const { isSignedIn, user } = this.state;
//     if (isSignedIn) {
//       console.log(user);
//       return <Redirect to={{ pathname: '/search' }} />;
//     }
//     return null;
//   }

//   render() {
//     return (
//       <div className="signIn">
//         {this.renderRedirect()}
//         <header className="header">a simple gifsearch webapp.</header>
//         {this.getContent()}
//       </div>
//     );
//   }
// }
// useEffect(() => {
//   const callApi = () => {
//     const arr = favorites.map(async url => {
//       console.log(url);
//       // return `testing{$url}`;
//       return fetch(url);
//     });
//     Promise.all(arr).then(values => console.log(values));
//   };
//   callApi();
// }, [favorites, gf]);
// console.log(data);

// old css below
  /* background-color: rgb(255, 255, 255);
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.54);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
  padding: 0px;
  border-radius: 2px;
  border: 1px solid transparent;
  font-weight: 500;
  font-family: Roboto, sans-serif; */

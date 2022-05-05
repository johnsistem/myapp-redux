import '../styles/globals.css'
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
//Boostrap
import "bootstrap/dist/css/bootstrap.css";
function MyApp({ Component, pageProps }) {
  return (
		<>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
  );
}

export default MyApp

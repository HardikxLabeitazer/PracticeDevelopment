import '../styles/globals.css'
import {store} from '../storedir/store'
import {Provider} from 'react-redux'
import PostsLists from './features/posts/postsLists'
import AddPostForm from './features/posts/addpostform'
function MyApp({ Component, pageProps }) {
  return <>
  <Provider store={store}>
    <Component {...pageProps} />
    <AddPostForm/>
    <PostsLists/>
  </Provider>
  
  
  </> 
}

export default MyApp

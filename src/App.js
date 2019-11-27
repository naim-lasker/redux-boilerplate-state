import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Posts from './components/Posts';
import PostsForm from './components/PostsForm';


function App() {
  return (
    <Provider store= {store}>
      <React.Fragment>
        <PostsForm />
        <Posts />
      </React.Fragment>
    </Provider>
  );
}

export default App;

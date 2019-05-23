import React from 'react'

const Home = (props) => {

  setTimeout(() => {
          props.history.push('/about')
  }, 3000);

    return(
      <div>
        <h2> Home Page</h2>
        <p> Welcome to our Websites</p>
      </div>
    )
    
  }
  export default Home
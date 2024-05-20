import '../styles/NotFound.scss'

const NotFound = () => {
  function goHome() { window.location.replace("/") }
  return (
    <div className='NotFoundContainer'>
      <h1>404</h1>
      <h2>Not Found</h2>
      <button onClick={goHome}>GO HOME</button>
    </div>
  )
}

export default NotFound
import './style.css';

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  )
}

export { Button }
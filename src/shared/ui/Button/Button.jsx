import './style.css';

function Button({ children, minInlineSize }) {
  return (
    <button className="button" style={{minInlineSize: minInlineSize}} type="button">
      {children}
    </button>
  )
};

export { Button };
function Title({ children, size }) {
  return (
    <p className={`title${size ? ` title__${size}` : ""}`}>
      {children}
    </p>
  )
};

export { Title };
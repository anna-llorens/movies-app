export const Button = ({ children, onClick, variant ="" }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

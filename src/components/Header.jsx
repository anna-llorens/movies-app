import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <h1 onClick={handleHomeClick} className="header-title">
        🎥 Movies Guide
      </h1>
    </header>
  );
};

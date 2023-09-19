function Header() {
  return (
    <header>
      <ul
        style={{
          display: "flex",
          height: "3rem",
          background: "grey",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <li style={{ cursor: "pointer" }}>Home</li>
        <li>About</li>
        <li>profile</li>
      </ul>
    </header>
  );
}

export default Header;

function Avatar() {
    return (
      <img
        className="avatar"
        src="./img/jorge-e-mar.jpg"
        alt="Lin Lanying"
        width={100}
        height={100}
      />
    );
  }
  
  export default function Profile() {
    return (
      <Avatar />
    );
  }
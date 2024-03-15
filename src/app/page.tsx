const user = {
  nim : '2141720152',
  name: 'Khafillah Akbar Syahputra',
  imageUrl: '/assets/04.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.nim}-{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
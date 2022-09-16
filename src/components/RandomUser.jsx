const getFullUserName = (user) => {
  return `${user.name?.title} ${user.name?.first} ${user.name?.last}`;
}
const RandomUser = ({ user }) => {
  // console.log(user)
  return (
    <div className="user">
      <h2>{getFullUserName(user)}</h2>
      <img src={user.picture?.thumbnail} />
    </div>
  )
}

export default RandomUser;
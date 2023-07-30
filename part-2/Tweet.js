// define a tweet componenet which takes props
// porps name: name of the user
// props username: of user who wrote tweet
// props date: date of the tweet
// props message: message being tweeted
// create an App componenet that renders at least three tweets.
// style your Tweet componenet using a CSS class

const Tweet = ({ name, username, date, message }) => {
  return (
    <div>
      <span>{name}</span>
      <span className="username">{username}</span>
      <span className="date">{date}</span>
      <p className="message">{message}</p>
    </div>
  );
};

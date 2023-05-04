function Card({ img, tags, title, description, ghostIcon, ghostTitle, time }) {
  return (
    <div className="post-card">
      <div className="post-card-header">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="post-card-image"
        ></div>
        <div className="post-card-tags">
          <span>{tags}</span>
        </div>
        <h2 className="post-card-title">{title}</h2>
      </div>
      <p className="post-card-description">{description}</p>
      <div className="post-card-footer">
        <div className="post-card-footer-left">
          <div className="post-card-avatar">
            <img
              src={ghostIcon}
              alt={ghostTitle}
              className="author-profile-image"
            />
          </div>
          <span>{ghostTitle}</span>
        </div>
        <div>{time}</div>
      </div>
    </div>
  );
}

export default Card;

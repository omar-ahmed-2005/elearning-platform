import defaultAvatar from '../../image/alexander.jpg';

function CourseCard({ image, title, category, description, price, rating, instructor, instructorAvatar, duration, enrolled }) {
  return (
    <article>
      <div>
        <img src={image} alt={title} />
        <span>{duration}</span>
      </div>
      <p>{category}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <span>{'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}</span>
        <span>({rating})</span>
      </div>
      <div>
        <img src={instructorAvatar || defaultAvatar} alt={instructor} width="32" height="32" />
        <span>{instructor}</span>
        {enrolled && <span>{enrolled} enrolled</span>}
      </div>
      <strong>{price}</strong>
    </article>
  );
}

export default CourseCard;

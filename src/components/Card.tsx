import { NewsModel } from '../types/NewsModel'

type Props = {
  post: NewsModel
}

const Card = ({ post }: Props) => {
  return (
    <div className="card h-100 w-100 shadow-sm">
      {post.imageUrl ? (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="card-img-top"
          style={{ height: '180px', objectFit: 'cover' }}
        />
      ) : (
        <div
          style={{
            height: '180px',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#aaa',
            fontSize: '14px',
          }}
        >
          Görsel yok
        </div>
      )}

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{post.title || "Başlık yok"}</h5>
       
      </div>
    </div>
  )
}
export default Card
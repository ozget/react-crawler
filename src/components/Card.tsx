import { NewsModel } from '../types/NewsModel'

type Props = {
  post: NewsModel
}

const Card = ({ post }: Props) => {
  return (
    <div className="card h-100 w-100 shadow-sm"> {/* <== w-100 eklendi */}
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
        <p className="card-text flex-grow-1">{post.body || "İçerik bulunamadı."}</p>
        <a href="#" className="btn btn-primary mt-auto">
          Detay
        </a>
      </div>
    </div>
  )
}
export default Card
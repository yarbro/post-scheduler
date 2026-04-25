export default function PhotoList({ photos, maxHeight = "full" }) {
  if (!photos || photos.length ===0) return null

  return (
    <div className="flex items-start gap-3">
      {photos.map((photo) => (
        <div key={photo.id}>
          <img
            src={photo.image_url}
            alt={photo.caption || ''}
            className={`h-${maxHeight} object-cover rounded-lg border border-gray-100`}
          />
        </div>
      ))}
    </div>
  )
}

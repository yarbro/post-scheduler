export default function PhotoList({ photos, imgClassName = "" }) {
  if (!photos || photos.length === 0) return null

  return (
    <div className="flex items-start gap-3 mt-5">
      {photos.map((photo) => (
        <div key={photo.id}>
          <img
            src={photo.image_url}
            alt={photo.caption || ""}
            className={`${imgClassName} rounded-lg border border-gray-100`}
          />
        </div>
      ))}
    </div>
  )
}

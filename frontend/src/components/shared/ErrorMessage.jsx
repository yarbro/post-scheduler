export default function ErrorMessage({ message }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
      <p className="text-sm text-red-600 font-medium">{message}</p>
    </div>
  )
}

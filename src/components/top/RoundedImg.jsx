export function RoundedImg({src, alt, object}) {
  return (
    <img src={src} alt={alt} className="w-full h-full object-cover rounded-2xl" />
  )
}
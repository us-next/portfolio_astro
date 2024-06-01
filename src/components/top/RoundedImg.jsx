export function RoundedImg({src, alt, height, object, bg}) {
  return (
    <img src={src} alt={alt} className={`w-full rounded-2xl ${height} ${object} ${bg}`} />
  )
}
interface NazarBoncuguIconProps {
  className?: string
}

function NazarBoncuguIcon({
  className = 'h-[22px] w-[22px] sm:h-[25px] sm:w-[25px]',
}: NazarBoncuguIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={`${className} shrink-0`}
    >
      <circle cx="16" cy="16" r="15" fill="#1f255f" />
      <circle cx="16" cy="14.35" r="8.35" fill="#6f8cff" />
      <circle cx="16" cy="14" r="7.15" fill="#f5f1eb" />
      <circle cx="16" cy="13.25" r="5.1" fill="#d8b288" />
      <circle cx="16" cy="12.8" r="2.15" fill="#151515" />
      <circle cx="16.95" cy="12" r="0.55" fill="#f5f1eb" />
    </svg>
  )
}

export default NazarBoncuguIcon

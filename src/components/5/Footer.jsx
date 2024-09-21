import { SOCIAL_MEDIA_LINKS } from "../../constants"



const Footer = () => {
  return (
    <div className="mb-8 mt-20">
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
            </a>
            ))}
        </div>
    </div>
  )
}

export default Footer
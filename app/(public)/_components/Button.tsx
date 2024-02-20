import Image from 'next/image'

type buttonProps = {
    type: "button"
    title: string
    icon?: string
    variant: string
    full?: boolean
}

// Remplazar el componente Button por el de button de ShadCn y adaptarlo al diseño

const Button = ({type, title, icon, variant, full}: buttonProps) => {
  return (
    <button type={type} className={`${variant}`}>
        <label>{title}</label>
        { icon && <Image src={icon} alt='icon-button' width={25} height={25}/>}
    </button>
  )
}

export default Button
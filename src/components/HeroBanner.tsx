interface IHeroBannerProps {
  img: {
    title: string
    alt: string
    urls: { small: string; medium: string; large: string }
  }
}

export default function HeroBanner({ img }: IHeroBannerProps): JSX.Element {
  const { title, alt, urls } = img

  return (
    <div className='w-full'>
      <picture>
        <source type='image/png' srcSet={urls.small} media='(max-width: 480px)' />
        <source type='image/png' srcSet={urls.medium} media='(max-width: 767px)' />
        <source type='image/png' srcSet={urls.large} media='(max-width: 1023px)' />
        <img title={title} alt={alt} src={urls.large} className='w-full' />
      </picture>
      <span className='text-xl'>hola</span>
    </div>
  )
}

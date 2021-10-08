import './Surface.css'

export default function Surface(props) {
    const {className, bg, bgStickToStart = false, bgStickToEnd = false, children} = props

    return (
        <div className={`Surface ${bg === 'light' && 'Surface_bg_light'} 
                                 ${bg === 'dark' && 'Surface_bg_dark'} 
                                 ${bg === 'deepDark' && 'Surface_bg_deepDark'} 
                                 ${bg === 'lightToDark' && 'Surface_bg_lightToDark'}
                                 ${bg === 'darkToLight' && 'Surface_bg_darkToLight'}
                                 ${bg === 'accent' && 'Surface_bg_accent'} 
                                 ${bgStickToStart && 'Surface_bgStickToStart'} 
                                 ${bgStickToEnd && 'Surface_bgStickToEnd'}
                                 ${className}`}>
            {children}
        </div>
    )
}

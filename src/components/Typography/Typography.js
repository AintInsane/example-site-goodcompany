import './Typography.css'

export default function Typography(props) {
    const { className, variant, color, paragraph=false, children } = props

    return (
        <div
            className={`Typography
                ${variant === 'logo' ? 'Typography_variant_logo' : ''}
                ${variant === 'h1' ? 'Typography_variant_h1' : ''}
                ${variant === 'h2' ? 'Typography_variant_h2' : ''}
                ${variant === 'h3' ? 'Typography_variant_h3' : ''}
                ${variant === 'h4' ? 'Typography_variant_h4' : ''}
                ${variant === 'text1' ? 'Typography_variant_text1' : ''}
                ${variant === 'text2' ? 'Typography_variant_text2' : ''}
                ${variant === 'text3' ? 'Typography_variant_text3' : ''} 
                ${variant === 'text4' ? 'Typography_variant_text4' : ''}
                ${variant === 'text5' ? 'Typography_variant_text5' : ''}
                ${variant === 'h4' ? 'Typography_variant_h4' : ''}
                ${color === 'light' ? 'Typography_color_light' : ''}
                ${color === 'blue' ? 'Typography_color_blue' : ''}
                ${color === 'grey' ? 'Typography_color_grey' : ''}
                ${color === 'primary' ? 'Typography_color_primary' : ''}
                ${color === 'secondary' ? 'Typography_color_secondary' : ''}
                ${paragraph === true ? 'Typography_paragraph' : ''}
                ${className}
            `}
        >
            {children}
        </div>
    )
};

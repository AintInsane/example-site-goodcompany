import './Container.css'

export default function Container(props) {
    const { className, children } = props
    return (
        <div className={`Container ${className}`}>
            {children}
        </div>
    )
}

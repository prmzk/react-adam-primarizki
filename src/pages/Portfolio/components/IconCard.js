
const IconCard = ({data}) => {
    return (
        <div className="icon-card p-3">
            <div>
                {data.icon}
                <h2 className="fw-bolder fs-5 mt-4 mb-3">{data.name}</h2>
                <p>{data.text}</p>
            </div>
        </div>
    )
}

export default IconCard

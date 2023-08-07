
export const Testimonial = ({ img, testimonial, name, position }) => {
    return (
        <div>
            <img src={img} alt="photo" />
            <p>{testimonial}</p>
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    )
}

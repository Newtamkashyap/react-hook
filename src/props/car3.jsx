

export const Car = (props) => {
    return (
        <>
            <h4>Car objcet we are passing here that is : {props.brand.model }</h4>

        </>
    )
}

export function CarObject() {
    const carDetails = { name: "Ford", color: "red", model: "Mustang" }
    return (
        <>
           
            <Car brand={carDetails}/>
        </>
    )

}
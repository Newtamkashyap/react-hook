

export const Cars = (props) => {
    return (
        <div>
            <h4>I have one  {props.brand}</h4>
        </div>
    )
}

export function Garage() {
    
    return (
        <div>
            <h4>I am Car </h4>
            <Cars brand="range rover"/>
        </div>
    )
}
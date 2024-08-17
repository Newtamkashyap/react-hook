

export const CarComponent1 = (props) => {
    return (
        <>
            <h4>Name of car is : {props.name}</h4>
        </>
    )
}

export const CarComponent2 = () => {
    const carname = "BMW";
    return (
        <>
            <h4></h4>
            <CarComponent1 name={carname} />
        </>
    )
}